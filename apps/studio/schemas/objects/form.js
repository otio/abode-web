import { createField } from "../../util/lib/formBuilder";

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
                  { title: "File", value: "file" },
                  { title: "Group", value: "group" },
                  { title: "Select", value: "select" },
                  { title: "Slider", value: "slider" },
                  // { title: "Custom", value: "custom" },
                ],
              },
            },
            {
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
              hidden: ({ parent }) => parent?.formFieldType !== "text",
            },
          ],
        },
      ],
    },
  ],
};
