export default {
  name: "magazineSignup",
  title: "Magazine signup",
  type: "object",
  fields: [
    {
      name: "coverImage",
      title: "coverImage",
      description: 'Use this field in place of Promo Image',
      type: "image",
    },
    // DEPRECATE
    {
      name: "promoImage",
      title: "Promo Image",
      description: 'DEPRECATED - Going forward this field should not be used. Will eventually be phased out.',
      type: "cloudinary.asset",
    },
    {
      name: "signup",
      title: "Sign Up CTA",
      type: "reference",
      to: [{ type: "callToAction" }],
    },
  ],
};
