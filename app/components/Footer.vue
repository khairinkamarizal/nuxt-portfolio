<template>
  <footer class="dark:bg-black fixed bottom-0 w-screen">
    <div class="px-16 py-8 text-sm dark:text-white">
      {{ new Date().getFullYear() }} ©
      <NuxtLink
        to="/"
        class="hover:opacity/80 font-medium"
        >Khairinkamarizal</NuxtLink
      >. All rights reserved.
    </div>
  </footer>
</template>
