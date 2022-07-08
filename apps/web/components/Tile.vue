<template>
  <div>
    <div
      v-for="component in tileText"
      :id="`${component._type}-${component._key}`"
      :key="component._key"
    >
      <component :is="component._type" :options="component" />
    </div>
    <div>
      <img :src="tileImage" alt="" />
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
  computed: {
    tileImage() {
      return (
        this.options?.tileImage ??
        `https://dummyimage.com/500x500/808080/fff.png`
      )
    },
    tileText() {
      return this.options?.tileText?.textComponents ?? []
    },
  },
}
</script>

<style scoped></style>
