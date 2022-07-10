<template>
  <div :id="sectionId" class="w-full px-15rem py-100px">
    <div
      v-for="component in textComponents"
      :id="`${component._type}-${component._key}`"
      :key="component._key"
    >
      <component :is="component._type" :options="component" />
    </div>
    <div class="flex flex-row items-center justify-center space-evenly">
      <div
        v-for="component in tiles"
        :id="`${component._type}-${component._key}`"
        :key="component._key"
      >
        <component :is="component._type" :options="component" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TileSection',
  props: {
    options: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    textComponents() {
      return this.options?.tileSectionHeader?.textComponents ?? []
    },
    tiles() {
      return this.options?.tilesSection ?? []
    },
    sectionId() {
      return `${this.options?._type}-${this.options?._key}`
    },
  },
}
</script>

<style scoped></style>
