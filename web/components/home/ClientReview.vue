<template>
  <section class="flex flex-col items-center">
    <div class="mb-24">
      <h2 class="font-secondary text-5xl">Clients Reviews</h2>
    </div>
    <div class="relative">
      <div class="relative flex flex-row justify-center">
        <div class="flex flex-col items-start">
          <div id="num-1"></div>
          <div id="num-2"></div>
          <div id="num-2"></div>
        </div>
        <div class="relative flex flex-row-reverse justify-center">
          <div class="w-550px h-550px bg-whitesmoke p-16">
            <div class="flex flex-col items-center justify around">
              <p class="text-3xl text-center leading-normal mb-8">
                You’ve provided excellent service during this home buying
                process! I appreciate all the tips you offered and your
                guidance. You were so easy to communicate with and always made
                yourself available for all my questions. Thank you!
              </p>
              <p class="text-4xl text-center font-semibold">Lu Shan</p>
            </div>
          </div>
          <div class="">
            <button class="absolute -top-12 left-12rem">
              <img class="" src="~/assets/image/previous.svg" alt="" />
            </button>
            <div class="relative w-450px">
              <img
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
  </section>
</template>

<script>
export default {
  name: 'ClientReview',
}
</script>

<style scoped></style>
