<template>
  <header>
    <NavBackground />
    <nav
      class="sm:flex items-center justify-between sm:justify-center sm:flex-wrap p-6 bg-yellow-300 grid grid-cols-12"
    >
      <NavAnimatedLogo class="sm:mr-12 col-span-4" />
      <ul class="sm:flex col-span-8">
        <li class="sm:mr-6">
          <NuxtLink
            to="/"
            class="font-concertOne font-bold text-2xl text-gray-800 hover:text-gray-600"
            >Inicio</NuxtLink
          >
        </li>
        <li class="sm:mr-6">
          <NuxtLink
            to="/tipos-de-esponjas-y-estropajos/esponja-natural"
            class="font-concertOne font-bold text-2xl text-gray-800 hover:text-gray-600"
            >Esponja Natural</NuxtLink
          >
        </li>
        <li class="sm:mr-6">
          <NuxtLink
            to="/tipos-de-esponjas-y-estropajos/esponja-sintetica"
            class="font-concertOne font-bold text-2xl text-gray-800 hover:text-gray-600"
            >Esponja Sintética</NuxtLink
          >
        </li>
        <li class="sm:mr-6">
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
