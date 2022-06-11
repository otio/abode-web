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
            name: 'textLongSize',
            title: 'Long Text Font Size',
            type: 'string',
            options: {
                layout: 'dropdown',
                list: [
                    { title: 'Body', value: 'body'},
                    { title: 'Large', value: 'lg'},
                    { title: 'Extra Large', value: 'xl'}
                ]
            },
            hidden: ({ parent }) => parent?.textLongContent === undefined,
        },
        // TODO: Implement Block content
        // {
        //     name: 'blockText',
        //     title: 'Block Text',
        //     type: 'array',
        //     of: [{ type: 'block' }],
        // },
    ],
}