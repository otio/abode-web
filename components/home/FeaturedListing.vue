<template>
  <section class="flex flex-row items-center justify-around m-12rem">
    <div id="listing-info" class="flex flex-col pr-16">
      <div id="listing-text" class="flex flex-col items-center">
        <h2 class="font-secondary text-5xl pb-12">Featured Listings</h2>
        <p class="font-body text-2xl leading-loose">
          Dare to be inspired by exploring this curated portfolio of some of the
          finest real estate listings currently represented by Engel &amp;
          Völkers.
        </p>
      </div>

      <div id="listing-details" class="flex flex-col">
        <a class="text-3xl text-center text-firebrick py-12 underline">{{
          listingDetails.address
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
        src="https://static.overlay-tech.com/assets/88d96045-a452-4f0f-87f1-f7bbe1b8486b.png"
      />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      listingDetails: {
        address: '60 Ora Way #H303, San Francisco, CA 94131',
        features: [
          { label: 'Beds', value: 3 },
          { label: 'Baths', value: 2 },
          { label: 'Sq. Ft', value: 5000 },
          { label: 'Garages', value: 2 },
        ],
      },
    }
  },
}
</script>

<style scoped></style>
