<template>
  <div id="hero-content" class="relative">
    <img :src="imgSizes.hd" alt="" />
    <div class="gradient"></div>
    <div class="absolute inset-10rem">
      <!-- <div class="absolute top-18rem left-26.25rem"> -->
      <div class="flex flex-col">
        <div
          class="font-display text-center text-firebrick text-8xl mt-10 mb-60"
        >
          <p class="">Abode San Francisco Real Estate</p>
        </div>
        <div class="text-3xl text-white text-center self-stretch">
          <p class="font-semibold tracking-wider">
            Competence, Exclusivity and Passion
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerContent',
  data() {
    return {
      imgSizes: {
        hd: 'https://res.cloudinary.com/mill-birdy/image/upload/c_mfit,h_1080,w_1920/v1640567963/Abode-Web/san-francisco-downtown-skyline_xznsvv.jpg',
        '2xl':
          'https://res.cloudinary.com/mill-birdy/image/upload/c_mfit,h_1080,w_3840/v1640567963/Abode-Web/san-francisco-downtown-skyline_xznsvv.jpg',
        xl: 'https://res.cloudinary.com/mill-birdy/image/upload/v1640567963/Abode-Web/san-francisco-downtown-skyline_xznsvv.jpg',
        lg: 'https://res.cloudinary.com/mill-birdy/image/upload/v1640567963/Abode-Web/san-francisco-downtown-skyline_xznsvv.jpg',
        md: 'https://res.cloudinary.com/mill-birdy/image/upload/v1640567963/Abode-Web/san-francisco-downtown-skyline_xznsvv.jpg',
        sm: 'https://res.cloudinary.com/mill-birdy/image/upload/v1640567963/Abode-Web/san-francisco-downtown-skyline_xznsvv.jpg',
        xs: 'https://res.cloudinary.com/mill-birdy/image/upload/v1640567963/Abode-Web/san-francisco-downtown-skyline_xznsvv.jpg',
      },
    }
  },
}
</script>

<style scoped>
.gradient {
  width: 100vw;
  height: 1080px;
  background: linear-gradient(
    180deg,
    var(--white) 0%,
    var(--transparent-white) 73%
  );
  position: absolute;
  right: -1px;
  top: 0;
}
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  /* High density stuff here */
}
</style>
