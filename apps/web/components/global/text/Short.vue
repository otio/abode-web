<template>
  <div>
    <component :is="tag" :class="[color, alignment]">{{ textContent }}</component>
    <!-- <h2 :class="headlineFontStyle">
      {{ textContent }}
      <slot></slot>
    </h2>
    <p :class="fontStyle" class="font-light tracking-wider">
      <slot></slot>
    </p> -->
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      
    }
  },
  computed: {
    
    textContent() {
      return this.options.shortTextContent
    },
    headlineType() {
      return this.options?.shortTextStyle
    },
    tag(){
      switch (this.headlineType) {
        case 'head':
          return 'h2'
        case 'subhead':
          return 'h3'
        default:
          return 'p'
      }
    },
    // headlineSpacing() {
    //   switch (this.headlineType) {
    //     case 'headline-red':
    //       return 'mt-10 mb-60 lg:(mb-28) md:(mb-28) sm:(mb-28) xs:(mt-24 mb-90)'
    //     // case 'lower-med-white':
    //     // return 'bg-white px-8rem py-1rem headline-shadow'
    //     default:
    //       return ''
    //   }
    // },
    // headlineFontStyle() {
    //   switch (this.headlineType) {
    //     case 'headline-red':
    //       return 'font-display text-center text-firebrick text-8xl 2xl:(text-7xl) xl:(text-6xl) lg:(text-5xl) md:(text-5xl) sm:(text-5xl) xs:(text-5xl)'
        // case 'lower-med-white':
        // return 'font-secondary text-center text-firebrick text-6xl'
        // case 'center-reg-black':
        // return 'font-secondary text-center text-black text-5xl'
        // case 'left-med-trans':
        // return 'font-bold'
    //     default:
    //       return ''
    //   }
    // },
    alignment(){
      switch (this.options?.shortTextAlign) {
        case 'left':
          return 'text-left'
        case 'right':
          return 'text-right'
        case 'justify':
          return 'text-justify'
        default:
          return 'text-center'
      }
    },
    color(){
      switch (this.options?.shortTextFontColor) {
        case 'red':
          return 'text-firebrick'
        case 'white':
          return 'text-white'
        default:
          return 'text-black'
      }
    },
    font(){
    return {}
    },
    textStyles(){
      return [this.fontColor, ]
    }
  },
}
</script>

<style scoped>
.headline-shadow {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}
</style>
