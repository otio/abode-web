export default {
  name: "textShort",
  title: "Short text",
  description: "Headings, Titles, Labels, Etc...",
  type: "object",
  fields: [
    {
      name: "shortTextContent",
      title: "Short Text Content",
      description: "Used for short form text",
      type: "string",
    },
    {
      name: "shortTextStyle",
      title: "Short Text Style",
      description: "Selected style for short form text",
      type: "string",
      options: {
        layout: "dropdown",
        list: [
          { title: "Heading", value: "head" },
          { title: "Subheading", value: "subhead" },
          { title: "Floater", value: "float" },
          { title: "Body", value: "body" },

        ],
      },
      hidden: ({ parent }) => parent?.shortTextContent === undefined,
      // validation: (Rule) => Rule.required(),
    },
    {
      name: "shortTextFontColor",
      title: "Short Text Font Color",
      description: "Font color for short form text",
      type: "string",
      options: {
        layout: "dropdown",
        list: [
          { title: "White", value: "white" },
          { title: "Black", value: "black" },
          { title: "Red", value: "red" },
        ],
      },
      hidden: ({ parent }) => parent?.shortTextContent === undefined,
      // validation: (Rule) => Rule.required(),
    },
    {
      name: "shortTextAlign",
      title: "Short Text Alignment",
      description: "Positioning for short form text",
      type: "string",
      options: {
        layout: "dropdown",
        list: [
          { title: "Left", value: "left" },
          { title: "Center", value: "center" },
          { title: "Right", value: "right" },
          { title: "Justify", value: "justify" },
        ],
      },
      hidden: ({ parent }) => parent?.shortTextContent === undefined,
      // validation: (Rule) => Rule.required(),
    },
    {
      name: "shortTextBackground",
      title: "Short Text Background",
      type: "boolean",
    },
    {
      name: "shortTextBgColor",
      title: "Short Text Background Color",
      description: "Positioning for short form text",
      type: "string",
      options: {
        layout: "dropdown",
        list: [
          { title: "White", value: "white" },
          { title: "Black", value: "black" },
          { title: "Red", value: "red" },
        ],
      },
      hidden: ({ parent }) => parent?.shortTextBackground === false || parent?.shortTextBackground === undefined ,
      // validation: (Rule) => Rule.required(),
    },
  ],
};
