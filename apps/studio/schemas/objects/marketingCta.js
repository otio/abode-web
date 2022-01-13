export default {
  name: "marketingCta",
  title: "Marketing cta",
  type: "object",
  fields: [
    {
      name: "bgImage",
      title: "BG Image",
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
