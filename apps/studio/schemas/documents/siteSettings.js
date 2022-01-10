// schemas/siteSettings.js
export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Site Title",
      type: "string",
    },
    {
      name: "description",
      title: "Site Description",
      type: "text",
    },
    {
      name: "homepage",
      title: "Home page",
      type: "reference",
      to: [{ type: "page" }],
    },
    {
      title: "Top level Pages",
      name: "navlink",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "page" }],
        },
      ],
    },
  ],
};
