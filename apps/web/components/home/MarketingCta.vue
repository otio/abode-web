<template>
  <div class="marketing-house-email">
    <div class="bg-whitesmoke bg-opacity-80 p-16">
      <p class="text-7xl font-display mb-12">Marketing that sells your house</p>

      <CallToAction />
    </div>
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
}
</script>

<style scoped>
.marketing-house-email {
  background-size: 100% 100%;
  background-position: center;
  background-image: url('https://static.overlay-tech.com/assets/a8f7a5fc-1e39-4b9f-97bb-d960b6d6bf24.png');
  padding: 89px 415px 88px 405px;
  display: flex;
  align-items: center;
}
</style>
