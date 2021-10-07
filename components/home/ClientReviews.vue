<template>
  <div class="clients-reviews">
    <img
      alt=""
      class="sliders"
      src="https://static.overlay-tech.com/assets/8dadcac9-404f-4289-8cdc-272c20b63b58.svg"
    />
    <div class="client-reviews-wrapper">
      <h2 class="reviews-section-heading">
        Clients Reviews
      </h2>
      <div class="circle-group-content">
        <div class="circle-aligner">
          <div class="bg-circle"></div>
        </div>
        <div class="content">
          <div class="quote-icon">
            <img
              alt=""
              class=""
              src="https://static.overlay-tech.com/assets/cd8b19b3-7a03-4579-8b8c-455cc8a610c0.svg"
            />
          </div>
          <p class="testimonial-text">
            You’ve provided excellent service during this
            home buying process! I appreciate all the tips
            you offered and your guidance. You were so easy
            to communicate with and always made yourself
            available for all my questions. Thank you!
          </p>
          <p class="name">Lu Shan</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClientsReviews"
};
</script>

<style lang="scss" scoped>
@import "~/assets/main.scss";
.clients-reviews {
  padding: 0 160.08px 0 196.7px;
}
.sliders {
  width: 100.16%;
  height: 14.18%;
  position: absolute;
  left: -0.88px;
  bottom: 318.55px;
}
.client-reviews-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.reviews-section-heading {
  color: $black-1;
  text-align: center;
  margin-bottom: 72px;
  letter-spacing: 0.75px;
  @include hanuman-60-regular;
}
.circle-group-content {
  padding: 0 0 0 0.2px;
  height: 721px;
  width: 763.8px;
  position: relative;
}
.circle-aligner {
  width: calc(100.03% - 20px);
  height: calc(100% - 20px);
  padding: 10px;
  position: relative;
}
.bg-circle {
  width: 744px;
  height: 701px;
  background-color: $secondary-darkmode;
  border-radius: 50%;
}
.content {
  width: 78.8%;
  height: calc(69.35% - 29.54px);
  padding: 0 0 29.54px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: 80.8px;
  top: 91px;
}
.quote-icon {
  margin-bottom: 15px;
  padding: 0 247.12px;
  display: flex;
  align-items: flex-start;
  height: 91.46px;
  align-self: stretch;
}
// . {
//   width: 107.76px;
//   height: 91.46px;
// }
.testimonial-text {
  max-width: 602px;
  color: $secondary-light;
  text-align: center;
  @include roboto-35-regular;
}
.name {
  color: $secondary-light;
  text-align: center;
  position: absolute;
  left: 196.5px;
  bottom: -57.46px;
  letter-spacing: 1px;
  @include roboto-56-bold;
}
</style>