<template>
  <section class="relative font-display">
    <Form class="mb-24" :options="inputs" />
  </section>
</template>

<script>
import { formPage } from '../../assets/js/sanityQueries'

export default {
  layout: 'forms',
  validate({ params, store }) {
    const isRoute = store.state.forms.find((form) => form.slug === params.slug)
    // const isPreview = query.preview === 'true' ?? false
    // eslint-disable-next-line no-unneeded-ternary
    return isRoute !== undefined ? true : false
  },
  async asyncData({ $sanity, store, route }) {
    const formPageId = store.state.forms.find(function (form) {
      return form.slug === route.params.slug
    })
    const queryParams = { pageId: formPageId._id }
    const formQuery = formPage('pageId')
    const result = await $sanity.fetch(formQuery, queryParams)
    // eslint-disable-next-line no-debugger
    // debugger
    return { options: result[0] }
  },
  computed: {
    inputs() {
      return {
        _type: 'formPicker',
        schema: {
          _id: this?.options._id,
          _rev: this?.options._rev,
          _createdAt: this?.options?._createdAt,
          _uodatedAt: this?.options?._updatedAt,
          formInputs: this?.options?.formInputs,
        },
      }
    },
    formName() {
      return this.data?.formName ?? 'No form name given...'
    },
  },
}
</script>

<style scoped></style>
