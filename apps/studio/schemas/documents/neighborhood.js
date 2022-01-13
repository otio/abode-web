export default {
  name: "neighborhood",
  title: "Neighborhood",
  type: "document",
  fieldsets: [{ name: "demographics", title: "Neighborhood Demographics" }],
  fields: [
    {
      name: "areaName",
      title: "Area Name",
      type: "string",
    },
    {
      name: "areaPreviewImage",
      title: "Area Preview Image",
      type: "cloudinary.asset",
    },
    {
      name: "areaBanner",
      title: "Area Banner",
      type: "bannerContent",
    },
    {
      name: "medianAge",
      title: "Median Age",
      type: "number",
      fieldset: "demographics",
    },
    {
      name: "medianHouseholdIncome",
      title: "Median Household Income",
      type: "number",
      fieldset: "demographics",
    },
    {
      name: "educationLevel",
      title: "College Educated",
      type: "number",
      fieldset: "demographics",
    },
    {
      name: "areaExplainerText",
      title: "Area Explainer Text",
      type: "textTriple",
    },
    {
      name: "areaCtaBanner",
      title: "Area CTA Banner",
      type: "bannerContent",
    },
  ],
};
