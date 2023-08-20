<template>
  <div class="flex flex-col min-h-screen">
    <NavBar />
    <div class="mt-10 lg:ml-54 lg:mr-54 ml-10 mr-10 mb-20">
      <slot />
    </div>
    <NavFooter />
  </div>
</template>
