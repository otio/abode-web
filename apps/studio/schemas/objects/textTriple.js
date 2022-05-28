export default {
  name: "textTriple",
  title: "Text triple",
  type: "object",
  fields: [
    {
      name: "headline",
      title: "Headline",
      type: "string",
    },
    {
      name: "headlineStyle",
      title: "Headline Style",
      type: "string",
      options: {
        layout: "dropdown",
        list: [
          { title: "Centered-Bold-Red", value: "center-bold-red" },
          { title: "Lower-Medium-White", value: "lower-med-white" },
          { title: "Left-Medium-Transparent", value: "left-med-trans" },
          { title: "Center-Regular-Black", value: "center-reg-black" },
        ],
      },
      hidden: ({ parent }) => parent?.headline === undefined,
      // validation: (Rule) => Rule.required(),
    },
    {
      name: "chaser",
      title: "Chaser / Floater",
      type: "string",
    },
    {
      name: "chaserStyle",
      title: "Chaser / Floater Style",
      type: "string",
      options: {
        layout: "dropdown",
        list: [
          { title: "Chase", value: "chase" },
          { title: "Chase Light", value: "chase-light" },
          { title: "Float", value: "float" },
        ],
      },
      hidden: ({ parent }) => parent?.chaser === undefined,
    },
    {
      name: "paragraphText",
      title: "Paragraph Text",
      type: "text",
    },
  ],
};
