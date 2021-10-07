<template>
  <section class="hero">
    <div class="hero-nav">
      <div class="nav-content">
        <img
          alt=""
          class="nav-logo"
          src="https://via.placeholder.com/183.29x85.07"
        />
        <div class="nav-menu">
          <p class="nav-link">Selling</p>
          <p class="nav-link">Buying</p>
          <p class="nav-link">Team</p>
          <p class="nav-link">Resources</p>
        </div>
      </div>
    </div>
    <div class="heading">
      <p class="heading-text">{{ headingText }}</p>
      <p class="chaser-text">{{ chaserText }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
  props: {
    chaserText: {
      type: String,
      default: "Competence, Exclusivity and Passion"
    },
    headingText: {
      type: String,
      default: "Abode San Francisco Real Estate"
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/main.scss";
.hero {
  background-size: 100% 100%;
  background-position: center;
  background-image: url("https://via.placeholder.com/1922x1080");
  padding: 0 1px 570px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.hero-nav {
  background-color: $transparent-white-smoke;
  margin-bottom: 70px;
  padding: 34.96px 127.85px 34.97px 127.86px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
.nav-link {
  color: $black;
  text-align: center;
  letter-spacing: 1px;
  @include hanuman-24-bold;
}
.heading {
  height: 55.88%;
  padding: 0 419px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: stretch;
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