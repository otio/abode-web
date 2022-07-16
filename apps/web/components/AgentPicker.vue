<template>
  <div class="">
    <div v-for="agent in agents" :key="agent._key" class="mb-300px">
      <component :is="componentStyle" :options="agent"></component>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AgentPicker',
  props: {
    options: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    componentStyle() {
      return this.options?.infoStyle ?? ''
    },
    agents() {
      return this.options?.agents
    },
  },
}
</script>

<style scoped></style>
