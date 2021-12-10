<template>
  <BaseLayout>
    <BannerContent />
    <MeetTeam />
    <FeaturedListing />
    <ClientReviews />
    <MagazineSignup />
    <AreasServed />
    <MarketingHouseEmail />
    <template #footer>
      <Footer />
    </template>
  </BaseLayout>
</template>

<script>
// TODO: Migrate to Nuxt Layouts
export default {
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories/home', {
        version: 'draft',
      })
      .then((res) => {
        return res.data
      })
      .catch((res) => {
        if (!res.response) {
          console.error(res)
          context.error({
            statusCode: 404,
            message: 'Failed to receive content form api',
          })
        } else {
          console.error(res.response.data)
          context.error({
            statusCode: res.response.status,
            message: res.response.data,
          })
        }
      })
  },
  data() {
    return {
      story: { content: {} },
    }
  },
  mounted() {
    this.$storybridge(
      () => {
        const { StoryblokBridge } = window
        const storyblokInstance = new StoryblokBridge()

        storyblokInstance.on(['input', 'published', 'change'], (event) => {
          if (event.action === 'input') {
            if (event.story.id === this.story.id) {
              this.story.content = event.story.content
            }
          } else {
            window.location.reload()
          }
        })
      },
      (error) => {
        console.error(error)
      }
    )
  },
}
</script>

<style scoped></style>
