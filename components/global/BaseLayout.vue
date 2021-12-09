<template>
  <div
    class="
      hd:container
      2xl:container
      xl:container
      lg:container
      md:container
      sm:container
      xs:container
      flex flex-col
      justify-start
    "
  >
    <header class="relative">
      <Nav class="" />
      <slot name="header"></slot>
    </header>
    <main class="relative">
      <slot></slot>
    </main>
    <footer class="footer relative w-screen py-16 z-60">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.footer {
  background-color: white;
}
</style>
