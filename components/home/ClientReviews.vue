<template>
  <div
    id="clients-reviews"
    class="flex flex-col justify-center items-center py-24"
  >
    <h2 id="reviews-section-heading" class="font-secondary text-5xl pb-12">
      Clients Reviews
    </h2>
    <div id="relative-wrapper-one" class="relative">
      <div id="review-wrapper" class="relative flex flex-row justify-center">
        <div id="testimonial-slider" class="flex flex-col items-start">
          <div id="num-1"></div>
          <div id="num-2"></div>
          <div id="num-2"></div>
        </div>
        <div
          id="review-content"
          class="relative flex flex-row-reverse justify-center"
        >
          <div id="review-area" class="w-550px h-550px bg-whitesmoke p-16">
            <div
              id="review-text"
              class="flex flex-col items-center justify around"
            >
              <p
                id="testimonial-text"
                class="text-3xl text-center leading-normal mb-8"
              >
                You’ve provided excellent service during this home buying
                process! I appreciate all the tips you offered and your
                guidance. You were so easy to communicate with and always made
                yourself available for all my questions. Thank you!
              </p>
              <p id="name" class="text-4xl text-center font-semibold">
                Lu Shan
              </p>
            </div>
          </div>
          <div class="flex flex-col items-center">
            <!-- <button class="relative rotate-180">
              <img src="~/assets/image/next.svg" alt="" />
            </button> -->
            <div class="relative w-450px">
              <img
                id="image-bounding-box"
                alt=""
                class="absolute left-12 top-14"
                src="https://static.overlay-tech.com/assets/12f54c79-b9e8-4ea6-8bdd-f275a8a165b6.png"
              />
            </div>
            <button class="relative">
              <img src="~/assets/image/next.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.num-1 {
  width: 34px;
  height: 34px;
  background-color: var(--silver);
  margin-bottom: 26px;
  border-radius: 50%;
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
