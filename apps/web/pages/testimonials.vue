<template>
  <div id="sections-wrapper" class="mt-250px">
    <h1 class="font-display text-6xl text-center">Client Testimonials</h1>
    <section
      v-for="review in testimonials"
      :key="review._id"
      class="relative my-48 text-center"
    >
      <ReviewCard :review="review" is-page />
    </section>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

export default {
  async asyncData({ $sanity, store }) {
    // const queryParams = { homeId: store.state.settings.home._id }
    // TODO Clean up query
    const reviewQuery = groq`*[ _type == 'clientReview' ]{ ... }`
    const result = await $sanity.fetch(reviewQuery)
    return { testimonials: result }
  },
}
</script>

<style scoped></style>
