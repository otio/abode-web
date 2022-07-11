<template>
  <div class="w-full px-15rem">
    <div class="font-display text-3xl text-right">
      <h2>
        {{ headline }}
      </h2>
    </div>
    <div class="flex flex-row bg-grey-200">
      <div class="w-575px"><img :src="bioPhoto" alt="" /></div>
      <div class="font-body text-2xl">
        <p class="p-12">{{ bioText }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BioCard',
  props: {
    options: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    bioPhoto() {
      return this.options?.bioPhoto?.url ?? ''
    },
    bioText() {
      return this.options?.agentBioText ?? ''
    },
    fullName() {
      return `${this.options?.agentFullName.agentFirstName} ${this.options?.agentFullName.agentLastName}`
    },
    agentTitle() {
      return this.options?.agentTitle ?? ''
    },
    headline() {
      return `${this.fullName} - ${this.agentTitle}`
    },
  },
}
</script>

<style lang="scss" scoped></style>
∏
