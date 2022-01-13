export default {
  name: "areasServed",
  title: "Areas Served",
  type: "object",
  fields: [
    {
      name: "areaPages",
      title: "Area Pages",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "neighborhood" }],
        },
      ],
    },
  ],
};
