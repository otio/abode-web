<template>
  <div></div>
  <!-- <page
    v-if="story.content.component"
    :key="story.content._uid"
    :blok="story.content"
  ></page> -->
</template>

<script>
export default {
  validate({ params, query, store }) {
    return (
      query.preview === 'true' || store.state.settings.nav.includes(params.slug)
    )
  },
}
</script>

<script>
export default {}
</script>

<style scoped></style>
