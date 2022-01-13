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
      name: "locationImage",
      title: "Location Image",
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
