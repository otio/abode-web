<template>
  <div></div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

export default {
  validate({ params, query, store }) {
    if (store.state.settings.home.slug === '/') {
      return true
    }
    return false
  },
  async asyncData({ store, $sanity }) {
    const homeQuery = groq`*[_id == ${store.state.settings.home._id}]`
    const result = await $sanity.fetch(homeQuery)
    return result
  },
}
</script>

<style scoped></style>
