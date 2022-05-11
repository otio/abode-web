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
  validate({ query, store }) {
    return (
      query.preview === 'true' || store.state.settings.home.slug === 'index'
    )
  },
  async asyncData({ $sanity, store }) {
    const queryParams = { homeId: store.state.settings.home._id }
    // TODO Clean up query
    const homeQuery = groq`*[ _id == $homeId ]{
    title,
    slug,
    "pageComponents": components[]{
        ...,
         _type == 'bannerContent' => {
          ...,
          "imgUrl": bannerImage.asset->{...}
        },
        _type == 'meetTeam' => {
          introText,
          teamImage,
          "page": meetTeamPage{
            ...,
            linkToPage->{...}
          }
        },
        _type == 'reviewPicker' => {
          clientReviews[]->{
            ...,
            "imgUrl": reviewImage.asset->{...},
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
         _type == 'ctaPicker' => {
          callToActionForms[]->{...}
        },
      }
    }`
    const result = await $sanity.fetch(homeQuery, queryParams)
    return result[0]
  },
}
</script>

<style scoped></style>
