export default {
  name: "form",
  title: "Form",
  type: "document",
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
      name: "formSlug",
      title: "Form slug",
      type: "slug",
    },
    {
      name: "submitUrl",
      title: "submitUrl",
      type: "url",
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
                  { title: "Text Info Label - Short", value: "textShort" },
                  { title: "Text Info Label - Long", value: "textLong" },
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
            {
              name: "formTextShort",
              title: "Form text info short input",
              type: "textShort",
              hidden: ({ parent }) => parent?.formFieldType !== "textShort",
            },
            {
              name: "formTextLong",
              title: "Form text info long input",
              type: "textLong",
              hidden: ({ parent }) => parent?.formFieldType !== "textLong",
            },
            {
              name: "formTextInput",
              title: "Form text input",
              type: "formText",
              hidden: ({ parent }) => parent?.formFieldType !== "text",
            },
            // TEXT END
            {
              name: "formTextareaInput",
              title: "Form text-area input",
              type: "formTextarea",
              hidden: ({ parent }) => parent?.formFieldType !== "textarea",
            },
            // TEXTAREA END
            {
              name: "formButtonInput",
              title: "Form button input",
              type: "formButton",
              hidden: ({ parent }) => parent?.formFieldType !== "button",
            },
            // BUTTON END
            {
              name: "formBoxInput",
              title: "Form box input - checkboxes & radio inputs",
              type: "formBox",
              hidden: ({ parent }) => parent?.formFieldType !== "box",
            },
            //  BOX END
            {
              name: "formGroupInput",
              title: "Form groupInput",
              type: "formGroup",
              hidden: ({ parent }) => parent?.formFieldType !== "group",
            },
            // GROUP END
            {
              name: "formSelectInput",
              title: "Form select input",
              type: "formSelect",
              hidden: ({ parent }) => parent?.formFieldType !== "select",
            },
            // SELECT END
            {
              name: "formSliderInput",
              title: "Form Slider input",
              type: "formSlider",
              hidden: ({ parent }) => parent?.formFieldType !== "range",
            },
            // SLIDER END
          ],
        },
      ],
    },
  ],
};
