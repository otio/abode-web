<template>
  <div class="flex flex-col items-center justify-center my-24">
    <!-- Custom Header -->
    <div class="flex flex-row items-center justify-center self-stretch mb-16">
      <h2 class="hidden">Meet the Abode Team</h2>
      <p class="flex items-center mr-8 font-display text-6xl">Meet the</p>
      <div class="flex flex-row items-center">
        <img alt="" class="mr-1" src="~/static/abode-minimal-logo.svg" />
        <p class="font-display text-6xl">bode Team</p>
      </div>
    </div>
    <!-- Custom Header END -->
    <div
      class="flex flex-row justify-center items-start self-stretch mx-36 <xl:(flex-col-reverse items-center)"
    >
      <picture id="team-image" class="mr-16">
        <source
          media="(min-width:1920px)"
          :srcset="`${imgSize(1000)} 1000w`"
          sizes="100vw"
        />
        <img
          src="https://via.placeholder.com/1000x1300.webp?text=Abode+Team+Image"
          alt=""
          class="mr-16"
        />
      </picture>
      <!-- <img alt="" class="mr-16" src="~/static/team-intro-photo.png" /> -->

      <div class="flex flex-col items-center">
        <div class="flex flex-col items-start pb-16">
          <h2 class="font-secondary text-5xl 2xl:text-4xl pb-16">
            {{ $attrs.introText.headline }}
          </h2>
          <p class="font-body text-3xl leading-loose">
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

<style scoped>
#team-image > img {
  width: 100%;
}
</style>
