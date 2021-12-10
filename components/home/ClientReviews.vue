<template>
  <div class="clients-reviews">
    <h2 class="reviews-section-heading">Clients Reviews</h2>
    <div class="relative-wrapper-one">
      <div class="review-wrapper">
        <div class="testimonial-slider">
          <div class="num-1"></div>
          <div class="num-2"></div>
          <div class="num-2"></div>
        </div>
        <div class="review-content">
          <div class="review-area">
            <div class="review-text">
              <p class="testimonial-text">
                You’ve provided excellent service during this home buying
                process! I appreciate all the tips you offered and your
                guidance. You were so easy to communicate with and always made
                yourself available for all my questions. Thank you!
              </p>
              <p class="name">Lu Shan</p>
            </div>
          </div>
          <div class="review-area-two">
            <div class="review-text">
              <p class="testimonial-text">
                You’ve provided excellent service during this home buying
                process! I appreciate all the tips you offered and your
                guidance. You were so easy to communicate with and always made
                yourself available for all my questions. Thank you!
              </p>
              <p class="name">Lu Shan</p>
            </div>
          </div>
          <img
            alt=""
            class="image-bounding-box"
            src="https://static.overlay-tech.com/assets/12f54c79-b9e8-4ea6-8bdd-f275a8a165b6.png"
          />
        </div>
      </div>
      <img
        alt=""
        class="nav-arrows"
        src="https://static.overlay-tech.com/assets/14b8c4a7-9252-43fd-9137-2ff7042f25da.svg"
      />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.clients-reviews {
  padding: 84.5px 360px 145.68px 232px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.reviews-section-heading {
  width: 712.61px;
  color: var(--black-2);
  text-align: center;
  margin-bottom: 49.82px;
  margin-left: 370.7px;
  letter-spacing: 0.75px;
  font-family: var(--hanuman-60-regular-family);
  font-size: var(--hanuman-60-regular-size);
  font-weight: var(--hanuman-60-regular-weight);
  line-height: var(--hanuman-60-regular-line-height);
}
.relative-wrapper-one {
  position: relative;
}
.review-wrapper {
  display: flex;
  align-items: flex-start;
  position: relative;
}
.testimonial-slider {
  margin-top: 281px;
  margin-right: 83px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.num-1 {
  width: 34px;
  height: 34px;
  background-color: var(--silver);
  margin-bottom: 26px;
  border-radius: 50%;
}
.num-2 {
  width: 34px;
  height: 34px;
  background-color: var(--transparent-silver);
  border-radius: 50%;
}
.num-2:not(:last-of-type) {
  margin-bottom: 26px;
}
.review-content {
  padding: 0 0 0 461px;
  position: relative;
}
.review-area {
  background-color: var(--white-smoke);
  padding: 72px 67px 56px 85px;
  position: relative;
}
.review-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.testimonial-text {
  height: 526px;
  width: 598px;
  color: var(--grayscale-off-black);
  display: flex;
  text-align: center;
  margin-bottom: 40px;
  font-family: var(--roboto-43-regular-family);
  font-size: var(--roboto-43-regular-size);
  font-weight: var(--roboto-43-regular-weight);
  line-height: var(--roboto-43-regular-line-height);
}
.name {
  height: 56px;
  width: 218px;
  color: var(--grayscale-off-black);
  display: flex;
  text-align: center;
  margin-left: 187px;
  letter-spacing: 1px;
  font-family: var(--roboto-56-bold-family);
  font-size: var(--roboto-56-bold-size);
  font-weight: var(--roboto-56-bold-weight);
  line-height: var(--roboto-56-bold-line-height);
}
.review-area-two {
  background-color: var(--white-smoke);
  padding: 72px 67px 56px 85px;
  display: flex;
  align-items: flex-start;
  position: absolute;
  right: 0;
  top: 0;
}
.image-bounding-box {
  width: 510px;
  height: 68%;
  position: absolute;
  left: calc(50% - 510px / 2);
  top: 101px;
}
.nav-arrows {
  width: 120px;
  height: 704.77px;
  position: absolute;
  left: 312px;
  top: 12px;
}
</style>
