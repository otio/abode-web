export default {
  name: "bannerContent",
  title: "Hero Content / Banner Content",
  type: "object",
  fields: [
    {
      name: "bgImage",
      title: "BG Image",
      description: "Cloudinary hosted Image URL",
      type: "cloudinary.asset",
    },
    {
      name: "bannerComponents",
      title: "Banner Components",
      type: "array",
      of: [{ type: "callToAction" }, { type: "textTriple" }],
    },
    // {
    //   name: "headline",
    //   title: "headline",
    //   type: "text",
    // },
    // {
    //   name: "chaser",
    //   title: "chaser",
    //   type: "text",
    // },
    // {
    //   name: "CTA",
    //   title: "CTA",
    //   type: "form",
    // },
  ],
};
