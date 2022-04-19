<template>
  <article
    class="relative flex flex-row-reverse justify-center <md:(flex-col)"
    :class="articleLayout"
  >
    <div id="testimonial-text" class="bg-whitesmoke py-8" :class="reviewLayout">
      <div class="relative px-16">
        <div class="max-h-400px text-3xl text-center leading-normal mb-8" :class="messageLayout">
          {{ testimonial }}
        </div>
        <div class="text-4xl text-center font-semibold">
          {{ clientName }}
        </div>
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
  data() {
      return {
          currentReview: ''
      }
  },
  computed: {
    testimonial() {
        return this.review?.testimonial
    },
    clientName() {
        return this.review?.clientName
    },
    imgUrl() {
      return this.review?.testimonialImage?.secure_url ?? '/nav-logo.png'
    },
    reviewLayout() {
      return {
        'w-550px h-550px xs:(w-360px h-875px)': !this.isPage,
        'w-full': this.isPage,
      }
    },
    messageLayout() {
      return {
        'testimonial': this.showLink,
      }
    },
    articleLayout() {
      return {
        'px-100px': this.isPage,
      }
    },
    messageLength() {
        return this.testimonial.length
    },
    showLink() {
        return this.messageLength > 234
    }
  },
  methods: {
    getMessage(review) {
        this.currentReview = review.testimonial
        return this.currentReview
    },
    
  },
}
</script>

<style>
.testimonial {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
