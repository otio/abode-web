export default {
  name: "bannerContent",
  title: "Hero Content / Banner Content",
  type: "object",
  fields: [
    {
      name: "bannerImage",
      title: "Banner Image",
      description: "Use this field instead of BG Image",
      type: "image",
    },
    // DEPRECATE
    {
      name: "bgImage",
      title: "BG Image",
      description:
        "DEPRECATED - Going forward this field should not be used. Will eventually be phased out.",
      type: "cloudinary.asset",
    },
    {
      name: "bannerComponents",
      title: "Banner Components",
      type: "array",
      of: [
        { type: "callToAction" },
        { type: "ctaPicker" },
        // { type: "textTriple" },
        { type: "textShort" },
        { type: "textLong" },
        { type: "linkButton" },
      ],
    },
  ],
};
