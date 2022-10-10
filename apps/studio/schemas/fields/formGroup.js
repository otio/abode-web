export default {
  name: "formGroup",
  title: "Form Group Fields Input",
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
      name: "groupRepeatLabel",
      title: "Group repeat label",
      description: "Adds a label to show what kind of data is being repeated",
      type: "string",
      hidden: ({ parent }) => parent?.groupRepeatable === false,
    },
    {
      name: "groupFields",
      title: "Group fields",
      type: "array",
      of: [
        { type: "textShort" },
        { type: "textLong" },
        { type: "formText" },
        { type: "formTextarea" },
        { type: "formButton" },
        { type: "formBox" },
        { type: "formSelect" },
        { type: "formSlider" },
      ],
    },
    {
      name: "groupFieldAlignment",
      title: "Field alignment",
      type: "string",
      options: {
        list: [
          {
            title: "Row",
            value: "",
          },
          { title: "Column", value: "flex flex-col" },
        ],
      },
    },
  ],
  // hidden: ({ parent }) => parent?.formFieldType !== "group",
};
// GROUP END
