<template>
  <form class="flex flex-col items-center">
    <p class="text-center text-2xl mb-8">
      {{ callHeading || options.callHeading }}
    </p>
    <div class="flex flex-row justify-around w-md h-3rem">
      <input class="w-3/5 rounded-md" placeholder="Email address" />
      <button
        class="rounded bg-firebrick cursor-pointer px-8"
        :formaction="submitToUrl || options.submitToUrl"
      >
        <p class="text-white text-lg">
          {{ buttonLabel || options.buttonLabel }}
        </p>
      </button>
    </div>
  </form>
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
    callHeading: {
      type: String,
      default: 'Call to action heading',
    },
    buttonLabel: {
      type: String,
      default: 'Submit',
    },
    submitToUrl: {
      type: String,
      default: '_blank',
    },
  },
  data() {
    return {
      emailEntered: '',
    }
  },
}
</script>

<style scoped>
input::placeholder {
  @apply text-lg pl-4;
}
input {
  @apply border-2 border-grey border-opacity-70;
}
</style>
