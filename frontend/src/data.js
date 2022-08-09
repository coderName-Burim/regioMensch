const data = {
    products: [
        {
            name:  'Backware',
            slug: 'Backware',
            category: 'Backwaren',
            image: '/images/p1.jpg',
            price: 4,
            countInStock: 20,
            manufacturer: 'Felsenbäck',
            description: 'Bio-Produkte',
            products:[
                    {
                    name: 'Bretzel',
                    slug: 'Bretzel',
                    category: 'Backwaren',
                    image: '/image/bretzel.jpg'
                    },
                    {
                    name: 'Rosenbrötchen',
                    slug: 'Rosenbrötchen',
                    category: 'Backwaren',
                    image: '/image/rosenbrot.jpg'
                    },
                    {
                    name: 'Bauernbrot',
                    slug: 'Bauernbrot',
                    category: 'Backwaren',
                    image: '/image/bauernbrot.jpg'
                    }
            ]
        },
        {
            name: 'Obst',
            slug: 'Obst',
            category: 'Obst',
            image: '/images/p2.jpg',
            price: 3,
            countInStock: 20,
            manufacturer: 'Fuchshof',
            description: 'Bio-Produkte',
            products:[
                {
                name: 'Apfel',
                slug: 'Abfel',
                category: 'obst',
                image: '/image/bretzel.jpg'
            }
        ]           
        },
        {
            name: 'Gemuese',
            slug: 'Gemuese',
            category: 'Gemuese',
            image: '/images/p3.jpg',
            price: 2,
            countInStock: 20,
            manufacturer: 'Reichenau',
            description: 'Bio-Produkte'          
        },
        {
            name: 'Fleisch',
            slug: 'Fleisch',
            category: 'Tierisch',
            image: '/images/p4.jpg',
            price: 9,
            countInStock: 20,
            manufacturer: 'Otto Müller',
            description: 'Bio-Produkte'         
        }
    ]
}
export default data;