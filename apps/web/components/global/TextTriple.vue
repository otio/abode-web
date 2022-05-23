<template>
  <div class="xs:(w-full)">
    <textHeadline :headline-type="headlineStyle">{{ headline }}</textHeadline>
    <div class="text-3xl text-white text-center self-stretch">
      <p class="font-light tracking-wider">
        {{ chaser }}
      </p>
    </div>
    <div
      v-show="paragraph !== ''"
      class="text-lg text-white text-center self-stretch"
    >
      <p class="font-light">
        {{ paragraph }}
      </p>
    </div>
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
    headline() {
      return this.options?.headline ?? ''
    },
    headlineStyle() {
      return this.options?.headlineStyle ?? ''
    },
    paragraph() {
      return this.options?.paragraphText ?? ''
    },
  },
}
</script>

<style scoped></style>
