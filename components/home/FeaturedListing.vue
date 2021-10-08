<template>
  <section class="section-space featured-listing">
    <img
      alt=""
      class="section-divider-top"
      src="https://static.overlay-tech.com/assets/f490b6dc-0f60-45a5-8028-224f7a7239e2.svg"
    />
    <div class="listing-content">
      <div class="listing-details">
        <div class="listing-text">
          <p class="heading">Featured Listings</p>
          <p class="body">
            Dare to be inspired by exploring this curated
            portfolio of some of the finest real estate
            listings currently represented by Engel &amp;
            Völkers.
          </p>
        </div>
        <a class="listing-address"
          >60 Ora Way #H303, San Francisco, CA 94131</a
        >
        <div class="listing-features">
          <div class="list-feature">
            <div class="feature-content">
              <p class="feature-value">1</p>
              <p class="feature-label">Beds</p>
            </div>
          </div>
          <div class="list-feature">
            <div class="feature-content">
              <p class="feature-value">1</p>
              <p class="feature-label">Beds</p>
            </div>
          </div>
          <div class="list-feature">
            <div class="feature-content">
              <p class="feature-value">1</p>
              <p class="feature-label">Beds</p>
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
      <img
        alt=""
        class="listing-image"
        src="https://static.overlay-tech.com/assets/95a8772c-a662-4fd7-825b-956f74f5a9ab.png"
      />
    </div>
    <img
      alt=""
      class="section-divider-bottom"
      src="https://static.overlay-tech.com/assets/7f31a6c6-becd-4cf6-a014-a5b150d9318c.png"
    />
  </section>
</template>

<script>
export default {
  name: "FeaturedListing"
};
</script>

<style lang="scss" scoped>
@import "~/assets/main.scss";
.featured-listing {
  padding: 0 0 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.section-divider-top {
  width: 939.54px;
  margin-bottom: 131px;
}
.listing-content {
  margin-bottom: 131px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.listing-details {
  margin-right: 74px;
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
  color: $black-1;
  text-align: center;
  margin-bottom: 50px;
  letter-spacing: 0.75px;
  @include hanuman-60-regular;
}
.body {
  max-width: 706px;
  color: $black-1;
  letter-spacing: 1px;
  @include roboto-30-regular;
}
.listing-address {
  width: 641px;
  color: $secondary-darkmode;
  text-align: center;
  margin-bottom: 46px;
  letter-spacing: 1px;
  cursor: pointer;
  @include roboto-30-regular;
}
.listing-features {
  display: flex;
  align-items: flex-start;
  width: 706px;
}
.list-feature {
  background-color: $lavender-blush;
  padding: 31px 52.32px 31px 52.68px;
  display: flex;
  align-items: center;
  width: 55px;
  height: 92px;
  &:not(:last-of-type) {
    margin-right: 22px;
  }
}
.feature-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.feature-value {
  color: $secondary-darkmode;
  text-align: center;
  margin-bottom: 28px;
  letter-spacing: 0.75px;
  @include hanuman-48-bold;
}
.feature-label {
  color: $black;
  text-align: center;
  letter-spacing: 0.75px;
  @include hanuman-24-bold-line32;
}
.listing-image {
  width: 53.87%;
  align-self: stretch;
  object-fit: cover;
}
.section-divider-bottom {
  width: 55.56%;
}
</style>