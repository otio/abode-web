export default {
  name: "magazineSignup",
  title: "Magazine signup",
  type: "object",
  fields: [
    {
      name: "promoImage",
      title: "Promo Image",
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
