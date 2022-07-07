<template>
  <section>
    <FormulateForm
      v-if="isSubmitted !== true"
      v-slot="{ hasErrors }"
      v-model="formValues"
      class="flex flex-col items-center"
      @submit="submitHandler"
    >
      <div
        class="flex flex-row justify-around w-md h-4rem xs:(flex-col items-center w-full h-7rem)"
      >
        <div
          v-for="(field, index) in formInputs"
          :key="index + 1"
          class="w-full xs:(text-center)"
        >
          <FormulateInput
            type="email"
            :placeholder="placeholder(field)"
            validation="bail|required|email"
            error-behavior="value"
            @keypress.enter="hasError !== true ? submitHandler : null"
          />
        </div>
        <div class="xs:(w-full)">
          <FormulateInput
            type="submit"
            :disabled="hasErrors"
            :name="buttonLabel"
          />
        </div>
      </div>
    </FormulateForm>
    <div v-else-if="bonusAsset !== null">
      <p id="thanks" class="text-center text-2xl mb-8">Thank You!</p>
      <p
        id="bonus-asset"
        class="text-center text-firebrick text-2xl underline mb-8"
      >
        <a :href="bonusAsset.bonusUrl" rel="noopener noreferrer"
          >Click Here -- {{ bonusAsset.bonusAssetLinkLabel }}</a
        >
      </p>
    </div>
    <div v-else>
      <p id="thanks" class="text-center text-2xl mb-8">Thank You!</p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      isSubmitted: false,
    }
  },
  computed: {
    bonusAsset() {
      return this.options?.bonusAsset ?? {}
    },
    buttonLabel() {
      return this.options?.linkLabel ?? 'Submit'
    },
    formId() {
      return this.getFormId(this.formSubmissionUrl)[0]
    },
    formInputs() {
      return this.options?.linkForm?.inputFields ?? []
    },
    formSubmissionUrl() {
      return this.options?.linkForm?.submitUrl ?? '_blank'
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
    getFormId(url) {
      const splitDash = url.split('/')
      return splitDash.slice(-1)
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    },
    async submitHandler(data) {
      this.$axios.setHeader('Accept', 'application/json')
      try {
        const result = await this.$axios.post(this.formSubmissionUrl, data)
        // console.info('FORM SUBMIT SUCCESS!')
        this.isSubmitted = true
        // eslint-disable-next-line no-console
        console.log(result)
        return result
      } catch (error) {
        if (error) {
          return this.$nuxt.error({
            statusCode: error.statusCode,
            message: error.message,
          })
        }
      }
    },
  },
}
</script>

<style scoped></style>
