<template>
  <div :class="headlineSpacing">
    <h1 :class="headlineFontStyle">
      <slot></slot>
    </h1>
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
          return 'font-secondary text-center text-firebrick text-8xl'
        default:
          return ''
      }
    },
    headlineSpacing() {
      switch (this.headlineType) {
        case 'center-bold-red':
          return 'mt-10 mb-60 lg:(mb-28) md:(mb-28) sm:(mb-28) xs:(mt-24 mb-90)'
        case 'lower-med-white':
          return 'bg-white'
        default:
          return ''
      }
    },
  },
}
</script>

<style scoped></style>
