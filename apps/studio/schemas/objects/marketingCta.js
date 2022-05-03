export default {
  name: "marketingCta",
  title: "Marketing cta",
  type: "object",
  fields: [
    {
      name: "ctaImage",
      title: "Call-To-Action Image",
      description: 'Use this field in place of BG Image.',
      type: "image",
    },
    {
      name: "bgImage",
      title: "BG Image",
      description: 'DEPRECATED - Going forward this field should not be used. Will eventually be phased out.',
      type: "cloudinary.asset",
    },
    {
      name: "ctaCapture",
      title: "Info Capture",
      type: "reference",
      to: [{ type: "callToAction" }],
    },
  ],
};
