<template>
  <div></div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

// const homeQuery = (id) => groq`*[ _id == id ]`

export default {
  validate({ params, query, store }) {
    if (store.state.settings.home.slug === '/') {
      return true
    }
    return false
  },
  async asyncData({ store, $sanity }) {
    // console.log(homeId)
    try {
      const homeId = store.state.settings.home._id
      const homeQuery = groq`*[_id == ${homeId}]`
      // const result = await $sanity.fetch(homeQuery(homeId))
      const result = await $sanity.fetch(homeQuery)
      // eslint-disable-next-line nuxt/no-this-in-fetch-data
      this.homeInfo = result
      // console.log(homeId)
      console.log('Result--->', result)
      return result
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('index asyncData()', error)
    }

    // const homeId = `${store.state.settings.home._id}`
    // const homeQuery = groq`*[_id == ${homeId}]`
    // const result = await $sanity.fetch(homeQuery)
    // // eslint-disable-next-line no-debugger
    // // debugger
    // return result
  },
  data() {
    return {
      homeInfo: null,
    }
  },
  created() {},
}
</script>

<style scoped></style>
