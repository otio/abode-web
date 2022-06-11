<template>
  <article
    class="relative flex flex-row-reverse justify-center items-center <md:(flex-col)"
    :class="articleLayout"
  >
    <div id="testimonial-text" class="bg-whitesmoke" :class="reviewLayout">
      <div class="flex flex-col">
        <div
          class="text-2xl leading-normal text-left"
          :class="spacingStyle"
        >
          {{ !isPage && showLink ? shortened : testimonial }}
          <span v-if="!isPage && showLink">
            <NuxtLink
              :to="`/testimonials?#${review._id}`"
              class="text-firebrick"
            >
              ...Read More</NuxtLink
            >
          </span>
        </div>
        <div 
        :class="isPage ? '-bottom-2rem' : ''"
        class="absolute right-3.5rem text-3xl font-semibold">
          {{ clientName }}
        </div>
      </div>
    </div>
    <div v-show="!isPage" id="testimonial-image" class="origin-center -mr-12 z-40">
      <div class="w-450px md:(hidden) sm:(hidden) xs:(hidden w-0)">
        <img alt="" :src="reviewImg" class="" />
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ReviewCard',
  props: {
    // options: {
    //   type: Object || Array,
    //   default: () => ({}),
    // },
    review: {
      type: Object,
      default: () => {},
    },
    linkedTestimonial: {
      type: String,
      default: '',
    },
    isPage: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentReview: this.review?.testimonial,
      linkedReview: '',
    }
  },
  computed: {
    articleLayout() {
      return {
        'px-100px': this.isPage,
      }
    },
    clientName() {
      return this.review?.clientName
    },
    // messageLayout() {
    //   return {
    //     'overflow-ellipsis': this.showLink,
    //   }
    // },
    messageLength() {
      return this.currentReview.length
    },
    reviewImg() {
      if (this.review?.imgUrl !== null) {
        return this.review.imgUrl?.url
      } else if (this.review?.testimonialImage) {
        return this.review.testimonialImage.url
      } else {
        return '/Abode-Logo.svg'
      }
      // this.review?.imgUrl !== null ? this.review.imgUrl.url : this.reviee
    },
    reviewLayout() {
      return {
        'w-550px h-550px xs:(w-360px h-875px)': !this.isPage,
        'w-full': this.isPage,
      }
    },
    shortened() {
      return this.currentReview.slice(0, 220)
    },
    showLink() {
      return this.messageLength > 234
    },
    spacingStyle() {
      return {
        'max-h-400px ': !this.isPage,
        'pb-24': this.isPage,
        'mb-12': !this.isPage,
      }
    },
    testimonial() {
      return this.currentReview
    },
  },
  methods: {},
}
</script>

<style></style>
