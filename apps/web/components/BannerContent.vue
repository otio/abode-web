<template>
  <div class="relative">
    <picture>
      <source
        media="(min-width: 1920px)"
        :srcset="bannerSize(1920, 800)"
        sizes="100vw"
      />
      <source
        media="(min-width: 1536px)"
        :srcset="bannerSize(1536, 700)"
        sizes="100vw"
      />
      <source
        media="(min-width: 1280px)"
        :srcset="bannerSize(1280, 700)"
        sizes="100vw"
      />
      <source
        media="(min-width: 1024px)"
        :srcset="bannerSize(1024, 600)"
        sizes="100vw"
      />
      <source
        media="(min-width: 768px)"
        :srcset="bannerSize(768, 650)"
        sizes="100vw"
      />
      <source
        media="(min-width: 640px)"
        :srcset="bannerSize(640, 840)"
        sizes="100vw"
      />
      <source
        media="(min-width: 360px)"
        :srcset="bannerSize(360, 360 * 2)"
        sizes="100vw"
      />
      <img src="" alt="" />
    </picture>
    <!-- <div class="gradient"></div> -->
    <!-- <div class="absolute"> -->
    <div class="absolute top-0 left-0 w-full h-full">
      <!-- inset-10rem xs:(inset-1rem mt-7rem) -->
      <div class="relative w-full h-full">
        <!-- ALIGNMENT -->
        <div class="flex flex-row h-full mx-15rem justify-start">
          <!-- HEIGHT POSITION -->
          <div class="flex flex-col justify-center">
            <span v-for="block in options.bannerComponents" :key="block._key">
              <component
                :is="block._type === `callToAction` ? `ctaPicker` : block._type"
                :options="block"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
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
  computed: {},
  methods: {
    bannerSize(imageWidth, imageHeight) {
      try {
        return this.$urlFor(this.options?.imgUrl?._id)
          .width(imageWidth * 2)
          .height(imageHeight * 2 ?? null)
          .url()
      } catch (error) {
        console.error(error)
      }
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
