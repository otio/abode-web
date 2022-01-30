<template>
  <section class="flex flex-row items-center justify-around m-12rem">
    <div id="listing-info" class="flex flex-col pr-16">
      <div id="listing-text" class="flex flex-col items-center">
        <h2 class="font-secondary text-5xl pb-12">Featured Listing</h2>
        <p class="font-body text-2xl leading-loose">
          {{ $attrs.featuredIntro }}
        </p>
      </div>

      <div id="listing-details" class="flex flex-col">
        <a class="text-3xl text-center text-firebrick py-12 underline">{{
          $attrs.address
        }}</a>
        <div id="listing-features" class="flex flex-row justify-around">
          <div
            v-for="(feature, index) in listingDetails.features"
            :key="index"
            class="bg-whitesmoke"
          >
            <div class="text-4xl text-center font-secondary p-8">
              <p class="feature-value">{{ feature.value }}</p>
              <p class="feature-label">{{ feature.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="featured-listing-image" class="">
      <img
        id="listing-image"
        alt=""
        class=""
        :src="$attrs.locationImage.secure_url"
      />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      listingDetails: {
        // address: '60 Ora Way #H303, San Francisco, CA 94131',
        features: [
          { label: 'Beds', value: this.$attrs.locationFeatures.beds },
          { label: 'Baths', value: this.$attrs.locationFeatures.baths },
          { label: 'Sq. Ft', value: this.$attrs.locationFeatures.sqft },
          { label: 'Garages', value: this.$attrs.locationFeatures.garages },
        ],
      },
    }
  },
}
</script>

<style scoped></style>
