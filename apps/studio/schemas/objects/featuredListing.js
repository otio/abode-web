export default {
  name: "featuredListing",
  title: "Featured listing",
  type: "object",
  fields: [
    {
      name: "featuredIntro",
      title: "Featured Intro",
      type: "text",
    },
    {
      // TODO: Turn into Google Maps Input
      name: "address",
      title: "address",
      type: "string",
    },
    {
      name: "listingImage",
      title: "Listing Image",
      description: 'Use this field in place of Location Image',
      type: "image",
    },
    // DEPRECATE
    {
      name: "locationImage",
      title: "Location Image",
      description: 'DEPRECATED - Going forward this field should not be used. Will eventually be phased out.',
      type: "cloudinary.asset",
    },
    {
      name: "locationFeatures",
      title: "locationFeatures",
      type: "object",
      fields: [
        {
          name: "beds",
          title: "Beds",
          type: "number",
        },
        {
          name: "baths",
          title: "Baths",
          type: "number",
        },
        {
          name: "sqft",
          title: "Sq. Ft",
          type: "number",
        },
        {
          name: "garages",
          title: "Garages",
          type: "number",
        },
      ],
    },
  ],
};
