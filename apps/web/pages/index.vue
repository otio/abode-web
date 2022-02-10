<template>
  <div id="sections-wrapper">
    <section
      v-for="component in pageComponents"
      :id="component._type"
      :key="component._key"
    >
      <component :is="component._type" v-bind="component" />
    </section>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

export default {
  validate({ params, query, store }) {
    return (
      query.preview === 'true' || store.state.settings.home.slug === 'index'
    )
  },
  async asyncData({ $sanity, store }) {
    const queryParams = { homeId: store.state.settings.home._id }
    const homeQuery = groq`*[ _id == $homeId ]{
    title,
    slug,
    "pageComponents": components[]{
        ...,
        _type == 'meetTeam' => {
          introText,
          teamImage,
          "page": meetTeamPage{
            ...,
            linkToPage->{...}
          }
        },
        _type == 'magazineSignup' => {
          ...,
          promoImage,
          signup->{...}
        },
        _type == 'areasServed' => {
          _key,
          _type,
          areaPages[]->{...}
        },
        _type == 'marketingCta' => {
          ...,
          ctaCapture->{...}
        },
      }
    }`
    const result = await $sanity.fetch(homeQuery, queryParams)
    return result[0]
  },
  created() {},
}
</script>

<style scoped></style>
