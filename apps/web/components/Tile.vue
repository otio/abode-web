<template>
  <div class="flex flex-col items-center mx-100px">
    <div>
      <img :src="tileImage" alt="" />
    </div>
    <div
      v-for="component in tileText"
      :id="`${component._type}-${component._key}`"
      :key="component._key"
    >
      <component :is="component._type" :options="component" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tile',
  props: {
    options: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      imageSize: {
        width: 300,
        height: 300,
      },
    }
  },
  computed: {
    tileImage() {
      return (
        this.options?.imgUrl?.url ??
        // `https://dummyimage.com/${this.imageSize.width}x${this.imageSize.height}/808080/fff.png`
        ` n`
      )
    },
    tileImageWidth() {
      return this.options?.imgUrl?.metadata?.dimensions?.width
    },
    tileText() {
      return this.options?.tileText?.textComponents ?? []
    },
  },
}
</script>

<style scoped></style>
