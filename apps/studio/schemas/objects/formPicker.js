export default {
  name: "formPicker",
  title: "Form picker",
  type: "object",
  fields: [
    {
      name: "formDoc",
      title: "Form Document",
      type: "array",
      of: [{ type: "reference", to: [{ type: "form" }] }],
      validation: (Rule) => Rule.max(1),
    },
  ],
};
