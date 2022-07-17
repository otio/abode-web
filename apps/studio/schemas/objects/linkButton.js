export default {
  name: "linkButton",
  title: "Link button",
  type: "object",
  fieldsets: [
    { name: "deprecated", title: "DEPRECATED - DO NOT USE", readOnly: true },
    {
      name: "style",
      title: "Styling for the Link",
      hidden: ({ parent }) =>
        parent?.linkDestination === undefined ||
        parent?.linkDestination === "form",
    },
  ],
  fields: [
    {
      name: "linkDestination",
      title: "Link Destination",
      type: "string",
      options: {
        list: [
          // { title: "No Destination - Use for Content Display", value: "none" },
          { title: "Internal Link -> Other Content", value: "internal" },
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
      name: "linkLabel",
      title: "Link Label Text",
      type: "string",
      hidden: ({ parent }) =>
        parent?.linkDestination === undefined ||
        parent?.linkDestination === "form",
    },
    // BEGIN BUTTON STYLES
    {
      name: "linkStyle",
      title: "Link Style",
      description: "Selected style for link",
      type: "string",
      fieldset: "style",
      options: {
        layout: "dropdown",
        list: [
          { title: "Button", value: "link-button" },
          { title: "Text-Underlined", value: "link-underlined" },
          { title: "Text", value: "link" },
        ],
      },
      hidden: ({ parent }) => parent?.linkDestination === undefined,
      // validation: (Rule) => Rule.required(),
    },
    {
      name: "buttonBgColor",
      title: "Button Background Color",
      description: "Font color for short form text",
      type: "string",
      fieldset: "style",
      options: {
        layout: "dropdown",
        list: [
          { title: "White", value: "white" },
          { title: "Black", value: "black" },
          { title: "Red", value: "red" },
          { title: "Light Gray", value: "grey" },
        ],
      },
      hidden: ({ parent }) =>
        parent?.linkStyle === undefined || parent?.linkStyle !== "link-button",
      // validation: (Rule) => Rule.required(),
    },
    {
      name: "linkLabelFontColor",
      title: "Link label font color",
      description: "Font color link label text",
      type: "string",
      fieldset: "style",
      options: {
        layout: "dropdown",
        list: [
          { title: "White", value: "white" },
          { title: "Black", value: "black" },
          { title: "Red", value: "red" },
          { title: "Light Gray", value: "neutral-100" },
        ],
      },
      // hidden: ({ parent }) => parent?.shortTextContent === undefined,
      // validation: (Rule) => Rule.required(),
    },
    {
      name: "linkLabelAlign",
      title: "Link label alignment",
      description: "Positioning for short form text",
      type: "string",
      fieldset: "style",
      options: {
        layout: "dropdown",
        list: [
          { title: "Left", value: "left" },
          { title: "Center", value: "center" },
          { title: "Right", value: "right" },
          // { title: "Justify", value: "justify" },
        ],
      },
      // hidden: ({ parent }) => parent?.shortTextContent === undefined,
      // validation: (Rule) => Rule.required(),
    },
    // END OF BUTTON STYLES
    {
      name: "internalLink",
      title: "Internal link",
      type: "reference",
      to: [
        { type: "page" },
        { type: "neighborhood" },
        { type: "callToAction" },
        { type: "clientReview" },
        { type: "marketReport" },
      ],
      hidden: ({ parent }) => parent?.linkDestination !== "internal",
    },
    {
      name: "externalLink",
      title: "External link",
      type: "url",
      hidden: ({ parent }) =>
        parent?.linkDestination !== "external" ||
        parent?.downloadType === "file",
    },
    {
      name: "hasFileDownload",
      title: "Has File Downloadable?",
      description: "Is there any kind of special content to give away?",
      type: "boolean",
      // hidden: ({ parent }) => parent?.linkDestination === "form",
    },
    {
      name: "downloadType",
      title: "File Asset Type",
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
      hidden: ({ parent }) => parent?.hasFileDownload !== true,
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
      hidden: ({ parent }) => parent?.downloadType !== "url",
    },
    {
      name: "linkSubmitUrl",
      title: "Link Submit URL",
      type: "url",
      hidden: ({ parent }) => parent?.linkDestination !== "form",
    },
    {
      name: "linkFormFields",
      title: "Link form fields",
      type: "array",
      of: [
        { type: "formText" },
        { type: "formTextarea" },
        { type: "formGroup" },
        { type: "formButton" },
        { type: "formBox" },
        { type: "formSelect" },
        { type: "formSlider" },
      ],
      hidden: ({ parent }) => parent?.linkDestination !== "form",
    },
  ],
};
