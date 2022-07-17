export default {
  name: "formButton",
  title: "Form Button Input",
  type: "object",
  fieldsets: [
    { name: "deprecated", title: "DEPRECATED - DO NOT USE", readOnly: true },
    {
      name: "style",
      title: "Styling for the Link",
    },
  ],
  fields: [
    {
      name: "formButtonLabel",
      title: "Form button label",
      type: "string",
    },
    {
      name: "isSubmit",
      title: "Is submit button?",
      type: "boolean",
    },
    {
      name: "formbuttonColor",
      title: "Form Button Background Color",
      description: "Font color for short form text",
      type: "string",
      fieldset: "style",
      options: {
        layout: "dropdown",
        list: [
          { title: "White", value: "white" },
          { title: "Black", value: "black" },
          { title: "Red", value: "red" },
          { title: "Light Gray", value: "grey" },
        ],
      },
      // validation: (Rule) => Rule.required(),
    },
    {
      name: "formLabelFontColor",
      title: "form label font color",
      description: "Font color link label text",
      type: "string",
      fieldset: "style",
      options: {
        layout: "dropdown",
        list: [
          { title: "White", value: "white" },
          { title: "Black", value: "black" },
          { title: "Red", value: "red" },
          { title: "Light Gray", value: "neutral-100" },
        ],
      },
      // hidden: ({ parent }) => parent?.shortTextContent === undefined,
      validation: (Rule) => Rule.required(),
    },
  ],
  // hidden: ({ parent }) => parent?.formFieldType !== "button",
};
