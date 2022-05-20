export default {
    name: 'ctaPicker',
    title: 'Call-To-Action picker',
    type: 'object',
    fields: [
        {
            name: "callToActionForms",
            title: "Call-To-Action Forms",
            type: "array",
            of: [{ type: "reference", to: [{ type: "callToAction" }] }],
            validation: Rule => Rule.max(1)
        },
    ],
}