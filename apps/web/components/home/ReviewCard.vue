<template>
  <article
    class="relative flex flex-row-reverse justify-center <md:(flex-col)"
    :class="articleLayout"
  >
    <div id="testimonial-text" class="bg-whitesmoke p-16" :class="reviewLayout">
      <div class="flex flex-col items-center justify-around">
        <p class="text-3xl text-center leading-normal mb-8">
          {{ review.testimonial }}
        </p>

        <p class="text-4xl text-center font-semibold">
          {{ review.clientName }}
        </p>
      </div>
    </div>
    <div v-show="!isPage" id="testimonial-image" class="origin-center">
      <div class="relative w-450px md:(hidden) sm:(hidden) xs:(hidden w-0)">
        <img alt="" class="absolute left-12 top-14" :src="imgUrl" />
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    review: {
      type: Object,
      default: () => {},
    },
    isPage: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    imgUrl() {
      return this.review?.testimonialImage?.secure_url ?? '/nav-logo.png'
    },
    reviewLayout() {
      return {
        'w-550px h-550px xs:(w-360px h-875px)': !this.isPage,
        'w-full': this.isPage,
      }
    },
    articleLayout() {
      return {
        'px-100px': this.isPage,
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
