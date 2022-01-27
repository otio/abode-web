<template>
  <div>
    <div class="font-display text-center text-firebrick text-8xl mt-10 mb-60">
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
