export default {
  name: "formGroup",
  title: "Form group",
  type: "object",
  fields: [
    {
      name: "formGroupLabel",
      title: "Form group label",
      type: "string",
    },
    {
      name: "groupRepeatable",
      title: "Group repeatable?",
      type: "boolean",
    },
    {
      name: "groupFields",
      title: "Group fields",
      type: "array",
      of: [
        { type: "formText" },
        { type: "formTextarea" },
        { type: "formButton" },
        { type: "formBox" },
        { type: "formSelect" },
        { type: "formSlider" },
      ],
    },
  ],
  // hidden: ({ parent }) => parent?.formFieldType !== "group",
};
// GROUP END
