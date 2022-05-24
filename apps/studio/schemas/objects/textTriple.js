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
      title: "headlineStyle",
      type: "string",
      options: {
        layout: "dropdown",
        list: [
          { title: "Centered-Bold-Red", value: "center-bold-red" },
          { title: "Lower-Medium-White", value: "lower-med-white" },
          { title: "Left-Medium-Transparent", value: "left-med-trans" },
        ],
      },
      hidden: ({ parent }) => parent?.headline === undefined,
      // validation: (Rule) => Rule.required(),
    },
    {
      name: "chaser",
      title: "Chaser",
      type: "string",
    },
    {
      name: "paragraphText",
      title: "Paragraph Text",
      type: "text",
    },
  ],
};
