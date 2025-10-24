<script setup lang="ts">
import { useLocationTime } from "~/composables/useLocationTime";

const props = defineProps<{
  city?: string;
  country?: string;
  timeZone?: string;
  class?: string;
}>();

const { city, country, timeZone, timeString, loading } = useLocationTime();

if (props.city) city.value = props.city;
if (props.country) country.value = props.country;
if (props.timeZone) timeZone.value = props.timeZone;
</script>

<template>
  <div :class="['flex items-center gap-2 line-clamp-1', $props.class]">
    <span
      v-if="!loading"
      class="font-semibold tracking-tight line-clamp-1">
      {{ [city, country].filter(Boolean).join(", ") }}
    </span>
    <span
      v-else
      class="opacity-60 tracking-tight font-medium line-clamp-1"
      >Detecting location…</span
    >

    <span
      v-if="!loading"
      class="font-medium tracking-tight line-clamp-1">
      {{ timeString }}
    </span>
  </div>
</template>
