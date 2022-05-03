export default {
  // TODO: Revise schema to Document
  name: "clientReview",
  title: "Client review",
  type: "document",
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
      name: 'reviewImage',
      title: 'Review Image',
      description: 'Use this field to upload images instead of the Testimonial Image field',
      type: 'image',
    },
    // DEPRECATE
    {
      name: "testimonialImage",
      title: "Testimonial Image",
      description: 'DEPRECATED - Going forward this field should not be used. Will eventually be phased out.',
      type: "cloudinary.asset",
    }
  ],
};
