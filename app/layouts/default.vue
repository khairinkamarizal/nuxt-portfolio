<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk?: string) =>
    titleChunk ? `Khairinkamarizal — ${titleChunk}` : "Khairinkamarizal",
});
</script>

<template>
  <div class="min-h-screen flex flex-col bg-slate-50 text-slate-900">
    <Header />

    <main class="flex-1">
      <slot />
    </main>

    <Footer />
  </div>
</template>
