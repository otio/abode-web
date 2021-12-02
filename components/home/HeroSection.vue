<template>
 <div class="hero-section">
   <HeroHd />
  <!-- <div class="hero-hd">
    Include here the component "HeroHd"
  </div> -->
  <HeroNav />
  <!-- <div class="hero-nav">
    Include here the component "HeroNav"
  </div> -->
</div>
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

.hero-section {
  padding: 0 1px 0 0;
}
.hero-hd {
  position: relative;
}
.hero-nav {
  position: absolute;
  left: 0;
  top: calc(50% - 80px / 2);
}
</style>