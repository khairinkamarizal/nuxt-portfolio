<script setup lang="ts">
import { ref, computed } from "vue";

const hover = ref(false);
const lockedRight = ref(false);
const lockedLeft = ref(false);
const emit = defineEmits<{ (e: "click"): void }>();

const ball = 24;
const lane = 48;
const height = 24;
const pad = 2;

const slide = computed(() => Math.max(lane - ball, 0));

function handleClick() {
  if (hover.value) {
    if (lockedRight.value) {
      lockedRight.value = false;
      lockedLeft.value = true;
    } else if (lockedLeft.value) {
      lockedLeft.value = false;
      lockedRight.value = true;
    } else {
      lockedRight.value = true;
    }
  } else {
    lockedRight.value = true;
    lockedLeft.value = false;
  }

  emit("click");
}

function handleMouseLeave() {
  hover.value = false;
  lockedRight.value = false;
  lockedLeft.value = false;
}
</script>

<template>
  <button
    type="button"
    aria-label="Theme toggle"
    class="group relative inline-flex items-center justify-end select-none"
    :style="{ width: `${ball}px`, height: `${ball}px` }"
    @mouseenter="hover = true"
    @mouseleave="handleMouseLeave"
    @click="handleClick">
    <div
      class="absolute -z-0 rounded-full transition-all duration-300 ease-out opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 bg-transparent group-hover:bg-black/15 dark:group-hover:bg-white/15"
      :style="{
        right: `-${pad}px`,
        top: `-${(height - ball) / 2 + pad}px`,
        width: `${lane + pad * 2}px`,
        height: `${height + pad * 2}px`,
      }" />

    <div
      class="relative z-10 rounded-full transition-transform duration-300 ease-out bg-black dark:bg-white"
      :style="{
        width: `${ball}px`,
        height: `${ball}px`,
        transform: lockedRight
          ? 'translateX(0px)'
          : lockedLeft
          ? `translateX(${-slide}px)`
          : hover
          ? `translateX(${-slide}px)`
          : 'translateX(0px)',
      }" />
  </button>
</template>
