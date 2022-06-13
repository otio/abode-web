<template>
  <article
    class="flex flex-row-reverse justify-center items-center lg:(flex-col) md:(flex-col) sm:(flex-col) xs:(flex-col)"
    :class="articleLayout"
  >
    <div id="testimonial-text" class="bg-whitesmoke px-16" :class="reviewLayout">
      <div class="flex flex-col xs:(items-center justify-center)">
        <div
          class="text-2xl leading-normal text-left pt-8"
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
        class="right-3.5rem text-3xl font-semibold self-end xs:(self-center)">
          {{ clientName }}
        </div>
      </div>
    </div>
    <div v-show="!isPage" id="testimonial-image" class="origin-center -mr-12 z-40">
      <div class="w-450px lg:(hidden) md:(hidden) sm:(hidden) xs:(hidden w-0)">
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
      return this.currentReview.slice(0, 190)
    },
    showLink() {
      return this.messageLength > 234
    },
    spacingStyle() {
      return {
        'max-h-400px xs:(max-h-875px)': !this.isPage,
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
