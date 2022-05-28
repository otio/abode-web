<template>
  <div :class="wrapperClasses">
    <TextHeadline :headline-type="headlineStyle">{{ headline }}</TextHeadline>
    <TextChaser :chase-type="chaserStyle">{{ chaser }}</TextChaser>
    <TextParagraph>{{ paragraphText }}</TextParagraph>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object || Array,
      default: () => ({}),
    },
  },
  computed: {
    chaser() {
      return this.options?.chaser ?? ''
    },
    chaserStyle() {
      return this.options?.chaserStyle
    },
    headline() {
      return this.options?.headline ?? ''
    },
    headlineStyle() {
      return this.options?.headlineStyle ?? ''
    },
    paragraphText() {
      return this.options?.paragraphText ?? ''
    },
    wrapperClasses(){
      switch (this.headlineStyle) {
      //  case 'center-bold-red':
      //     return 'xs:(w-full)'
      //   case 'lower-med-white':
      //     return 'z-40 flex flex-col items-center'
      //   case 'center-reg-black':
      //     return 'flex flex-col items-center'
        default:
          return ''
      }
    }
  },
}
</script>

<style>

</style>
