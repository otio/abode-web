<template>
  <section>
    <!-- <FormulateForm :schema="formSchema"></FormulateForm> -->
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
    formSchema() {
      return this.options?.linkFormFields.length !== 0
        ? this.formSchemaBuilder(this.options.linkFormFields)
        : []
    },
  },
  methods: {
    formSchemaBuilder(fields) {
      const transformed = fields.map(this.formTransformer)
      return transformed
    },
    formTransformer(field) {
      switch (field._type) {
        case 'formGroup':
          return this.formGroupTransform(field)
        case 'formText':
          return {}
        case 'formTextarea':
          return {}
        case 'formButton':
          return {}
        case 'formBox':
          return {}
        case 'formSelect':
          return {}
        case 'formSlider':
          return {}

        default:
          return {}
      }
    },
    formGroupTransform(field) {
      const children =
        field?.groupFields.length !== 0
          ? this.formSchemaBuilder(field.groupFields)
          : []
      const data = {
        type: 'group',
        class: 'flex flex-row',
        name: field.formGroupLabel,
        validation: '',
        repeatable: field?.groupRepeatable ?? false,
        'add-label': field?.groupRepeatLabel ?? null,
        // value: [{}],
        children,
      }
      return JSON.stringify(data)
    },
    formTextTransformer(field) {
      const processedValidations = this.formValidationBuilder(field?.textValidations?.validationTypes)
      const data = {
        type: 'text',
        name: field.fieldName,
        label: field.fieldLabel,
        validation: processedValidations,
      }
      return JSON.stringify(data)
    },
    // END FORM TRANSFORMERS
    formValidationBuilder(rawValidations){
      const validationAssembled = rawValidations.map(this.validationTransformer)
      return validationAssembled
    },
    validationTransformer(validation){
          switch (validation) {
            case 'accepted':
              return ['accepted']
            case 'after':
              return ['after']
            default:
              return []
          }
          // { title: 'Alphabetic characters only', value: 'alpha' },
          // { title: 'Alphanumeric characters only', value: 'alphanumeric' },
          // { title: 'Bail - Stop on 1st error', value: 'bail' },
          // { title: 'Before Date', value: 'before' },
          // { title: 'Between number range', value: 'between' },
          // // { title: 'confirm', value: 'confirm' },
          // { title: 'Date format', value: 'date' },
          // { title: 'Email - Is Valid', value: 'email' },
          // { title: 'Ends with?', value: 'ends_with' },
          // { title: 'In input?', value: 'in' },
          // { title: 'Matches', value: 'matches' },
          // { title: 'Max number', value: 'max' },
          // // { title: 'mime', value: 'mime' },
          // { title: 'Min number', value: 'min' },
          // { title: 'Not in input', value: 'not' },
          // { title: 'is Number', value: 'number' },
          // { title: 'Optional', value: 'optional' },
          // { title: 'Required', value: 'required' },
          // { title: 'Starts with?', value: 'starts_with' },
          // { title: 'Valid URL?', value: 'url' },
    },
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
