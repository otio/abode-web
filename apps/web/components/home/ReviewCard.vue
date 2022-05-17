<template>
  <article
    class="relative flex flex-row-reverse justify-center items-center <md:(flex-col)"
    :class="articleLayout"
  >
    <div id="testimonial-text" class="bg-whitesmoke py-8" :class="reviewLayout">
      <div class="relative px-16">
        <div
          class="text-3xl text-center leading-normal mb-8"
          :class="spacingStyle"
        >
          {{ !isPage && showLink ? shortened : testimonial }}
          <span v-if="!isPage && showLink">
            <NuxtLink
              :to="`/testimonials?#${review._id}`"
              class="text-firebrick"
            >
              ...Read More -></NuxtLink
            >
          </span>
        </div>
        <div class="text-4xl text-center font-semibold">
          {{ clientName }}
        </div>
      </div>
    </div>
    <div v-show="!isPage" id="testimonial-image" class="origin-center -mr-12">
      <div class="w-450px md:(hidden) sm:(hidden) xs:(hidden w-0)">
        <img alt="" class="" :src="imgUrl" />
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ReviewCard',
  props: {
    options: {
      type: Object || Array,
      default: () => ({}),
    },
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
    testimonial() {
      return this.currentReview
    },
    shortened() {
      return this.currentReview.slice(0, 220)
    },
    clientName() {
      return this.review?.clientName
    },
    imgUrl() {
      if(this.review?.imgUrl !== null){
        return this.review.imgUrl.url
      } 
      // else if(this.review?.testimonialImage){
      //   return this.review.testimonialImage.secure_url
      // } 
      else {
        return '/Abode-Logo.svg'
      }
    },
    reviewLayout() {
      return {
        'w-550px h-550px xs:(w-360px h-875px)': !this.isPage,
        'w-full': this.isPage,
      }
    },
    // messageLayout() {
    //   return {
    //     'overflow-ellipsis': this.showLink,
    //   }
    // },
    articleLayout() {
      return {
        'px-100px': this.isPage,
      }
    },
    spacingStyle() {
      return {
        'max-h-400px ': !this.isPage,
      }
    },
    messageLength() {
      return this.currentReview.length
    },
    showLink() {
      return this.messageLength > 234
    },
  },
}
</script>

<style></style>
