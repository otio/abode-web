import abodeSlug from "../../util/lib/abodeSlug";
const FIELD_TYPES = [
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
]

export default {
  name: "form",
  title: "Form",
  type: "document",
  fieldsets: [
    { name: "old", title: "Old Implementation. Migrating to new method" },
  ],
  fields: [
    {
    name: 'formName',
    title: 'Form name',
      type: 'string',
    },
    {
      name: "formSlug",
      title: "Form slug",
      type: "slug",
      options:{
        source: 'formName',
        slugify: abodeSlug,
      }
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
                list: FIELD_TYPES,
              },
            },
            {
              name: "formTextShort",
              title: "Form text info short input",
              type: "textShort",
              hidden: ({ parent }) => parent?.formFieldType !== "textShort",
            },
            // TEXTSHORT END
            {
              name: "formTextLong",
              title: "Form text info long input",
              type: "textLong",
              hidden: ({ parent }) => parent?.formFieldType !== "textLong",
            },
            // TEXTLONG END
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
  preview: {
    select: {
      title: 'formName',
      subtitle: 'formSlug',
      // input: 'formInput.formFieldType',
    }
  }
};
