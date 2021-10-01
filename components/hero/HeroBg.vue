<template>
  <img alt="" class="hero-image" :src="imgSrc" />
</template>

<script>
export default {
  name: 'HeroBg',
  props: {
    imgSrc: {
      type: String,
      default: 'https://via.placeholder.com/1920x1080',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/main.scss';
.hero-image {
  width: 1920px;
  height: 1080px;
}
</style>
