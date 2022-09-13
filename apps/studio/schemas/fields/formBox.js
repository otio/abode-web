export default {
  name: "formBox",
  title: "Form Box: Checkboxes & Radio Inputs",
  type: "object",
  fields: [
    {
      name: "isCheckbox",
      title: "Is checkbox? Defaults to radio",
      description: `Radio buttons are used when there is a list of two or more options that are mutually exclusive and the user must select exactly one choice. ... \n
      Checkboxes are used when there are lists of options and the user may select any number of choices, including zero, one, or several."`,
      type: "boolean",
    },
    {
      name: "boxGroupName",
      title: "Box group name",
      type: "string",
      description: "Groups related box options",
    },
    {
      name: "boxGroupLabel",
      title: "Box group label",
      type: "string",
      description: "Gives visual context to the box groups",
    },
    {
      name: "boxOptions",
      title: "Box options",
      type: "array",
      of: [
        {
          name: "boxInput",
          title: "Box input",
          type: "object",
          fields: [
            {
              name: "boxLabel",
              title: "Box label",
              type: "string",
            },
            {
              name: "boxValue",
              title: "Box value",
              type: "boolean",
              hidden: true,
            },
          ],
        },
      ],
    },
  ],
  // hidden: ({ parent }) => parent?.formFieldType !== "box",
};
//  BOX END
