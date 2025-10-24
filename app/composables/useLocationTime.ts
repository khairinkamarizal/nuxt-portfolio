import { onMounted, onBeforeUnmount, ref, computed } from "vue";

export function useLocationTime() {
  const city = ref<string>("");
  const country = ref<string>("");
  const timeZone = ref<string>(
    Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC"
  );
  const now = ref<Date>(new Date());
  const loading = ref<boolean>(true);

  let timer: number | undefined;

  const timeString = computed(() => {
    try {
      return new Intl.DateTimeFormat(undefined, {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZone: timeZone.value,
      }).format(now.value);
    } catch {
      return new Intl.DateTimeFormat(undefined, {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }).format(now.value);
    }
  });

  function startTick() {
    stopTick();
    timer = window.setInterval(() => {
      now.value = new Date();
    }, 1000);
  }

  function stopTick() {
    if (timer) window.clearInterval(timer);
    timer = undefined;
  }

  function inferFromTimeZone(tz: string) {
    const parts = tz.split("/");
    if (parts.length > 1 && !city.value) {
      city.value = parts[1].replace(/_/g, " ");
    }
  }

  type IpWho = {
    success: boolean;
    city?: string;
    country?: string;
    timezone?: { id?: string };
  };

  async function fetchByIP() {
    try {
      const res = await fetch(
        "https://ipwho.is/?fields=city,country,timezone,success",
        {
          cache: "no-store",
        }
      );
      if (!res.ok) return;
      const data = (await res.json()) as IpWho;
      if (!data.success) return;

      city.value = data.city || city.value;
      country.value = data.country || country.value;
      if (data.timezone?.id) timeZone.value = data.timezone.id;
    } catch {}
  }

  async function detectLocation() {
    loading.value = true;
    if (timeZone.value) inferFromTimeZone(timeZone.value);

    if ("geolocation" in navigator) {
      try {
        await new Promise<void>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
            () => resolve(),
            () => resolve(),
            { timeout: 3000 }
          );
        });
      } catch {}
    }

    await fetchByIP();

    if (!city.value && timeZone.value) inferFromTimeZone(timeZone.value);

    loading.value = false;
  }

  onMounted(() => {
    detectLocation();
    startTick();
  });

  onBeforeUnmount(() => {
    stopTick();
  });

  return {
    city,
    country,
    timeZone,
    timeString,
    loading,
  };
}
