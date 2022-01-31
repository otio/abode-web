export default {
  name: "callToAction",
  title: "Forms / Calls-to-Action",
  type: "document",
  fields: [
    {
      name: "trackingTitle",
      title: "Tracking Title",
      description: "Internal Name for tracking the captured information",
      type: "string",
    },
    {
      name: "ctaStyle",
      title: "Style",
      type: "string",
      options: {
        list: [
          { title: "Full Width Centered", value: "section" },
          { title: "Piece of Another section", value: "block" },
          { title: "Piece of Another section", value: "block" },
        ],
      },
    },
    {
      name: "headline",
      title: "Headline Text",
      type: "string",
    },
    {
      name: "chaser",
      title: "Chaser Text",
      type: "string",
    },
    {
      name: "floater",
      title: "Floater Text",
      type: "string",
    },
    {
      name: "solidBackground",
      title: "Solid Background",
      type: "boolean",
    },
    {
      name: "buttonLabel",
      title: "Button Label Text",
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
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "grid",
        list: [
          { value: "email", title: "Email" },
          { value: "fullname", title: "Full Name" },
          { value: "address", title: "Address" },
          { value: "phone", title: "Phone" },
        ],
      },
    },
  ],
};
