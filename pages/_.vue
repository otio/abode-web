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
  asyncData(context) {
    // We are getting only the draft version of the content in this example.
    // In real world project you should ask for correct version of the content
    // according to the environment you are deploying to.
    // const version = context.query._storyblok || context.isDev ? 'draft' : 'published'

    const fullSlug =
      context.route.path === '/' || context.route.path === ''
        ? 'home'
        : context.route.path

    // Load the JSON from the API - loadig the home content (index page)
    return context.app.$storyapi
      .get(`cdn/stories/${fullSlug}`, {
        version: 'draft',
      })
      .then((res) => {
        return res.data
      })
      .catch((res) => {
        if (!res.response) {
          // eslint-disable-next-line no-console
          console.error(res)
          context.error({
            statusCode: 404,
            message: 'Failed to receive content form api',
          })
        } else {
          // eslint-disable-next-line no-console
          console.error(res.response.data)
          context.error({
            statusCode: res.response.status,
            message: res.response.data,
          })
        }
      })
  },
  // data() {
  //   return {
  //     story: { content: {} },
  //   }
  // },
  mounted() {
    this.$storybridge(
      () => {
        const storyblokInstance = new StoryblokBridge()

        // Listen to Storyblok's Visual Editor event
        storyblokInstance.on(['input', 'published', 'change'], (event) => {
          if (event.action === 'input') {
            if (event.story.id === this.story.id) {
              this.story.content = event.story.content
            }
          } else {
            this.$nuxt.$router.go({
              path: this.$nuxt.$router.currentRoute,
              force: true,
            })
          }
        })
      },
      (error) => {
        // eslint-disable-next-line no-console
        console.error(error)
      }
    )
  },
}
</script>

<script>
export default {}
</script>

<style scoped></style>
