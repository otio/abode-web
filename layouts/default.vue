<template>
  <div class="flex flex-col justify-start">
    <header class="">
      <Nav class="pb-16" />
    </header>
    <Nuxt />
    <footer class="footer relative py-16 z-60">
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
