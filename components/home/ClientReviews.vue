<template>
  <div id="clients-reviews" class="flex flex-col items-center">
    <div class="">
      <h2 id="reviews-section-heading" class="font-secondary text-5xl">
        Clients Reviews
      </h2>
    </div>
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
          <div class="">
            <button class="absolute -top-12 left-12rem">
              <img class="" src="~/assets/image/previous.svg" alt="" />
            </button>
            <div class="relative w-450px">
              <img
                id="image-bounding-box"
                alt=""
                class="absolute left-12 top-14"
                src="https://static.overlay-tech.com/assets/12f54c79-b9e8-4ea6-8bdd-f275a8a165b6.png"
              />
            </div>
            <button class="absolute -bottom-14 left-12rem">
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
#reviews-section-heading {
  margin-bottom: 6.5rem;
}
</style>
