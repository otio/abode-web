<template>
  <div class="xs:(w-full)">
    <div class="mt-10 mb-60 lg:(mb-28) md:(mb-28) sm:(mb-28) xs:(mb-48)">
      <h1
        class="font-display text-center text-firebrick text-8xl 2xl:(text-7xl) xl:(text-6xl) lg:(text-5xl) md:(text-5xl) sm:(text-5xl) xs:(text-4xl)"
      >
        {{ headline }}
      </h1>
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
