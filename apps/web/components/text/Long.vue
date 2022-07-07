<template>
  <div :class="[spacing, size]">
    <p>
      {{ textContent }}
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    textContent() {
      return this.options?.textLongContent ?? ''
    },
    size() {
      switch (this.options?.textLongSize) {
        case 'lg':
          return 'text-2xl leading-loose sm:(leading-normal) xs:(leading-normal)'
        case 'xl':
          return 'text-4xl'

        default:
          return 'text-lg'
      }
    },
    spacing() {
      return `px-${this.options?.textLongSpacing} pb-16 sm:(mx-0) xs:(mx-8)`
    },
    alignment() {
      return `xl:(items-center)`
    },
  },
}
</script>

<style scoped></style>
