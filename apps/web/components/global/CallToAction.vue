<template>
  <!-- TODO: change BG image sizing for responsivness -->
  <div :class="layoutPicker" :style="cssBackground">
    <div :class="ctaPicker" class="">
      <div
        v-show="componentStyle === 'split'"
        id="split-image"
        class="mr-16 xl:(mr-0 mt-16) lg:(mr-0 mt-16) md:(mr-0 mt-20) sm:(mr-0 mt-20) xs:(mr-0 mt-20)"
      >
        <img
          id=""
          alt=""
          :srcset="`
        ${imgSize(700)} 1920w,
        `"
        />
      </div>
      <div class="flex flex-col">
        <h2 id="headline" :class="headlinePicker">{{ headline }}</h2>
        <p v-show="chaser" id="chaser" class="text-2xl mb-12 xs:(mx-2)">
          {{ chaser }}
        </p>
        <form class="flex flex-col items-center">
          <p id="floater" class="text-center text-2xl mb-8">{{ floater }}</p>
          <div
            class="flex flex-row justify-around w-md h-3rem xs:(flex-col w-full h-7rem)"
          >
            <div
              v-for="(field, index) in $attrs.inputFields"
              :key="index"
              class="w-3/5 rounded-md xs:(w-full h-3rem mb-4)"
            >
              <input
                class="border-2 border-grey border-opacity-70 w-full h-full xs:(h-3rem)"
                :placeholder="placeholder(field)"
              />
            </div>
            <button
              class="rounded bg-firebrick cursor-pointer px-8 xs:(h-3rem)"
              :formaction="$attrs.submitToUrl"
            >
              <p class="text-white text-lg">
                {{ $attrs.buttonLabel }}
              </p>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default: () => ({
        callHeading: 'Call to action heading',
        buttonLabel: 'Submit',
        submitToUrl: '_blank',
      }),
    },
  },
  data() {
    return {
      emailEntered: '',
      bgImageId: this.$attrs.imageAsset?.public_id,
      componentStyle: this.$attrs.ctaStyle,
    }
  },
  computed: {
    headline() {
      return this.$attrs?.headline
    },
    chaser() {
      return this.$attrs?.chaser
    },
    floater() {
      return this.$attrs?.floater
    },
    headlineStyle() {
      return `${this.componentStyle}-headline`
    },
    isSolid() {
      return this.$attrs.solidBackground ? 'bg-whitesmoke bg-opacity-80' : ''
    },
    cssBackground() {
      return this.componentStyle === 'hero'
        ? `background-image: url(${this.imgSize(1920)})`
        : ''
    },
    layoutPicker() {
      switch (this.componentStyle) {
        case 'split':
          return `flex flex-row justify-between items-center py-16 xs:(mx-4)`
        case 'hero':
          return `z-20 p-16 flex justify-center items-center`

        default:
          return ''
      }
    },
    ctaPicker() {
      switch (this.componentStyle) {
        case 'split':
          return `${this.isSolid} flex flex-row justify-between items-center p-6rem xl:(flex-col-reverse) lg:(flex-col-reverse) md:(flex-col-reverse) sm:(flex-col-reverse) xs:(flex-col-reverse p-0 mx-2)`
        case 'hero':
          return `${this.isSolid} z-20 p-12 flex justify-center items-center`

        default:
          return ''
      }
    },
    headlinePicker() {
      switch (this.componentStyle) {
        case 'split':
          return `flex font-secondary text-5xl mb-12 xl:(justify-center) lg:(justify-center) md:(justify-center) sm:(justify-center) xs:(justify-center)`
        case 'hero':
          return `text-center text-7xl font-display mb-12`

        default:
          return ''
      }
    },
  },
  methods: {
    placeholder(field) {
      const splitDash = field.split('-')
      const formatted = `${this.capitalizeFirstLetter(
        splitDash[0]
      )} ${this.capitalizeFirstLetter(splitDash[1])}`
      return formatted
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    },
    imgSize(imageWidth, imageHeight = 'auto') {
      return this.$cloudinary.image.url(this.bgImageId, {
        width: imageWidth,
        height: imageHeight,
        // crop: 'fill',
        // gravity: 'center',
        // dpr: 'auto',
        // format: 'webp',
      })
    },
  },
}
</script>

<style scoped>
input::placeholder {
  @apply text-lg pl-4 xs:(p-0 text-center);
}
</style>
