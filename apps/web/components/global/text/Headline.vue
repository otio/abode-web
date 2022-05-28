<template>
  <div :class="headlineSpacing">
    <h2 :class="headlineFontStyle">
      <slot></slot>
    </h2>
  </div>
</template>

<script>
export default {
  props: {
    headlineType: {
      type: String,
      default: 'center-bold-red',
    },
  },
  computed: {
    headlineFontStyle() {
      switch (this.headlineType) {
        case 'center-bold-red':
          return 'font-display text-center text-firebrick text-8xl 2xl:(text-7xl) xl:(text-6xl) lg:(text-5xl) md:(text-5xl) sm:(text-5xl) xs:(text-5xl)'
        case 'lower-med-white':
          return 'font-secondary text-center text-firebrick text-6xl'
        case 'center-reg-black':
          return 'font-secondary text-center text-black text-5xl'
        case 'left-med-trans':
          return 'font-bold'
        default:
          return ''
      }
    },
    headlineSpacing() {
      switch (this.headlineType) {
        case 'center-bold-red':
          return 'mt-10 mb-60 lg:(mb-28) md:(mb-28) sm:(mb-28) xs:(mt-24 mb-90)'
        case 'lower-med-white':
          return 'bg-white absolute -bottom-13rem px-8rem py-1rem headline-shadow'
        default:
          return ''
      }
    },
  },
}
</script>

<style scoped>
.headline-shadow {
  box-shadow: 0 10px 20px rgba(0,0,0,.15);
}
</style>
