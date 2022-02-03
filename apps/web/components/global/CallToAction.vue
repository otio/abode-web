<template>
  <section
    :class="$attrs.ctaStyle"
    :style="
      $attrs.ctaStyle === 'hero' ? `background-image: url(${imgUrl})` : ''
    "
  >
    <div
      :class="isSolid ? 'bg-whitesmoke bg-opacity-80 p-16' : ''"
      :style="layoutStyle"
    >
      <div v-if="$attrs.ctaStyle === 'split'" id="split-image" class="mr-16">
        <img id="" alt="" :src="imgUrl" />
      </div>
      <div
        class="flex flex-col"
        :style="$attrs.ctaStyle === 'split' ? 'width: 50%;' : ''"
      >
        <h2 id="headline" :class="headlineStyle">{{ headline }}</h2>
        <p v-show="chaser" id="chaser" class="text-2xl mb-12">
          {{ chaser }}
        </p>
        <form class="flex flex-col items-center">
          <p id="floater" class="text-center text-2xl mb-8">{{ floater }}</p>
          <div class="flex flex-row justify-around w-md h-3rem">
            <div
              v-for="(field, index) in $attrs.inputFields"
              :key="index"
              class="w-3/5 rounded-md"
            >
              <input class="input" :placeholder="placeholder(field)" />
            </div>
            <button class="button-cta" :formaction="$attrs.submitToUrl">
              <p class="text-white text-lg">
                {{ $attrs.buttonLabel }}
              </p>
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default: () => ({
        callHeading: 'Call to action heading',
        buttonLabel: 'Submit',
        submitToUrl: '_blank',
      }),
    },
  },
  data() {
    return {
      emailEntered: '',
      imgUrl: this.$attrs.imageAsset.secure_url ?? '',
    }
  },
  computed: {
    headline() {
      return this.$attrs?.headline
    },
    chaser() {
      return this.$attrs?.chaser
    },
    floater() {
      return this.$attrs?.floater
    },
    headlineStyle() {
      return `${this.$attrs.ctaStyle}-headline`
    },
    isSolid() {
      return this.$attrs.solidBackground ?? false
    },
    layoutStyle() {
      return this.$attrs.ctaStyle === 'split'
        ? `display: flex; flex-direction: row; justify-content: space-between; align-items: center;`
        : ''
    },
  },
  methods: {
    placeholder(field) {
      const splitDash = field.split('-')
      const formatted = `${this.capitalizeFirstLetter(
        splitDash[0]
      )} ${this.capitalizeFirstLetter(splitDash[1])}`
      return formatted
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    },
  },
}
</script>

<style scoped>
input::placeholder {
  @apply text-lg pl-4;
}
input {
  @apply border-2 border-grey border-opacity-70 w-full h-full;
}
.button-cta {
  @apply rounded bg-firebrick cursor-pointer px-8;
}

.hero-headline {
  @apply text-center text-7xl font-display mb-12;
}
.hero {
  background-size: 100% 100%;
  background-position: center;
  /* background-image: url('https://static.overlay-tech.com/assets/a8f7a5fc-1e39-4b9f-97bb-d960b6d6bf24.png'); */
  padding: 89px 415px 88px 405px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.split-headline {
  @apply flex font-secondary text-5xl mb-12;
}
.split {
  @apply flex flex-row items-center justify-around p-48;
}

.solid-bg {
  @apply bg-whitesmoke bg-opacity-80 p-16;
}
</style>
