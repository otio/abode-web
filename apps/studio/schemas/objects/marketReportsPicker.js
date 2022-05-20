export default {
    name: 'marketReportsPicker',
    title: 'Market reports picker',
    type: 'object',
    fields: [
        {
            name: 'useAll',
            title: 'Use All?',
            type: 'boolean',
        },
        {
            name: "marketReports",
            title: "Market Reports",
            type: "array",
            of: [{ type: "reference", to: [{ type: "marketReport" }] }],
          },
    ],
}