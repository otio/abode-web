<template>
  <div id="page-section-wrapper">
    <section
      v-for="component in pageComponents"
      :id="component._type"
      :key="component._key"
    >
      <component
        :is="componentSwitcher(component)"
        :options="component"
        class="mb-24"
      />
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
  methods: {
    componentSwitcher(component) {
      // component._type === `callToAction` ? `ctaPicker` : component._type
      switch (component._type) {
        case 'callToAction':
          return 'CtaPicker'
        case 'formPicker':
          return 'Form'
        default:
          return component._type
      }
    },
  },
}
</script>

<style scoped></style>
