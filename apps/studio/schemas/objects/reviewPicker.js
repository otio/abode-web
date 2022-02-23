export default {
  name: "reviewPicker",
  title: "Review picker",
  type: "object",
  fields: [
    {
      name: "clientReviews",
      title: "Client Reviews",
      type: "array",
      of: [{ type: "reference", to: [{ type: "clientReview" }] }],
    },
  ],
};
