<template>
  <section class="section-space clients-reviews">
    <h2 class="reviews-section-heading">Clients Reviews</h2>
    <div class="review-content">
      <img
        alt=""
        class="back"
        src="https://static.overlay-tech.com/assets/2dc50bd2-3ca7-46cf-9194-1fdff94d1461.svg"
      />
      <div class="circle-group-content">
        <div class="circle-aligner">
          <div class="bg-circle"></div>
        </div>
        <div class="content">
          <div class="quote-icon">
            <img
              alt=""
              class=""
              src="https://static.overlay-tech.com/assets/1ae009d7-7fee-4389-bac2-6c4a85d848be.svg"
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
      <img
        alt=""
        class="back"
        src="https://static.overlay-tech.com/assets/831880d0-ccc6-454f-a4a3-69ffdb1d15a3.svg"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "ClientsReviews"
};
</script>

<style lang="scss" scoped>
@import "~/assets/main.scss";
.clients-reviews {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0rem;
}
.reviews-section-heading {
  width: 712.61px;
  color: $black-1;
  text-align: center;
  margin-bottom: 80px;
  letter-spacing: 0.75px;
  @include hanuman-60-regular;
}
.review-content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1920px;
}
.back {
  width: 59.77px;
  height: 119.53px;
  &:not(:last-of-type) {
    margin-right: 120px;
  }
}
.circle-group-content {
  margin-right: 120px;
  width: 764px;
  height: 721px;
  position: relative;
}
.circle-aligner {
  width: calc(100% - 20px);
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
  left: 81.2px;
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
  @include roboto-28-regular;
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