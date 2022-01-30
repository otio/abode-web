<template>
  <section class="flex flex-row items-center justify-around p-48">
    <div class="mr-16">
      <img id="" alt="" :src="$attrs.promoImage.secure_url" />
    </div>
    <div id="pr-16">
      <h2 class="font-secondary text-5xl mb-12">{{ headline }}</h2>
      <p class="text-2xl mb-12">
        {{ chaser }}
      </p>
      <CallToAction :options="$attrs.signup" />
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    // headline() {
    //   return this.$$attrs.signup.headline
    // },
    // chaser() {
    //   return this.$$attrs.signup.chaser
    // },
  },
}
</script>

<style scoped></style>
