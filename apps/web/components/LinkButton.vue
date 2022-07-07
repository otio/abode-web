<template>
  <div class="relative w-max">
    <div
      class="px-6 py-2 bg-grey-100 font-medium text-sm hover:bg-grey-300 rounded"
    >
      <span v-if="isInternal">
        <NuxtLink :to="url">{{ label }}</NuxtLink>
      </span>
      <span v-else>
        <a :href="url" target="_blank" rel="noopener noreferrer">{{ label }}</a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LinkButton',
  props: {
    options: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    label() {
      return this.options?.linkLabel
    },
    isInternal() {
      return this.options?.linkDestination === 'internal'
    },
    url() {
      const slug = this.options?.slugType
      const link = this.assembleUrl(slug)
      return link
    },
    linkStyle() {
      // return this.options?.linkStyle ?? ''
      switch (this.options?.linkStyle) {
        case 'link-button':
          return 'px-10 py-4'
        default:
          return ''
      }
    },
    buttonBgColor() {
      switch (this.options?.buttonBgColor) {
        case 'grey':
          return 'bg-grey-100'

        default:
          return ''
      }
    },
  },
  methods: {
    assembleUrl(slug) {
      let result = ''
      for (const slugType in slug) {
        result = `/${slugType}/${slug[slugType]}`
      }
      return result
    },
  },
}
</script>

<style scoped>
.link-button {
  @apply px-10 py-4;
}
</style>
