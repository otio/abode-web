<template>
  <div :class="headlineSpacing">
    <h2 :class="headlineFontStyle">
      <slot></slot>
    </h2>
  </div>
</template>

<script>
export default {
  props: {
    headlineType: {
      type: String,
      default: 'center-bold-red',
    },
    options: {
      type: Object || Array,
      default: () => ({}),
    },
  },
}
</script>

<style scoped>
.headline-shadow {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}
</style>
