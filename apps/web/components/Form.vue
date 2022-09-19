<!-- eslint-disable no-debugger -->
<!-- eslint-disable vue/no-unused-vars -->
<!-- eslint-disable vue/v-slot-style -->
<template>
  <section>
    <FormulateForm
      v-if="isSubmitted !== true"
      #default="{ isLoading, hasErrors }"
      class="flex flex-col justify-center items-center"
      :schema="formSchema"
      @submit="submitHandler"
    ></FormulateForm>
    <!-- <FormulateForm class="flex flex-col items-center" @submit="submitHandler">
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
    </FormulateForm> -->
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
      formSchema: [],
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
      return this.getFormId(this.formSubmissionUrl)
    },
    formInputs() {
      return this.options?.schema?.formInputs ?? []
    },
    formSubmissionUrl() {
      return this.options?.linkSubmitUrl ?? '_blank'
    },
    jsonSchema() {
      return JSON.stringify(this.formSchema)
    },
  },
  mounted() {
    // eslint-disable-next-line no-debugger
    // debugger
    return this.formSchemaParser()
  },
  methods: {
    formSchemaParser() {
      return this.formInputs.length !== 0
        ? this.formSchemaBuilder(this.formInputs)
        : []
    },
    formSchemaBuilder(fields) {
      if (Array.isArray(fields)) {
        try {
          const transformed = fields.map((field) => this.formTransformer(field))

          transformed.forEach((field) => this.formSchema.push(field))
          return
        } catch (error) {
          // eslint-disable-next-line no-console
          return console.error(error)
        }
      }
    },
    formTransformer(field) {
      // eslint-disable-next-line no-debugger
      // debugger
      switch (field.formFieldType) {
        case 'group':
          return this.formGroupTransformer(field)
        case 'text':
          return this.formTextTransformer(field)
        case 'textarea':
          return this.formTextareaTransformer(field)
        case 'button':
          return this.formButtonTransformer(field)
        case 'box':
          return this.formBoxTransformer(field)
        case 'select':
          return this.formSelectTransformer(field)
        case 'range':
          return this.formSliderTransformer(field)
        case 'textShort':
          return this.formInfoTextTransformer(field)
        case 'textLong':
          return this.formInfoTextTransformer(field)
        default:
          return {}
      }
    },
    formGroupTransformer(field) {
      // eslint-disable-next-line no-debugger
      // debugger
      let children
      const groupFields = field?.groupInput?.groupFields
      if (Array.isArray(groupFields)) {
        try {
          const transformedGroup = groupFields.map((field) =>
            this.formTransformer(field)
          )
          children = transformedGroup
          const data = {
            type: 'group',
            component: 'div',
            class: field?.formGroupInput?.groupFieldAlignment,
            name: field?.groupInput?.formGroupLabel,
            validation: '',
            repeatable: field?.repeatable ?? false,
            'add-label': field?.groupRepeatLabel ?? null,
            children,
            // value: [{}],
          }
          return data
        } catch (error) {
          // eslint-disable-next-line no-console
          return console.error(error)
        }
      }
    },
    formInfoTextTransformer(field) {
      // let data
      let short
      let long
      // eslint-disable-next-line no-debugger
      // debugger
      switch (field.formFieldType) {
        case 'textShort':
          short = {
            component: 'textShort',
            options: {
              ...field?.textShortInput,
            },
          }
          return short
        case 'textLong':
          long = {
            component: 'textLong',
            options: {
              ...field?.textLongInput,
            },
          }
          return long
        default:
          return {}
      }
    },
    formTextTransformer(field) {
      const processedValidations = this.formValidationBuilder(
        field?.textValidations?.validationTypes
      )
      const textField = field?.textInput?.textFieldDefaults
      const data = {
        type: field?.textFieldType,
        name: textField?.fieldName,
        label: textField?.fieldLabel,
        placeholder: textField?.fieldPlaceholder,
        help: textField?.fieldHelpText,
        validation: processedValidations,
        'validation-name': null,
        value: null,
        min: null,
        max: null,
        'error-behavior': 'blur',
        'outer-class': 'formulate-input w-full xs:(text-center)',
        debounce: true,
        // labelPosition: 'after',
      }
      // eslint-disable-next-line no-debugger
      // debugger
      return data
    },
    formTextareaTransformer(field) {
      const textAreaField = field?.textareaInput?.textAreaDefaults
      const maxLength = field?.textareaInput?.textAreaMax ?? 250
      const data = {
        type: field?.formFieldType,
        name: textAreaField?.fieldName,
        label: textAreaField?.fieldLabel,
        validation: `max:${maxLength}`,
      }
      return data
    },
    formButtonTransformer(field) {
      const data = {
        type: 'submit',
        class: 'text-center',
        name: field.formButtonLabel ?? 'Submit',
        disabled: this.hasErrors,
      }
      return data
    },
    formBoxTransformer(field) {
      const isCheckBox = field?.boxInput.isCheckBox
      const data = {
        type: isCheckBox ? 'checkbox' : 'radio',
        name: field?.boxInput?.boxGroupName,
        label: field?.boxInput?.boxGroupLabel,
      }
      return data
    },
    formSelectTransformer(field) {
      const selectField = field?.selectInput
      const data = {
        type: field?.formFieldType,
        label: selectField?.selectLabel,
        placeholder: selectField?.selectPlaceholder,
        options: [...selectField.selectOptions],
      }
      return data
    },
    formSliderTransformer(field) {
      const sliderField = field?.sliderInput
      const data = {
        type: field?.formFieldType,
        label: sliderField?.sliderLabel,
        name: sliderField?.sliderName,
        min: sliderField?.sliderRange?.sliderMinimum,
        max: sliderField?.sliderRange?.sliderMax,
      }
      return data
    },
    // END FORM TRANSFORMERS
    formValidationBuilder(rawValidations) {
      if (Array.isArray(rawValidations)) {
        const validationAssembled = rawValidations.map(
          this.validationTransformer
        )
        return validationAssembled
      }
    },
    validationTransformer(validation) {
      switch (validation) {
        case 'accepted':
          return ['accepted']
        case 'after':
          return ['after']
        case 'alpha':
          return ['alpha']
        case 'alphanumeric':
          return ['alphanumeric']
        case 'bail':
          return ['bail']
        case 'before':
          return ['before']
        case 'between':
          return ['between']
        case 'confirm':
          return ['confirm']
        case 'date':
          return ['date']
        case 'email':
          return ['email']
        case 'ends_with':
          return ['ends_with']
        case 'in':
          return ['in']
        case 'matches':
          return ['matches']
        case 'max':
          return ['max']
        case 'mime':
          return ['mime']
        case 'min':
          return ['min']
        case 'not':
          return ['not']
        case 'number':
          return ['number']
        case 'optional':
          return ['optional']
        case 'required':
          return ['required']
        case 'starts_with':
          return ['starts_with']
        case 'url':
          return ['url']

        default:
          return []
      }
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
