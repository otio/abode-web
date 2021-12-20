<template>
  <div class="w-screen flex flex-col justify-start">
    <header class="relative">
      <Nav class="" />
      <slot name="header"></slot>
    </header>
    <main class="">
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
