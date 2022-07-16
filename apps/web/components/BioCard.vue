<template>
  <div class="w-full px-15rem">
    <div class="bg-grey-200 flex flex-row px-30px">
      <div class="flex-shrink-0 -mt-150px text-center">
        <img class="" width="475" :src="bioPhoto" alt="" />
        <div class="text-2xl flex flex-col">
          <span class="inline-block mb-8">{{ phoneNumber }}</span>
          <span class="inline-block mb-8">{{ email }}</span>
          <div
            v-show="socialLinks.length !== 0"
            class="flex flex-row justify-center"
          >
            <div
              v-for="link in socialLinks"
              :key="link._key"
              class="mx-20px mb-1rem"
            >
              <a
                :href="link.socialLink"
                target="_blank"
                rel="noopener noreferrer"
                class="px-20px"
              >
                <img :src="setSocialIcon(link)" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="-mt-7rem">
        <div class="font-display text-3xl text-center">
          <h2>
            <span>{{ fullName }}</span>
            <br />
            <span>{{ agentTitle }}</span>
          </h2>
        </div>
        <div class="font-body text-2xl">
          <p class="p-12 leading-normal">{{ bioText }}</p>
        </div>
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
      return `${this.fullName}. ${this.agentTitle}`
    },
    phoneNumber() {
      return this.options?.agentPhoneNumber ?? '+1 (555) 555-5555'
    },
    email() {
      return this.options?.agentEmail ?? 'first.last@domain.name'
    },
    socialLinks() {
      return this.options?.agentSocials ?? []
    },
  },
  methods: {
    setSocialIcon(link) {
      switch (link.socialIcon) {
        case 'facebook':
          return 'social/FB.svg'

        case 'instagram':
          return 'social/IG.svg'

        default:
          return ''
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
∏
