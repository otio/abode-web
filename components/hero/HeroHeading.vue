<template>
  <div class="hero-heading">
    <h1 class="heading">{{ heading }}</h1>
    <p class="chaser">{{ chaser }}</p>
  </div>
</template>

<script>
export default {
  name: 'HeroHeading',
  props: {
    chaser: {
      type: String,
      default: 'Competence, Exclusivity and Passion',
    },
    heading: {
      type: String,
      default: 'Abode San Francisco Real Estate',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/main.scss';
.hero-heading {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.heading {
  max-width: 1082px;
  color: $secondary-darkmode;
  text-align: center;
  text-shadow: 0 0 32px $transparent-black;
  @include hanuman-96-bold;
}
.chaser {
  width: 1082px;
  color: $black;
  text-align: center;
  letter-spacing: 1px;
  @include source-serif-pro-38-regular;
}
</style>
