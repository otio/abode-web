export default {
  name: "textContent",
  title: "Text Content",
  description: "Used to add SHORT & LONG Form text",
  type: "object",
  fields: [
        {
          name: 'short',
          title: 'Short Form Text Content',
          type: 'array',
          of: [{ type: 'textShort' }],
        },
        {
          name: 'Long',
          title: 'Long Form Text Content',
          type: 'array',
          of: [{ type: 'textLong'}],
        },
      ],
};
