export default {
  name: "callToAction",
  title: "Forms / Calls-to-Action",
  type: "document",
  fieldsets: [
    { name: "deprecated", title: "DEPRECATED - DO NOT USE", hidden: true },
  ],
  fields: [
    // {
    //   name: "trackingTitle",
    //   title: "Tracking Title",
    //   description: "Internal Name for tracking",
    //   type: "string",
    //   fieldset: "deprecated",
    //   validation: (Rule) => Rule.required(),
    // },
    {
      name: "ctaTitle",
      title: "CTA Title",
      description: "Used for building the internal url",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "ctaSlug",
      title: "unique URL",
      type: "slug",
      // readOnly: (params) => {},
      options: {
        source: "ctaTitle",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      name: "ctaStyle",
      title: "Style",
      type: "string",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: "Full Width Hero", value: "hero" },
          { title: "Two-Column with Image", value: "split" },
          { title: "Block - No BG Image", value: "block" },
          { title: "Floater and form only", value: "floater" },
        ],
      },
    },
    {
      name: "ctaImage",
      title: "Image Asset",
      description: "Use this field in place of Image Asset field",
      type: "image",
      hidden: ({ parent }) =>
        parent?.ctaStyle === undefined ||
        parent?.ctaStyle === "block" ||
        parent?.ctaStyle === "floater",
    },
    {
      name: "solidBackground",
      title: "Solid Background",
      type: "boolean",
      hidden: ({ parent }) =>
        parent?.ctaStyle === undefined ||
        parent?.ctaStyle === "block" ||
        parent?.ctaStyle === "floater",
    },
    {
      name: "textComponents",
      title: "Text Components",
      type: "array",
      of: [{ type: "textShort" }, { type: "textLong" }],
    },
    {
      name: "ctaLink",
      title: "Cta link",
      type: "linkButton",
    },
  ],
};
