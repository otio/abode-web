export default {
  name: "fieldDefaults",
  title: "Field defaults",
  type: "object",
  fields: [
    {
      name: "fieldName",
      title: "Field name",
      type: "string",
    },
    {
      name: "fieldLabel",
      title: "Field Label",
      type: "string",
    },
    {
      name: "fieldPlaceholder",
      title: "Field placeholder",
      type: "string",
    },
    {
      name: "fieldHelpText",
      title: "Field help text",
      type: "string",
    },
    {
      name: "fieldValidations",
      title: "Field validations",
      type: "string",
      options: {
        list: [{ title: "Is Required", value: "required" }],
        layout: "radio",
      },
    },
  ],
};
