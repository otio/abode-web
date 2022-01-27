<template>
  <section class="relative">
    <img :src="$attrs.bgImage.derived[0].secure_url" alt="" />
    <div class="gradient"></div>
    <div class="absolute inset-10rem">
      <!-- <div class="absolute top-18rem left-26.25rem"> -->
      <div class="flex flex-col">
        <div v-for="block in bannerComponents" :key="block._key">
          <component :is="block._type" v-bind="block" />
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
  data() {
    return {
      bannerComponents: this.$attrs.bannerComponents,
    }
  },
  computed: {
    // headline() {
    //   return this.$attrs.bannerComponents
    // },
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
