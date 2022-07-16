export default {
  name: "form",
  title: "Form",
  type: "object",
  fieldsets: [
    { name: "old", title: "Old Implementation. Migrating to new method" },
  ],
  fields: [
    {
      name: "formTitle",
      title: "Form title",
      fieldset: "old",
      type: "string",
    },
    {
      name: "submitUrl",
      title: "submitUrl",
      type: "url",
    },
    {
      name: "inputFields",
      title: "Input Fields",
      fieldset: "old",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "grid",
        list: [
          { value: "email-address", title: "Email Address" },
          // { value: "full-name", title: "Full Name" },
          // { value: "address", title: "Address" },
          // { value: "phone", title: "Phone" },
        ],
      },
    },
    // {
    //   name: 'formInputs',
    //   title: 'Form inputs',
    //   type: 'array',
    //   of: [{ type: 'string' }],
    // },
    // createForm(),
    {
      name: "formLabel",
      title: "formLabel",
      type: "textShort",
    },
    {
      name: "formInputs",
      title: "Form inputs",
      type: "array",
      of: [
        {
          name: "formInput",
          title: "Form Input",
          type: "object",
          fields: [
            {
              name: "formFieldType",
              title: "Form field types",
              type: "string",
              options: {
                list: [
                  { title: "Text", value: "text" },
                  { title: "Text Area", value: "textarea" },
                  { title: "Button", value: "button" },
                  { title: "Box", value: "box" },
                  // { title: "File", value: "file" },
                  { title: "Group", value: "group" },
                  { title: "Select", value: "select" },
                  { title: "Slider", value: "range" },
                  // { title: "Custom", value: "custom" },
                ],
              },
            },
            // {
            //   name: "formText",
            //   title: "Form text",
            //   type: "object",
            //   fields: [
            //     {
            //       name: "textFieldTypes",
            //       title: "Text field types",
            //       type: "string",
            //       options: {
            //         list: [
            //           { title: "color", value: "color" },
            //           { title: "date", value: "date" },
            //           { title: "datetime-local", value: "datetime-local" },
            //           { title: "email", value: "email" },
            //           { title: "hidden", value: "hidden" },
            //           { title: "month", value: "month" },
            //           { title: "number", value: "number" },
            //           { title: "password", value: "password" },
            //           { title: "search", value: "search" },
            //           { title: "tel", value: "tel" },
            //           { title: "time", value: "time" },
            //           { title: "text", value: "text" },
            //           { title: "url", value: "url" },
            //           { title: "week", value: "week" },
            //         ],
            //       },
            //     },
            //     {
            //       name: "textFieldDefaults",
            //       title: "Text field defaults",
            //       type: "fieldDefaults",
            //     },
            //   ],
            //   hidden: ({ parent }) => parent?.formFieldType !== "text",
            // },
            // TEXT END
            // {
            //   name: "formTextArea",
            //   title: "Form text-area",
            //   type: "object",
            //   fields: [
            //     {
            //       name: "textAreaMax",
            //       title: "Text area max length",
            //       type: "number",
            //     },
            //     {
            //       name: "textAreaFieldDefaults",
            //       title: "Text area field defaults",
            //       type: "fieldDefaults",
            //     },
            //   ],
            //   hidden: ({ parent }) => parent?.formFieldType !== "textarea",
            // },
            // TEXTAREA END
            // {
            //   name: "formButton",
            //   title: "Form button",
            //   type: "object",
            //   fields: [
            //     {
            //       name: "buttonFieldDefaults",
            //       title: "Button field defaults",
            //       type: "fieldDefaults",
            //     },
            //     {
            //       name: "isSubmit",
            //       title: "Is submit button?",
            //       type: "boolean",
            //     },
            //   ],
            //   hidden: ({ parent }) => parent?.formFieldType !== "button",
            // },
            // BUTTON END
            // {
            //   name: "formBox",
            //   title: "Form box - checkboxes & radio inputs",
            //   type: "object",
            //   fields: [
            //     {
            //       name: "isCheckbox",
            //       title: "Is checkbox? Defaults to radio",
            //       description: `Radio buttons are used when there is a list of two or more options that are mutually exclusive and the user must select exactly one choice. ... \n
            //       Checkboxes are used when there are lists of options and the user may select any number of choices, including zero, one, or several."`,
            //       type: "boolean",
            //     },
            //     {
            //       name: "boxGroupName",
            //       title: "Box group name",
            //       type: "string",
            //     },
            //     {
            //       name: "boxOptions",
            //       title: "Box options",
            //       type: "array",
            //       of: [
            //         {
            //           name: "boxInput",
            //           title: "Box input",
            //           type: "object",
            //           fields: [
            //             {
            //               name: "boxLabel",
            //               title: "Box label",
            //               type: "string",
            //             },
            //             {
            //               name: "boxValue",
            //               title: "Box value",
            //               type: "boolean",
            //               hidden: true,
            //             },
            //           ],
            //         },
            //       ],
            //     },
            //   ],
            //   hidden: ({ parent }) => parent?.formFieldType !== "box",
            // },
            //  BOX END
            // {
            //   name: "formGroup",
            //   title: "Form group",
            //   type: "object",
            //   fields: [
            //     {
            //       name: "formGroupLabel",
            //       title: "Form group label",
            //       type: "string",
            //     },
            //     {
            //       name: "groupRepeatable",
            //       title: "Group repeatable?",
            //       type: "boolean",
            //     },
            //     {
            //       name: "groupFields",
            //       title: "Group fields",
            //       type: "array",
            //       of: [
            //         { type: "formText" },
            //         { type: "formTextarea" },
            //         { type: "formButton" },
            //         { type: "formBox" },
            //         { type: "formSelect" },
            //         { type: "formSlider" },
            //       ],
            //     },
            //   ],
            //   hidden: ({ parent }) => parent?.formFieldType !== "group",
            // },
            // GROUP END
            // {
            //   name: "formSelect",
            //   title: "Form select",
            //   type: "object",
            //   fields: [
            //     {
            //       name: "selectLabel",
            //       title: "Select label",
            //       type: "string",
            //     },
            //     {
            //       name: "selectPlaceholder",
            //       title: "Select placeholder",
            //       type: "string",
            //     },
            //     {
            //       name: "selectOptions",
            //       title: "Select options",
            //       type: "array",
            //       of: [{ type: "string" }],
            //     },
            //   ],
            //   hidden: ({ parent }) => parent?.formFieldType !== "select",
            // },
            // SELECT END
            // {
            //   name: "formSlider",
            //   title: "Form Slider",
            //   type: "object",
            //   fields: [
            //     {
            //       name: "sliderDefaults",
            //       title: "Slider defaults",
            //       type: "fieldDefaults",
            //     },
            //     {
            //       name: "asTextField",
            //       title: "As text field?",
            //       type: "boolean",
            //     },
            //     {
            //       name: "sliderRange",
            //       title: "Slider range",
            //       type: "object",
            //       fields: [
            //         {
            //           name: "sliderMinimum",
            //           title: "Slider minimum",
            //           type: "number",
            //         },
            //         {
            //           name: "sliderMax",
            //           title: "Slider max",
            //           type: "number",
            //         },
            //       ],
            //       hidden: ({ parent }) =>
            //         parent?.asTextField === null ||
            //         parent?.asTextField === true,
            //     },
            //   ],
            // },
            // SLIDER END
          ],
        },
      ],
    },
  ],
};
