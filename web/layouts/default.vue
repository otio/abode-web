<template>
  <div class="flex flex-col justify-start">
    <header class="z-60">
      <Nav class="pb-16" />
    </header>
    <Nuxt />
    <footer class="footer relative py-16 z-40">
      <Footer />
    </footer>
  </div>
</template>

<script>
// import Nav from '../components/hero/Nav'

export default {
  components: {
    // Nav,
  },
}
</script>

<style></style>
