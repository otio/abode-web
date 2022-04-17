<template>
  <div id="page-section-wrapper">
    <section
      v-for="component in pageComponents"
      :id="component._type"
      :key="component._key"
      class="pt-24"
    >
      <component :is="component._type" v-bind="component" />
    </section>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

export default {
  // validate({ params, query, store }) {

  //   return (
  //     query.preview === 'true' || store.state.settings.nav.includes(params.slug)
  //   )
  // },
  async asyncData({ $sanity, store, route }) {
    // debugger
    const navPageId = store.state.settings.nav.find(
      (page) => page.slug === route.params.slug
    )
    const queryParams = { pageId: navPageId._id }
    // TODO Clean up query
    const pageQuery = groq`*[ _id == $pageId ]{
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
        _type == 'reviewPicker' => {
          clientReviews[]->{...}
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
    const result = await $sanity.fetch(pageQuery, queryParams)
    // debugger d
    return result[0]
  },
  data() {
    return {
      pageData: {},
    }
  },
  mounted() {
    this.pageData = this.pageComponents
  },
}
</script>

<style scoped></style>
