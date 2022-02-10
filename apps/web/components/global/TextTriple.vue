<template>
  <div class="xs:(w-full)">
    <div
      class="font-display text-center text-firebrick mt-10 hd:(text-8xl mb-60) 2xl:mb-24 xl:mb-24 lg:(text-6xl mb-3rem) md:(text-6xl mb-20) xs:(text-5xl mb-48)"
    >
      <h1 class="">{{ headline }}</h1>
    </div>
    <div class="text-3xl text-white text-center self-stretch">
      <p class="font-light tracking-wider">
        {{ chaser }}
      </p>
    </div>
    <div class="text-lg text-white text-center self-stretch">
      <p class="font-light">
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    headline() {
      return this.$attrs.headline
    },
    chaser() {
      return this.$attrs.chaser
    },
    paragraph() {
      return this.$attrs.paragraphText
    },
  },
}
</script>

<style scoped></style>
