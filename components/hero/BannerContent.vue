<template>
  <div id="hero-content" class="">
    <div class="">
      <img
        alt=""
        class="w-screen h-1080px"
        src="https://res.cloudinary.com/mill-birdy/image/upload/c_scale,w_3840/v1638512389/Abode-Web/san-francisco-downtown-skyline_o1mzfa.jpg"
      />
    </div>
    <div class="bg-gradient-to-b from-white to-transparent z-10"></div>
    <div class="absolute inset-10rem">
      <!-- <div class="absolute top-18rem left-26.25rem"> -->
      <div class="flex flex-col">
        <div
          class="font-display flex flex-col items-center self-stretch text-firebrick text-8xl mb-56"
        >
          <p class="">Abode</p>
          <p class="">San Francisco</p>
          <p class="">Real Estate</p>
        </div>
        <div class="text-3xl text-white text-center self-stretch">
          <p class="font-semibold tracking-wider">
            Competence, Exclusivity and Passion
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerContent',
}
</script>

<style scoped>
.gradient {
  width: 100vw;
  height: 1080px;
  background: linear-gradient(
    180deg,
    var(--white) 0%,
    var(--transparent-white) 73%
  );
  position: absolute;
  right: -1px;
  top: 0;
}
</style>
