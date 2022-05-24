<template>
  <div class="flex flex-col justify-start <xs:flex-wrap">
    <header class="z-60 relative">
      <!-- <client-only><PreviewBanner /></client-only> -->
      <Nav class="pb-16" />
    </header>
    <main><Nuxt :nuxt-child-key="$route.path" /></main>
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
