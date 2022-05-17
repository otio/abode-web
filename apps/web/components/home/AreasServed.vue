<template>
  <div class="flex flex-col mb-48">
    <!-- TODO: change image sizing for responsivness -->
    <p
      id="heading"
      class="font-secondary text-5xl pb-20 text-center xs:(text-4xl)"
    >
      San Francisco Neighborhoods
    </p>
    <div
      class="flex flex-row justify-evenly xl:(flex-col) lg:(flex-col) md:(flex-col) sm:(flex-col) xs:(flex-col)"
    >
      <div
        v-for="area in neighborhoods"
        :id="`neighborhood-${area.areaName}`"
        :key="area._id"
        class="flex flex-col items-center xl:(flex-col-reverse) md:(flex-col-reverse) sm:(flex-col-reverse) xs:(flex-col-reverse)"
      >
        <img
          id="area-image"
          alt=""
          :src="area.areaPreviewImage.secure_url"
          class="pb-12"
        />
        <p
          id="area-label"
          class="font-secondary text-3xl xl:(mb-4) lg:(mb-4) md:(mb-4) sm:(mb-4) xs:(mb-4)"
        >
          {{ area.areaName }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object || Array,
      default: () => ({}),
    },
  },
  data() {
    return {
      neighborhoods: this.$attrs?.areaPages,
    }
  },
}
</script>

<style scoped></style>
