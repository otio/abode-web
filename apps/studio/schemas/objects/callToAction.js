export default {
  name: "callToAction",
  title: "Forms / Calls-to-Action",
  type: "object",
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
      name: "imageAsset",
      title: "Image Asset",
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
      hidden: ({ parent }) => parent?.ctaStyle === "floater",
    },
    {
      name: "chaser",
      title: "Chaser Text",
      type: "text",
      hidden: ({ parent }) => parent?.ctaStyle === "floater",
    },
    {
      name: "floater",
      title: "Floater Text",
      type: "string",
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
        parent?.bonusAssetType === "external"
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
      name: 'bonusAsset',
      title: 'Bonus Asset',
      type: 'object',
      fields: [
        {
          name: 'bonusAssetLinkLabel',
          title: 'Bonus Asset Link Label',
          type: 'string',
        },
        {
          name: 'bonusUrl',
          title: 'Bonus Url',
          type: 'url',
        },
      ],
      hidden: ({ parent }) => parent?.bonusAssetType !== 'url',
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
