export default {
  name: "clientReview",
  title: "Client review",
  type: "object",
  fields: [
    {
      name: "clientName",
      title: "Client Name",
      type: "string",
    },
    {
      name: "testimonial",
      title: "testimonial",
      type: "text",
    },
    {
      name: "testimonialImage",
      title: "Testimonial Image",
      type: "cloudinary.asset",
    },
  ],
};
