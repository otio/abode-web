export default {
  name: "textHeadline",
  title: "Text Headline",
  type: "object",
  fields: [
    {
      name: "headlineText",
      title: "Headline Text",
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
      hidden: ({ parent }) => parent?.headlineText === undefined,
      // validation: (Rule) => Rule.required(),
    },
  ],
};
