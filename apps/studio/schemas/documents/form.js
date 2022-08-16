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
];

export default {
  name: "form",
  title: "Form",
  type: "document",
  fields: [
    {
      name: "formName",
      title: "Form name",
      type: "string",
    },
    {
      name: "formSlug",
      title: "Form slug",
      type: "slug",
      options: {
        source: "formName",
        slugify: abodeSlug,
      },
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
          fieldsets: [
            {
              name: "old",
              title: "Old Implementation. Migrating to new method",
            },
          ],
          fields: [
            {
              name: "formFieldType",
              title: "Form field types",
              type: "string",
              options: {
                list: FIELD_TYPES,
              },
            },
            // FIELD_TYPES END
            {
              name: "formTextShort",
              title: "Form text info short input",
              type: "textShort",
              fieldset: "old",
              hidden: ({ parent }) => parent?.formFieldType !== "textShort",
            },
            {
              name: "textShortInput",
              title: "Form text info short input",
              type: "textShort",
              hidden: ({ parent }) => parent?.formFieldType !== "textShort",
            },
            // TEXTSHORT END
            {
              name: "formTextLong",
              title: "Form text info long input",
              type: "textLong",
              fieldset: "old",
              hidden: ({ parent }) => parent?.formFieldType !== "textLong",
            },
            {
              name: "textLongInput",
              title: "Form text info long input",
              type: "textLong",
              hidden: ({ parent }) => parent?.formFieldType !== "textLong",
            },
            // TEXTLONG END
            {
              name: "formTextInput",
              title: "Form text input",
              type: "formText",
              fieldset: "old",
              hidden: ({ parent }) => parent?.formFieldType !== "text",
            },
            {
              name: "textInput",
              title: "Form text input",
              type: "formText",
              hidden: ({ parent }) => parent?.formFieldType !== "text",
            },
            // TEXT END
            {
              name: "formTextareaInput",
              title: "Form text-area input",
              type: "formTextarea",
              fieldset: "old",
              hidden: ({ parent }) => parent?.formFieldType !== "textarea",
            },
            {
              name: "textareaInput",
              title: "Form text-area input",
              type: "formTextarea",
              hidden: ({ parent }) => parent?.formFieldType !== "textarea",
            },
            // TEXTAREA END
            {
              name: "formButtonInput",
              title: "Form button input",
              type: "formButton",
              fieldset: "old",
              hidden: ({ parent }) => parent?.formFieldType !== "button",
            },
            {
              name: "buttonInput",
              title: "Form button input",
              type: "formButton",
              hidden: ({ parent }) => parent?.formFieldType !== "button",
            },
            // BUTTON END
            {
              name: "formBoxInput",
              title: "Form box input - checkboxes & radio inputs",
              type: "formBox",
              fieldset: "old",
              hidden: ({ parent }) => parent?.formFieldType !== "box",
            },
            {
              name: "boxInput",
              title: "Form box input - checkboxes & radio inputs",
              type: "formBox",
              hidden: ({ parent }) => parent?.formFieldType !== "box",
            },
            //  BOX END
            {
              name: "formGroupInput",
              title: "Form groupInput",
              type: "formGroup",
              fieldset: "old",
              hidden: ({ parent }) => parent?.formFieldType !== "group",
            },
            {
              name: "groupInput",
              title: "Form groupInput",
              type: "formGroup",
              hidden: ({ parent }) => parent?.formFieldType !== "group",
            },
            // GROUP END
            {
              name: "formSelectInput",
              title: "Form select input",
              type: "formSelect",
              fieldset: "old",
              hidden: ({ parent }) => parent?.formFieldType !== "select",
            },
            {
              name: "selectInput",
              title: "Form select input",
              type: "formSelect",
              hidden: ({ parent }) => parent?.formFieldType !== "select",
            },
            // SELECT END
            {
              name: "formSliderInput",
              title: "Form Slider input",
              type: "formSlider",
              fieldset: "old",
              hidden: ({ parent }) => parent?.formFieldType !== "range",
            },
            {
              name: "sliderInput",
              title: "Form Slider input",
              type: "formSlider",
              hidden: ({ parent }) => parent?.formFieldType !== "range",
            },
            // SLIDER END
          ],
          preview: {
            select: {
              fieldInput: "formFieldType",
              textShortOpts: "textShortInput",
              textLongOpts: "textLongInput",
              textOpts: "textInput",
              textareaOpts: "textareaInput",
              buttonOpts: "buttonInput",
              boxOpts: "boxInput",
              groupOpts: "groupInput",
              selectOpts: "selectInput",
              sliderOpts: "sliderInput",
            },
            prepare: ({
              fieldInput,
              textShortOpts,
              textLongOpts,
              textOpts,
              textareaOpts,
              buttonOpts,
              boxOpts,
              groupOpts,
              selectOpts,
              sliderOpts,
            }) => {
              const fieldType =
                fieldInput &&
                FIELD_TYPES.flatMap((option) =>
                  option.value === fieldInput ? [option.value] : []
                );
              const optionsPicker = (typeOfField) => {
                switch (typeOfField) {
                  case "textShort":
                    return textShortOpts.shortTextContent;
                  case "textLong":
                    return `${textLongOpts.textLongContent.slice(0, 70)}`;
                  case "text":
                    const textName =
                      textOpts.textFieldDefaults.fieldName ?? "None";
                    const textLabel =
                      textOpts.textFieldDefaults.fieldLabel ?? "None";
                    const textPlaceholder =
                      textOpts.textFieldDefaults.fieldPlaceholder ?? "";
                    const textHelp =
                      textOpts.textFieldDefaults.fieldHelpText ?? "None";
                    return `${textName} | ${textLabel} | ${textPlaceholder} | ${textHelp}`;
                  case "textarea":
                    const taMaxLength = textareaOpts.textAreaMax;
                    const taDefaults = textareaOpts.textAreaFieldDefaults;
                    const {
                      fieldName,
                      fieldLabel,
                      fieldPlaceholder,
                      fieldHelpText,
                    } = taDefaults;
                    const textareaName = fieldName ?? "None";
                    const textareaLabel = fieldLabel ?? "None";
                    const textareaPlaceholder = fieldPlaceholder ?? "";
                    const textareaHelp = fieldHelpText ?? "None";

                    return `${textareaName} | ${textareaLabel} | ${textareaPlaceholder} | ${textareaHelp}`;
                  case "button":
                    const buttonLabel = buttonOpts.formButtonLabel ?? "Submit";
                    return `${buttonLabel}`;
                  case "box":
                    const boxGroup = boxOpts.boxGroupName;
                    const boxOptions = boxOpts.boxOptions.map((box, index) => {
                      let id = index + 1;
                      return `${id}: ${box.boxLabel}`;
                    });
                    const isCheckbox = boxOpts.isCheckbox ? "✅" : "📻";
                    const numOfBoxes = boxOpts.boxOptions.length;

                    return `${boxGroup} | # options - ${numOfBoxes} | type: ${isCheckbox} | ${boxOptions}`;
                  case "group":
                    return `${groupOpts.formGroupLabel}`;
                  case "select":
                    const selectLabel = selectOpts.selectLabel ?? "🚫";
                    const selectPlaceholder =
                      selectOpts.selectPlaceholder ?? "🚫";
                    const selectChoicesFormat = selectOpts.selectOptions.map(
                      (choice, index) => {
                        let itemNumber = index + 1;
                        return `${itemNumber}: ${choice}`;
                      }
                    );
                    return `${selectLabel} | ${selectPlaceholder} | ${selectChoicesFormat}`;
                  case "range":
                    const rangeName = sliderOpts.sliderName || "No name";
                    const rangeLabel = sliderOpts.sliderLabel ?? "No label";
                    const isTextField = sliderOpts?.asTextField
                      ? sliderOpts.asTextField
                        ? "text 🔤"
                        : "slider 📶"
                      : "🚫";
                    const min = sliderOpts.sliderRange.sliderMinimum ?? 0;
                    const max = sliderOpts.sliderRange.sliderMax ?? 10;

                    const rangePreview = `${rangeName}:${rangeLabel} | ${isTextField} | min:${min} | max:${max}`;
                    const hasOptions = sliderOpts
                      ? rangePreview
                      : "No Slider Options";
                    return hasOptions;

                  default:
                    break;
                }
              };
              return {
                subtitle: fieldInput
                  ? `${fieldType}`
                  : "⚠️ No field type selected...",
                title: fieldInput
                  ? optionsPicker(fieldInput)
                  : "⚠️ No field type selected...",
              };
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "formName",
      subtitle: "formSlug.current",
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title: title,
        subtitle: subtitle,
      };
    },
  },
};
