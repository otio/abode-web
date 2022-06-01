export default {
  name: "callToAction",
  title: "Forms / Calls-to-Action",
  type: "document",
  fields: [
    {
      name: "trackingTitle",
      title: "Tracking Title",
      description: "Internal Name for tracking",
      type: "string",
      validation: (Rule) => Rule.required(),
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
    // DEPRECATE
    {
      name: "imageAsset",
      title: "Image Asset",
      description:
        "DEPRECATED - Going forward this field should not be used. Will eventually be phased out.",
      type: "cloudinary.asset",
      hidden: ({ parent }) =>
        // document?.ctaStyle === "hero" || document?.ctaStyle === "split",

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
      name: "headline",
      title: "Headline Text",
      type: "string",
      description: "DEPRECATED",
      hidden: ({ parent }) => parent?.ctaStyle === "floater",
    },
    {
      name: "chaser",
      title: "Chaser Text",
      type: "text",
      description: "DEPRECATED",
      hidden: ({ parent }) => parent?.ctaStyle === "floater",
    },
    {
      name: "ctaText",
      title: "CTA Text / Header-Chaser-Paragraph",
      type: "textTriple",
    },
    {
      name: "floater",
      title: "Floater Text",
      description: "DEPRECATED use CTA Text paragraph field",
      type: "string",
    },
    {
      name: "textComponents",
      title: "textComponents",
      type: "array",
      of: [{ type: "textHeadline" }, { type: "text" }, { type: "textBlocks" }],
    },
    {
      name: "destination",
      title: "Destination",
      type: "string",
      options: {
        list: [
          { title: "No Destination", value: "none" },
          { title: "Internal Link -> Page", value: "internal" },
          { title: "External Link -> Another Site", value: "external" },
          { title: "Form Submission Link", value: "form" },
          // { title: "File Download Link", value: "file" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      // initialValue: [{ title: "No Destination", value: "none" }],
    },
    {
      name: "buttonLabel",
      title: "Button Label Text",
      type: "string",
      hidden: ({ parent }) =>
        parent?.destination === undefined || parent?.destination === "none",
    },
    {
      name: "submitUrl",
      title: "submitUrl",
      type: "url",
      hidden: ({ parent }) => parent?.destination !== "form",
    },
    {
      name: "internalLink",
      title: "Internal link",
      type: "reference",
      to: [{ type: "page" }],
      hidden: ({ parent }) =>
        parent?.destination !== "internal" ||
        parent?.bonusAssetType !== "internal",
    },
    {
      name: "externalLink",
      title: "External link",
      type: "url",
      hidden: ({ parent }) =>
        parent?.destination !== "external" ||
        parent?.bonusAssetType === "external",
    },
    {
      name: "hasBonusAsset",
      title: "Has Bonus Asset?",
      description: "Is there any kind of special content to give away",
      type: "boolean",
    },
    {
      name: "bonusAssetType",
      title: "Bonus Asset Type",
      type: "string",
      options: {
        list: [
          { title: "URL", value: "url" },
          { title: "File", value: "file" },
          // TODO: Add ability to self host small files
          // { title: "Self Hosted File", value: "file" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      hidden: ({ parent }) => parent?.hasBonusAsset !== true,
      // initialValue: [{ title: "No Destination", value: "none" }],
    },
    {
      name: "bonusAsset",
      title: "Bonus Asset",
      type: "object",
      fields: [
        {
          name: "bonusAssetLinkLabel",
          title: "Bonus Asset Link Label",
          type: "string",
        },
        {
          name: "bonusUrl",
          title: "Bonus Url",
          type: "url",
        },
      ],
      hidden: ({ parent }) => parent?.bonusAssetType !== "url",
    },
    // {
    //   name: 'bonusFile',
    //   title: 'Bonus File',
    //   type: 'file',
    // },
    {
      name: "inputFields",
      title: "Input Fields",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "grid",
        list: [
          { value: "email-address", title: "Email Address" },
          // { value: "full-name", title: "Full Name" },
          // { value: "address", title: "Address" },
          // { value: "phone", title: "Phone" },
        ],
      },
      hidden: ({ parent }) => parent?.destination !== "form",
    },
  ],
  // initalValue: {
  //   destination: [{ title: "No Destination", value: "none" }],
  // },
};
