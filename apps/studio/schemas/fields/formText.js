export default {
  name: "formText",
  title: "Form text",
  type: "object",
  fields: [
    {
      name: "textFieldTypes",
      title: "Text field types",
      type: "string",
      options: {
        list: [
          { title: "color", value: "color" },
          { title: "date", value: "date" },
          { title: "datetime-local", value: "datetime-local" },
          { title: "email", value: "email" },
          { title: "hidden", value: "hidden" },
          { title: "month", value: "month" },
          { title: "number", value: "number" },
          { title: "password", value: "password" },
          { title: "search", value: "search" },
          { title: "tel", value: "tel" },
          { title: "time", value: "time" },
          { title: "text", value: "text" },
          { title: "url", value: "url" },
          { title: "week", value: "week" },
        ],
      },
    },
    {
      name: "textFieldDefaults",
      title: "Text field defaults",
      type: "fieldDefaults",
    },
  ],
  // hidden: ({ parent }) => parent?.formFieldType !== "text",
};
// TEXT END
