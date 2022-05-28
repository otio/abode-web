<template>
  <div id="page-section-wrapper">
    <section
      v-for="component in pageComponents"
      :id="component._type"
      :key="component._key"
    >
      <component :is="component._type === `callToAction` ? `ctaPicker` : component._type  " :options="component" />
    </section>
  </div>
</template>

<script>
import { mainPage } from '../assets/js/sanityQueries'

export default {
  layout: 'interior',
  // validate({ params, query, store }) {

  //   return (
  //     query.preview === 'true' || store.state.settings.nav.includes(params.slug)
  //   )
  // },
  async asyncData({ $sanity, store, route }) {
    const navPageId = store.state.settings.nav.find(
      (page) => page.slug === route.params.slug
    )
    const queryParams = { pageId: navPageId._id }
    const result = await $sanity.fetch(mainPage('pageId'), queryParams)
    return result[0]
  },
  data() {
    return {
      pageData: {},
    }
  },
}
</script>

<style scoped></style>
