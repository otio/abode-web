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
      name: "headline",
      title: "headline",
      type: "string",
    },
    {
      name: "chaser",
      title: "chaser",
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
