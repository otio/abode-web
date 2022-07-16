export default {
  name: "formButton",
  title: "Form button",
  type: "object",
  fields: [
    {
      name: "buttonFieldDefaults",
      title: "Button field defaults",
      type: "fieldDefaults",
    },
    {
      name: "isSubmit",
      title: "Is submit button?",
      type: "boolean",
    },
  ],
  // hidden: ({ parent }) => parent?.formFieldType !== "button",
};
