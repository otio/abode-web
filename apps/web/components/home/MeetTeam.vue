<template>
  <div class="flex flex-col items-center justify-center my-24">
    <!-- Custom Header -->
    <div
      class="flex flex-row items-center justify-center self-stretch mb-16 sm:(flex-col) xs:(flex-col)"
    >
      <h2 class="hidden">Meet the Abode Team</h2>
      <p class="flex items-center mr-8 font-display text-6xl">Meet the</p>
      <div class="flex flex-row items-center font-display text-6xl mr-4">
        <div class="flex flex-row items-center">
          <img alt="" class="mr-1" src="~/static/abode-minimal-logo.svg" />
          <p>bode</p>
        </div>
      </div>
      <p class="font-display text-6xl">Team</p>
    </div>
    <!-- Custom Header END -->
    <div
      class="flex flex-row justify-center items-center mx-36 xl:(flex-col items-center) lg:(flex-col items-center) md:(flex-col items-center) sm:(flex-col items-center) xs:(flex-col items-center)"
    >
      <img
        alt=""
        class="hd:(mr-16) 2xl:(mr-16) xl:(mt-0) lg:(mt-0) md:(mt-0) sm:(mt-0) xs:(mt-0)"
        :srcset="`
        ${imgSize(577)} 360w, 
        ${imgSize(577, 700)} 1024w, 
        ${imgSize(577, 700)} 1920w`"
        sizes="(min-width: 1920px) 100vw, (min-width: 1536px) 150vw, (min-width: 1280px) 200vw, (min-width: 1024px) 200vw, (min-width: 768px) 300vw, (min-width: 640px) 200vw, (min-width: 360px) 200vw"
      />

      <div class="flex flex-col items-center">
        <div class="flex flex-col items-start pb-16 xl:(items-center)">
          <h2
            class="font-secondary pb-16 text-5xl 2xl:(text-4xl) sm:(text-2xl)"
          >
            {{ $attrs.introText.headline }}
          </h2>
          <p
            class="font-body text-3xl leading-loose xs:(text-base, leading-normal)"
          >
            {{ $attrs.introText.paragraphText }}
          </p>
        </div>
        <!-- <button class="rounded bg-firebrick p-1.5rem cursor-pointer">
          <p class="text-white text-lg">MEET THE TEAM</p>
        </button> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MeetTeam',
  data() {
    return {
      teamImageId: this.$attrs?.teamImage?.public_id,
    }
  },
  methods: {
    imgSize(imageWidth, imageHeight = 'auto') {
      return this.$cloudinary.image.url(this.teamImageId, {
        width: imageWidth,
        height: imageHeight,
        // aspectRatio: 577.701,
        // crop: 'fit',
        // gravity: 'west',
        // dpr: 'auto',
        // format: 'webp',
      })
    },
  },
}
</script>

<style scoped></style>
