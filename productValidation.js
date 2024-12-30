db.createCollection('product', {
    validator: {
        $jsonSchema: {
            required: ['title', 'quantity', 'price', 'currency'],
            bsonType: 'object',
            properties: {
                title: {
                    bsonType: 'string',
                    description: "Product title is required"
                },
                quantity: {
                    bsonType: 'number',
                    description: 'Quantity is required'
                },
                price: {
                    bsonType: 'number',
                    description:'Price is required'
                },
                currency: {
                    bsonType: 'string',
                    description: 'currency is required'
                }
            }
        }
    }
})