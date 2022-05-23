<template>
  <div id="sections-wrapper">
    <section
      v-for="component in pageComponents"
      :id="component._type"
      :key="component._key"
    >
      <component :is="component._type" :options="component" />
    </section>
  </div>
</template>

<script>
import { mainPage } from '../assets/js/sanityQueries'

export default {
  // TODO Implement validation params
  // validate({ query, store }) {
  //   return (
  //     query.preview === 'true' || store.state.settings.home.slug === 'index'
  //   )
  // },
  async asyncData({ $sanity, store }) {
    const queryParams = { homeId: store.state.settings.home._id }
    // TODO Clean up query
    const result = await $sanity.fetch(mainPage('homeId'), queryParams)
    return result[0]
  },
}
</script>

<style scoped></style>
