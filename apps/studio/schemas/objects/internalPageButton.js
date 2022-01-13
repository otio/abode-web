export default {
  name: "internalPageButton",
  title: "Internal page button",
  type: "object",
  fields: [
    {
      name: "linkToPage",
      title: "linkToPage",
      type: "reference",
      to: [{ type: "page" }],
    },
    {
      name: "buttonText",
      title: "Button Text",
      type: "string",
    },
  ],
};
