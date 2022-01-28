<template>
  <div>
    <div v-for="component in components" :key="component._key">
      <component :is="component._type" v-bind="component" />
    </div>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

// const homeQuery = (id) => groq`*[ _id == id ]`

export default {
  validate({ params, query, store }) {
    return (
      query.preview === 'true' || store.state.settings.home.slug === 'index'
    )
  },
  async asyncData({ $sanity, store }) {
    const queryParams = { homeId: store.state.settings.home._id }
    const homeQuery = groq`*[ _id == $homeId ]`
    const result = await $sanity.fetch(homeQuery, queryParams)
    return result[0]
  },
  created() {},
}
</script>

<style scoped></style>
