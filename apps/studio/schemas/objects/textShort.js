export default {
    name: 'textShort',
    title: 'Short text',
    description: 'Headings, Titles, Labels, Etc...',
    type: 'object',
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
                { title: "Centered-Bold-Red", value: "center-bold-red" },
                { title: "Center-Regular-Black", value: "center-reg-black" },
                { title: "Center-Regular-White", value: "center-reg-white" },
                { title: "Lower-Medium-White", value: "lower-med-white" },
                { title: "Left-Medium-Transparent", value: "left-med-trans" },
                { title: "Form-Floater", value: "floater" },
              ],
            },
            hidden: ({ parent }) => parent?.shortTextContent === undefined,
            // validation: (Rule) => Rule.required(),
          },
    ],
}