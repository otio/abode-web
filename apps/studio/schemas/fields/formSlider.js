export default {
  name: "formSlider",
  title: "Form Slider Input",
  type: "object",
  fields: [
    {
      name: "sliderName",
      title: "Slider name",
      type: "string",
    },
    {
      name: "sliderLabel",
      title: "Slider label",
      type: "string",
    },
    {
      name: "asTextField",
      title: "As text field?",
      type: "boolean",
    },
    {
      name: "sliderRange",
      title: "Slider range",
      type: "object",
      fields: [
        {
          name: "sliderMinimum",
          title: "Slider minimum",
          type: "number",
        },
        {
          name: "sliderMax",
          title: "Slider max",
          type: "number",
        },
      ],
      hidden: ({ parent }) =>
        parent?.asTextField === null || parent?.asTextField === true,
    },
  ],
};
// SLIDER END
