<template>
  <section class="relative font-display">
    <div class="flex flex-col items-center">
      <div>{{ formName }}</div>
      <div>
        <FormulateForm :schema="[{}]"></FormulateForm>
      </div>
    </div>
  </section>
</template>

<script>
import { formPage } from '../../assets/js/sanityQueries'

export default {
  layout: 'interior',
  // validate({ params, query, store }) {

  //   return (
  //     query.preview === 'true' || store.state.settings.nav.includes(params.slug)
  //   )
  // },
  async asyncData({ $sanity, store, route }) {
    const formPageId = store.state.forms.find(
      (page) => page.slug === route.params.slug
    )
    const queryParams = { pageId: formPageId._id }
    const result = await $sanity.fetch(formPage('pageId'), queryParams)
    return result[0]
  },
  computed: {
    formName() {
      return this.data?.formName ?? 'No form name given...'
    },
  },
}
</script>

<style scoped></style>
