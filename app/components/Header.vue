<template>
  <header class="dark:bg-black fixed top-0 w-screen">
    <div class="mx-auto px-16 py-8 grid grid-cols-6">
      <NuxtLink
        to="/"
        class="font-bold"
        ><AppLogo
          class="dark:text-white transition-all hover:rotate-10"
          size="36"
      /></NuxtLink>
      <DateLocation class="col-span-2" />
      <div></div>
      <nav
        class="flex gap-4 items-center justify-end font-medium tracking-tight dark:text-white">
        <NuxtLink
          to="/"
          class="nav-link"
          active-class="text-blue-500 after:scale-x-100"
          exact>
          Home
        </NuxtLink>

        <NuxtLink
          to="/work"
          class="nav-link"
          active-class="text-blue-500 after:scale-x-100">
          Work
        </NuxtLink>

        <NuxtLink
          to="/about"
          class="nav-link"
          active-class="text-blue-500 after:scale-x-100">
          About
        </NuxtLink>

        <NuxtLink
          to="/contact"
          class="nav-link"
          active-class="text-blue-500 after:scale-x-100">
          Contact
        </NuxtLink>
      </nav>
      <div class="items-center flex justify-end">
        <ThemeToggle />
      </div>
    </div>
  </header>
</template>
