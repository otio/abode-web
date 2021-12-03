<template>
 <section class="container">
    <HeroNav />
    <HeroHd />
</section>
</template>

<script>
import HeroHd from "./hero/HeroHd";
import HeroNav from "./hero/HeroNav";

export default {
  name: "HeroSection",
  components: { HeroHd, HeroNav }
};
</script>

<style scoped>
@media screen and (min-width: 360px){
  .container {
    max-width: 360px;
  }
}

/* .hero-section {
  padding: 0 1px 0 0;
} */
.hero-hd {
  position: relative;
}
.hero-nav {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  /* top: calc(50% - 80px / 2); */
}
</style>