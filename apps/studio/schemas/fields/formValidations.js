export default {
  name: "formValidations",
  title: "Form field validations",
  type: "object",
  fields: [
    {
      name: "validationTypes",
      title: "Validation Types",
      type: "string",
      options: {
        list: [{ title: "Is Required", value: "required" }],
        layout: "radio",
      },
    },
  ],
};
