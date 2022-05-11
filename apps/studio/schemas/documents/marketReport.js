export default {
    name: 'marketReport',
    title: 'Market reports',
    type: 'document',
    fields: [
        {
            name: 'marketReportYear',
            title: 'Market Report Year',
            description: 'Year the market report is released. Select a date within the year and month you are trying to show.',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MMMM'
            }
        },
        {
            name: 'marketReportImage',
            title: 'Market Report Cover Image',
            type: 'image',
        },
    ],
}