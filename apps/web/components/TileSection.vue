<template>
  <div>
    <div
      v-for="component in textComponents"
      :id="`${component._type}-${component._key}`"
      :key="component._key"
    >
      <component :is="component._type" :options="component" />
    </div>
    <div
      v-for="component in tiles"
      :id="`${component._type}-${component._key}`"
      :key="component._key"
      class="flex flex-row"
    >
      <component :is="component._type" :options="component" />
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
      return this.options?.tilesWrapper ?? []
    },
  },
}
</script>

<style scoped></style>
