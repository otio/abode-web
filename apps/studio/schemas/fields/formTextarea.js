export default {
  name: "formTextarea",
  title: "Form text-area",
  type: "object",
  fields: [
    {
      name: "textAreaMax",
      title: "Text area max length",
      type: "number",
    },
    {
      name: "textAreaFieldDefaults",
      title: "Text area field defaults",
      type: "fieldDefaults",
    },
  ],
  // hidden: ({ parent }) => parent?.formFieldType !== "textarea",
};
