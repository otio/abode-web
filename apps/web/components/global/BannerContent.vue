<template>
  <section class="relative">
    <img :src="$attrs.bgImage.derived[0].secure_url" alt="" />
    <div class="gradient"></div>
    <div class="absolute inset-10rem">
      <!-- <div class="absolute top-18rem left-26.25rem"> -->
      <div class="flex flex-col">
        <div
          class="font-display text-center text-firebrick text-8xl mt-10 mb-60"
        >
          <h1 class="">Abode San Francisco Real Estate</h1>
        </div>
        <div class="text-3xl text-white text-center self-stretch">
          <p class="font-light tracking-wider">
            Competence, Exclusivity and Passion
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BannerContent',
  props: {
    options: {
      type: Object || Array,
      default: () => ({}),
    },
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
