<template>
  <div id="sections-wrapper" class="mt-250px">
    <h1 class="font-display text-6xl text-center">Client Testimonials</h1>
    <section
      v-for="review in testimonials"
      :id="review._id"
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
  async asyncData({ $sanity, query }) {
    // TODO Clean up query
    const reviewQuery = groq`*[ _type == 'clientReview' ]{ ... }`
    const result = await $sanity.fetch(reviewQuery)
    return { testimonials: result, query }
  },
  mounted() {
    this.scrollToReview()
  },
  methods: {
    scrollToReview() {
      if (document && this.query?.id) {
        const review = document.getElementById(this.query.id)
        return review.scrollIntoView({ behavior: 'smooth' })
      }
    },
  },
}
</script>

<style scoped></style>
