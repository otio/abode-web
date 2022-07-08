export default {
  name: "textContent",
  title: "Text Content",
  description: "Used to add SHORT & LONG Form text",
  type: "object",
  fieldsets: [
    { name: "deprecated", title: "DEPRECATED - DO NOT USE", hidden: false },
  ],
  fields: [
    {
      name: "short",
      title: "Short Form Text Content",
      type: "array",
      fieldset: "deprecated",
      of: [{ type: "textShort" }],
    },
    {
      name: "Long",
      title: "Long Form Text Content",
      type: "array",
      fieldset: "deprecated",
      of: [{ type: "textLong" }],
    },
    {
      name: "textComponents",
      title: "Text components",
      type: "array",
      of: [{ type: "textShort" }, { type: "textLong" }],
    },
  ],
};
