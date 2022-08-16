export default {
  name: "formSelect",
  title: "Form Select Input",
  type: "object",
  fields: [
    {
      name: "selectLabel",
      title: "Select label",
      type: "string",
    },
    {
      name: "selectPlaceholder",
      title: "Select placeholder",
      type: "string",
    },
    {
      name: "selectOptions",
      title: "Select options",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
  // preview: {
  //   select: {
  //     title: "selectLabel",
  //     subtitle: "selectPlaceholder",
  //     optList: "selectOptions",
  //   },
  // },
};
// SELECT END
