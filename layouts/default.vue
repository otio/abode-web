<template>
   <div class="page-wrapper w-screen">
      <header class="my-10 mx-16 z-60">
         <Nav />
      </header>

      <main><Nuxt /></main>
      
      <footer class="footer">
         <Footer />
      </footer>
   </div>
</template>

<script>
import Nav from '../components/hero/Nav'

export default {
   components:{
      Nav
   }
}
</script>

<style>
.footer {
  @apply w-screen my-10 z-60;
  background-color: white;
}
.page-wrapper {
   @apply hd:container 2xl:container xl:container lg:container md:container sm:container xs:container mx-auto flex flex-col justify-center;
}
</style>
