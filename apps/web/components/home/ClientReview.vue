<template>
  <!-- TODO: Add button navigation for multiple Reviews -->
  <div class="flex flex-col items-center justify-center xs:(mb-75)">
    <div class="mb-24">
      <h2 class="font-secondary text-5xl xs:(text-4xl)">Clients Reviews</h2>
    </div>
    <div class="relative">
      <div
        class="relative flex flex-row justify-center md:(flex-col) sm:(flex-col) xs:(flex-col)"
      >
        <!-- <div class="flex flex-col items-start">
          <div id="num-1"></div>
          <div id="num-2"></div>
          <div id="num-2"></div>
        </div> -->
        <div
          class="relative flex flex-row-reverse justify-center <md:(flex-col)"
        >
          <div
            id="testimonial-text"
            class="w-550px h-550px bg-whitesmoke p-16 xs:(w-360px h-875px)"
          >
            <div class="flex flex-col items-center justify around">
              <p class="text-3xl text-center leading-normal mb-8">
                {{ $attrs.testimonial }}
              </p>
              <p class="text-4xl text-center font-semibold">
                {{ $attrs.clientName }}
              </p>
            </div>
          </div>
          <div id="testimonial-image" class="">
            <button class="absolute -top-12 left-12rem xs:(left-6.5rem)">
              <img class="" src="~/assets/image/previous.svg" alt="" />
            </button>
            <div
              class="relative w-450px md:(hidden) sm:(hidden) xs:(hidden w-0)"
            >
              <img
                alt=""
                class="absolute left-12 top-14"
                :src="$attrs.testimonialImage.secure_url"
              />
            </div>
            <button class="absolute -bottom-14 left-12rem xs:(left-6.5rem)">
              <img src="~/assets/image/next.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClientReview',
}
</script>

<style scoped></style>
