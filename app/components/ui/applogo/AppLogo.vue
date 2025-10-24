<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    size?: number | string;
    color?: string;
    decorative?: boolean;
    title?: string;
  }>(),
  {
    size: 24,
    decorative: true,
    title: "Logo",
  }
);
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 100 100"
    :aria-hidden="decorative ? 'true' : undefined"
    role="img"
    :style="color ? { color } : undefined"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet">
    <title v-if="!decorative">{{ title }}</title>

    <polygon
      points="24.92 50 0 50 25.04 75 0 100 25 100 62.52 62.52 100 100 100 75 75.04 50 50 50 37.54 62.54 24.92 50" />
    <polygon
      points="75.08 50 100 50 74.96 25 100 0 75 0 37.48 37.48 0 0 0 25 24.96 50 50 50 62.46 37.46 75.08 50" />
  </svg>
</template>
