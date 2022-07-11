export default {
  name: "agentPicker",
  title: "Agent picker",
  type: "object",
  fields: [
    {
      name: "infoStyle",
      title: "Info style",
      type: "string",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: "Contact Card", value: "contactCard" },
          { title: "Biography", value: "bioCard" },
          // TODO: Build components for these types
          // { title: "Socials", value: "socials" },
          // { title: "Logo only", value: "logo" },
          // { title: "Profile photo only", value: "photo" },
        ],
      },
    },
    {
      name: "agentInfo",
      title: "Agent Info",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "agents" }],
        },
      ],
    },
  ],
};
