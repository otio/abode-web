<template>
  <div>
    <div>{{ content }}</div>
    <button class="button-refresh text-white" @click="refresh">Refresh</button>
    <h1>I am rendered on the {{ renderedOn }} side</h1>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object || Array,
      default: () => ({}),
    },
  },
  asyncData() {
    return {
      content: 'Created at: ' + new Date(),
      renderedOn: process.client ? 'client' : 'server',
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },
  methods: {
    refresh() {
      this.$nuxt.refresh()
    },
  },
}
</script>

<style scoped>
.button-refresh {
  @apply rounded bg-firebrick cursor-pointer px-8;
}
</style>
