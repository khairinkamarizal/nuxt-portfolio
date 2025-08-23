<template>
  <header class="border-b bg-white/70 backdrop-blur">
    <div class="container mx-auto px-4 h-16 flex items-center justify-between">
      <NuxtLink
        to="/"
        class="font-bold"
        ><UiAppLogo color="#000"
      /></NuxtLink>

      <nav class="flex gap-6 text-sm">
        <NuxtLink
          to="/"
          class="hover:opacity-80"
          >Home</NuxtLink
        >
        <NuxtLink
          to="/about"
          class="hover:opacity-80"
          >About</NuxtLink
        >
      </nav>
    </div>
  </header>
</template>
