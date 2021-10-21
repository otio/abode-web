<template>
  <section class="hero">
    
    <div class="heading">
      <p class="heading-text">
        Abode San Francisco Real Estate
      </p>
      <p class="chaser-text">
        Competence, Exclusivity and Passion
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero"
};
</script>

<style lang="scss">
@import "~/assets/main.scss";
.hero {
  background-size: 100% 100%;
  background-position: center;
  // background-image: url("~assets/image/palace-of-fine-arts-1920w.png");
  background-image: url("~assets/image/palace-of-fine-arts-raw-1920w-v2.png");
  padding: 0 0 570px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.hero-nav {
  background-color: $transparent-white-smoke;
  margin-bottom: 75px;
  padding: 35px 138.71px 29.93px 117px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.nav-content {
  display: flex;
  align-items: center;
  width: 1664.29px;
}
.nav-logo {
  width: 183.29px;
  height: 85.07px;
  margin-right: 825px;
}
.nav-menu {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex: 1;
}
.sell-house {
  color: $black;
  text-align: center;
  letter-spacing: 1px;
  @include hanuman-24-bold;
}
.heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.heading-text {
  max-width: 1082px;
  color: $secondary-darkmode;
  text-align: center;
  margin-bottom: 25px;
  text-shadow: 0 0 32px $transparent-black;
  @include hanuman-96-bold;
}
.chaser-text {
  width: 1082px;
  color: $black;
  text-align: center;
  letter-spacing: 1px;
  @include source-serif-pro-38-regular;
}
</style>