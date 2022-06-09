export default {
    name: 'textLong',
    title: 'Long text',
    type: 'object',
    fields: [
        {
            name: 'textLongContent',
            title: 'Simple Long Text',
            type: 'text',
        },
        {
            name: 'blockText',
            title: 'Block Text',
            type: 'array',
            of: [{ type: 'block' }],
        },
    ],
}