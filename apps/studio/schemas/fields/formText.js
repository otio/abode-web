const TEXT_FIELD_TYPES = [
  { title: "Text", value: "text" },
  // { title: "Datetime Local", value: "datetime-local" },
  { title: "Date", value: "date" },
  { title: "Color Picker", value: "color" },
  { title: "Email", value: "email" },
  { title: "Hidden", value: "hidden" },
  { title: "Month", value: "month" },
  { title: "Number", value: "number" },
  { title: "Password", value: "password" },
  { title: "Search", value: "search" },
  { title: "Tel", value: "tel" },
  { title: "Time", value: "time" },
  { title: "URL", value: "url" },
  // { title: "Week", value: "week" },
];

export default {
  name: "formText",
  title: "Form Text Input",
  type: "object",
  fields: [
    {
      name: "textFieldType",
      title: "Text field type",
      type: "string",
      options: {
        list: TEXT_FIELD_TYPES,
        layout: "dropdown",
      },
    },
    {
      name: "textFieldDefaults",
      title: "Text field defaults",
      type: "fieldDefaults",
    },
    {
      name: "textValidations",
      title: "Text validations",
      type: "formValidations",
    },
  ],
  // hidden: ({ parent }) => parent?.formFieldType !== "text",
  preview: {
    select: {
      textField: "textFieldTypes",
    },
    // prepare: ({ textField }) => {
    //   const fieldName = textField && TEXT_FIELD_TYPES.flatMap(option => option.value === textField ? [option.title] : [])
    //   return {
    //     title: textField ? `${textField} is ${fieldName}` : 'No state selected',
    //   }
    // }
  },
};
// TEXT END
