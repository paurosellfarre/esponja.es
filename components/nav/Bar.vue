<template>
  <header>
    <NavBackground />
    <nav
      class="flex items-center justify-between sm:justify-center flex-wrap p-6 bg-yellow-300"
    >
      <NavAnimatedLogo class="sm:mr-12" />
      <ul class="flex">
        <li class="mr-10">
          <NuxtLink
            to="/"
            class="font-concertOne font-bold text-2xl text-gray-800 hover:text-gray-600"
            >Inicio</NuxtLink
          >
        </li>
        <li class="mr-6">
          <NuxtLink
            to="/blog"
            class="font-concertOne font-bold text-2xl text-gray-800 hover:text-gray-600"
            >Blog</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>
