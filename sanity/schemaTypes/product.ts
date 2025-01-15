 
export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields:  [
        {
            name: 'name',
            type: 'string',
            title: 'Name of the product'
        },
        {
            name: 'images',
            type: 'array',
            title: 'Product Images',
            of: [{type: 'image'}]
        },
        {
            name: 'description',
            type: 'text',
            title: 'Product description'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Product slug',
            options: {
                source: 'name'
            }
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price'
        },
        {
            name: 'category',
            title: 'Product category',
            type: 'reference',
            to: [
                {
                    type: 'categories',
                },
            ]
        }
    ]
}