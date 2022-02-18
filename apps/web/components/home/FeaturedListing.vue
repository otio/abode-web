<template>
  <div
    class="flex flex-row items-center justify-around m-12rem xl:(flex-col) lg:(flex-col m-0 mb-48) md:(flex-col m-0 mb-48) sm:(flex-col m-0 mb-48) xs:(flex-col m-0 mb-48)"
  >
    <div
      id="listing-info"
      class="flex flex-col pr-16 xl:(pr-0 mb-16) lg:(pr-0 mx-8 mb-16) md:(pr-0 mx-8 mb-16) sm:(pr-0 mx-8 mb-16) xs:(pr-0 mx-8 mb-16)"
    >
      <div id="listing-text" class="flex flex-col items-center">
        <h2 class="font-secondary text-5xl pb-12 xs:(text-4xl)">
          Featured Listing
        </h2>
        <p
          class="font-body text-2xl leading-loose sm:(leading-normal) xs:(leading-normal)"
        >
          {{ intro }}
        </p>
      </div>

      <div id="listing-details" class="flex flex-col">
        <a class="text-3xl text-center text-firebrick py-12 underline">{{
          address
        }}</a>
        <div
          id="listing-features"
          class="flex flex-row flex-wrap justify-evenly xs:(flex-col)"
        >
          <div
            v-for="(feature, index) in listingDetails.features"
            :key="index"
            class="bg-whitesmoke my-4"
          >
            <div class="text-3xl text-center font-secondary p-4 lg:text-2xl">
              <p>{{ feature.value }}</p>
              <p>{{ feature.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="featured-listing-image" class="">
      <img
        id="listing-image"
        :srcset="` 
        ${imgSize(600)} 360w,
        ${imgSize(600)} 1024w, 
        ${imgSize(700)} 1920w`"
        sizes="(min-width: 1920px) 100vw, (min-width: 1536px) 150vw, (min-width: 1280px) 175vw, (min-width: 640px) 175vw, (min-width: 360px) 175vw"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      intro: this.$attrs?.featuredIntro,
      listingDetails: {
        // address: '60 Ora Way #H303, San Francisco, CA 94131',
        features: [
          { label: 'Beds', value: this.$attrs.locationFeatures.beds },
          { label: 'Baths', value: this.$attrs.locationFeatures.baths },
          { label: 'Sq. Ft', value: this.$attrs.locationFeatures.sqft },
          { label: 'Garage', value: this.$attrs.locationFeatures.garages },
        ],
      },
      listingImageId: this.$attrs?.locationImage?.public_id,
      address: this.$attrs?.address,
    }
  },
  methods: {
    imgSize(imageWidth, imageHeight = 'auto') {
      return this.$cloudinary.image.url(this.listingImageId, {
        width: imageWidth,
        height: imageHeight,
        // aspectRatio: 1,
        // crop: 'fit',
        // gravity: 'west',
        // dpr: 'auto',
        // format: 'webp',
      })
    },
  },
}
</script>

<style scoped></style>
