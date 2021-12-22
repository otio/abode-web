<template>
  <div id="featured-listing" class="px-48">
    <div id="listing-content" class="flex flex-row justify-around">
      <div id="listing-details" class="w-sm inline-flex flex-col items-start">
        <div id="listing-text" class="flex flex-col">
          <p class="font-secondary text-5xl pb-12">Featured Listings</p>
          <p class="font-body text-3xl leading-loose">
            Dare to be inspired by exploring this curated portfolio of some of
            the finest real estate listings currently represented by Engel &amp;
            Völkers.
          </p>
        </div>
        <a class="listing-address">60 Ora Way #H303, San Francisco, CA 94131</a>
        <div id="listing-features" class="flex flex-row justify-around">
          <div class="list-feature">
            <div class="feature-content">
              <p class="feature-value">1</p>
              <p class="feature-label">Beds</p>
            </div>
          </div>
          <!--  FOR VISUAL -->
          <div class="list-feature">
            <div class="feature-content">
              <p class="feature-value">1</p>
              <p class="feature-label">Baths</p>
            </div>
          </div>
          <div class="list-feature">
            <div class="feature-content">
              <p class="feature-value">1</p>
              <p class="feature-label">Sq. Ft</p>
            </div>
          </div>
          <div class="list-feature">
            <div class="feature-content">
              <p class="feature-value">1</p>
              <p class="feature-label">Beds</p>
            </div>
          </div>
        </div>
      </div>
      <div id="featured-listing-image" class="">
        <img
          alt=""
          id="listing-image"
          class=""
          src="https://static.overlay-tech.com/assets/88d96045-a452-4f0f-87f1-f7bbe1b8486b.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
/* .featured-listing {
  padding: 250px 115px 250px 114px;
  display: flex;
  align-items: center;
}
.listing-content {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex: 1;
  height: 580px;
}
.listing-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.listing-text {
  margin-bottom: 46px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.heading {
  width: 470px;
  color: rgba(0, 0, 0, 1);
  text-align: center;
  margin-bottom: 50px;
  letter-spacing: 0.75px;
  font-family: var(--hanuman-60-regular-family);
  font-size: var(--hanuman-60-regular-size);
  font-weight: var(--hanuman-60-regular-weight);
  line-height: var(--hanuman-60-regular-line-height);
}
.body {
  max-width: 706px;
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: 400;
  line-height: 56px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: 1px;
}
.listing-address {
  width: 641px;
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: 400;
  line-height: 56px;
  color: var(--black);
  text-align: center;
  margin-bottom: 46px;
  letter-spacing: 1px;
  cursor: pointer;
}
.listing-features {
  display: flex;
  align-items: flex-start;
  width: 706px;
}
.list-feature {
  background-color: var(--gainsboro);
  padding: 31px 52.32px 31px 52.68px;
  display: flex;
  align-items: center;
  width: 55px;
  height: 92px;
}
.list-feature:not(:last-of-type) {
  margin-right: 22px;
}
.feature-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.feature-value {
  color: var(--black);
  text-align: center;
  margin-bottom: 28px;
  letter-spacing: 0.75px;
  font-family: var(--hanuman-48-bold-family);
  font-size: var(--hanuman-48-bold-size);
  font-weight: var(--hanuman-48-bold-weight);
  line-height: var(--hanuman-48-bold-line-height);
}
.feature-label {
  color: var(--black);
  text-align: center;
  letter-spacing: 0.75px;
  font-family: var(--hanuman-24-bold-family);
  font-size: var(--hanuman-24-bold-size);
  font-weight: var(--hanuman-24-bold-weight);
  line-height: var(--hanuman-24-bold-line-height);
}
  */
/* .listing-image {
  width: 100%;
  height: 100%;
} */
</style>
