export default{
    name:'property',
    title: 'Property',
    type: 'document',
    fields: [
        {
            name:'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 100
            }
        },
        {
            name:'location',
            title:'Location',
            type:'geopoint',
        },
        {
            name:'propertyType',
            title: 'Proper Type',
            type: 'string',
            options: {
                list: [ 
                    {title: 'Haus', value:'haus'}, 
                    {title: 'Wohnung', value:'wohnung'}, 
                ],
                layout: 'radio'
            }
        },
        {
            name:'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name:'images',
            title: 'Images',
            type: 'array',
            of: [{type:'propertyImage'}]
        },
        {
            name: 'pricePerNight',
            title:'Price Per Night',
            type:'number',
        },

        {
            name: 'beds',
            title: 'Beds',
            type: 'number',
        },
        {
            name:'bedrooms',
            title: 'Bedrooms',
            type:'number',
        },
        {
            name:'id',
            title: 'ID',
            type:'number',
        },
        {
            name:'description',
            title: 'Description',
            type:'string',
        },
        {
            name:'host',
            title:'Host',
            type:'host',
        },
       
    ]
}