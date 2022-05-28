export default {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description:
        "This is what the page will show up as named on a search engine",
      type: "string",
    },
    {
      name: "slug",
      title: "Page slug",
      description: "This is what the URL of the page will include in the link",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      name: "components",
      title: "Page Components",
      type: "array",
      of: [
        { type: "bannerContent" },
        { type: "meetTeam" },
        { type: "featuredListing" },
        { type: "reviewPicker" },
        { type: "marketReportsPicker" },
        { type: "magazineSignup" },
        { type: "areasServed" },
        // { type: "marketingCta" },
        // { type: "callToAction" },
        { type: "ctaPicker" },
        { type: "textTriple" },
      ],
    },
  ],
};
