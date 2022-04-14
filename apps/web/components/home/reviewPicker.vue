<template>
  <!-- TODO: Add button navigation for multiple Reviews -->
  <div id="review-carousel" class="flex flex-col items-center justify-center xs:(mb-75)">
    <div class="mb-24">
      <h2 class="font-secondary text-5xl xs:(text-4xl)">Clients Reviews</h2>
    </div>
    <div class="relative">
      <div
        id="inner"
        class="relative flex flex-row justify-center md:(flex-col) sm:(flex-col) xs:(flex-col)"
      >
        <!-- <div class="flex flex-col items-start">
          <div id="num-1"></div>
          <div id="num-2"></div>
          <div id="num-2"></div>
        </div> -->
        <div
          v-for="(review, index) in reviews"
          :key="review._key"
        >
          <ReviewCard v-show="selectedIndex === index" class="relative flex flex-row-reverse justify-center <md:(flex-col)" :review="review" />
        </div>
        <div v-show="reviews.length > 1">
          <button class="absolute -top-12 left-12rem xs:(left-6.5rem)" @click="previousReview()" >
            <img class="" src="~/assets/image/previous.svg" alt="" />
          </button>
          <button class="absolute -bottom-12 left-12rem xs:(left-6.5rem)"  @click="nextReview()">
            <img src="~/assets/image/next.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClientReview',
  data() {
    return {
      reviews: this.$attrs?.clientReviews,
      numberOfReviews: this.$attrs?.clientReviews.length,
      selectedIndex: 0,
    }
  },
  methods: {
    nextReview() {
      return this.selectedIndex + 1
    },
    previousReview() {
      if(this.selectedIndex < this.numberOfReviews - 1){
        return (this.selectedIndex += 1)
      } else {
        return (this.selectedIndex -= 1)
      }
    }
  },
}
</script>

<style scoped></style>
