<script setup lang="ts">
const colorMode = useColorMode();
const isDark = computed(() => colorMode.value === "dark");

function toggle() {
  colorMode.preference = isDark.value ? "light" : "dark";
}
</script>

<template>
  <ThemeSwitch @click="toggle" />
</template>
