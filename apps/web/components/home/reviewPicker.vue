<template>
  <!-- TODO: Add button navigation for multiple Reviews -->
  <div
    id="review-carousel"
    class="flex flex-col items-center justify-center xs:(mb-75)"
  >
    <div class="mb-24">
      <h2 class="font-secondary text-5xl xs:(text-4xl)">Clients Reviews</h2>
    </div>
    <div class="relative">
      <div
        id="inner"
        class="relative flex flex-row justify-center items-center md:(flex-col) sm:(flex-col) xs:(flex-col)"
      >
        <button id="previous" class="" @click="previousReview()">
          <img
            class="transform origin-center rotate-90"
            src="/arrow.svg"
            alt=""
          />
        </button>
        <!-- <div class="flex flex-col items-start">
          <div id="num-1"></div>
          <div id="num-2"></div>
          <div id="num-2"></div>
        </div> -->
        <div v-for="(review, index) in reviews" :key="review._key">
          <ReviewCard v-show="selectedIndex === index" :review="review" />
        </div>
        <div v-show="reviews.length > 1">
          <button id="next" class="" @click="nextReview()">
            <img
              class="transform origin-center -rotate-90"
              src="/arrow.svg"
              alt=""
            />
          </button>
          <!-- <button class="absolute -top-12 left-12rem xs:(left-6.5rem)" @click="previousReview()" >
            <img class="" src="~/assets/image/previous.svg" alt="" />
          </button>
          <button class="absolute -bottom-12 left-12rem xs:(left-6.5rem)"  @click="nextReview()">
            <img src="~/assets/image/next.svg" alt="" />
          </button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClientReview',
  props: {
    options: {
      type: Object || Array,
      default: () => ({}),
    },
  },
  data() {
    return {
      reviews: this.options?.clientReviews,
      numberOfReviews: this.options?.clientReviews.length,
      selectedIndex: 0,
    }
  },
  computed: {},
  methods: {
    // testimonialTrimmer(review) {
    //   const testimonial = review?.testimonial
    //   const testimonialLength = testimonial.length
    //   if (typeof testimonial === 'string' && testimonialLength > 234) {
    //     let characterLimit = testimonial.slice(0, 218)
    //     const linkedTestimonial = `${characterLimit}...Read More ->`
    //     //   const breakout = [...testimonial]
    //     //   const short = breakout.splice(217, 0, '...Read More... ->')
    //     review.testimonial = linkedTestimonial
    //     debugger
    //     return review
    //   } else {
    //     return review
    //   }
    // },
    previousReview() {
      if (this.selectedIndex <= 0) {
        this.selectedIndex = this.numberOfReviews - 1
      } else {
        return (this.selectedIndex -= 1)
      }
    },
    nextReview() {
      if (this.selectedIndex >= this.numberOfReviews - 1) {
        this.selectedIndex = 0
      } else {
        return (this.selectedIndex += 1)
      }
    },
  },
}
</script>

<style scoped></style>
