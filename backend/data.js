import bcrypt from 'bcryptjs';

const data = {

    users: [
        {
            name: 'Burim',
            email: 'admin@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },
        {
            name: 'Christian',
            email: 'user@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,
        },

    ],

    products: [
        {
            //_id: '1',
            name:  'Backware',
            slug: 'Backware',
            category: 'Backwaren',
            image: '/images/p1.jpg',
            price: 4,
            unit: 'Stück',
            countInStock: 20,
            manufacturer: 'Felsenbäck',
            description: 'Bio-Produkte',
        },
        {
           // _id: '2',
            name: 'Obst',
            slug: 'Obst',
            category: 'Obst',
            image: '/images/p2.jpg',
            price: 3,
            unit: 'kg',
            countInStock: 0,
            manufacturer: 'Fuchshof',
            description: 'Bio-Produkte'
        },
        {
           // _id: '3',
            name: 'Gemuese',
            slug: 'Gemuese',
            category: 'Gemuese',
            image: '/images/p3.jpg',
            price: 2,
            unit: 'kg',
            countInStock: 20,
            manufacturer: 'Reichenau',
            description: 'Bio-Produkte'
        },
        {
           // _id: '4',
            name: 'Fleisch',
            slug: 'Fleisch',
            category: 'Tierisch',
            image: '/images/p4.jpg',
            price: 9,
            unit: 'kg',
            countInStock: 20,
            manufacturer: 'Otto Müller',
            description: 'Bio-Produkte'
        },
        {
            // _id: '4',
             name: 'Fisch',
             slug: 'Fisch',
             category: 'See',
             image: '/images/fisch.jpg',
             price: 12,
             unit: 'kg',
             countInStock: 20,
             manufacturer: 'HafenShop',
             description: 'Bio-Produkte'
         },
         {
            // _id: '4',
             name: 'Eier',
             slug: 'Eier',
             category: 'vegi',
             image: '/images/eier.jpg',
             price: 3,
             unit: '6er-Pack',
             countInStock: 20,
             manufacturer: 'Fuchshof',
             description: 'Bio-Produkte'
         },
         {
            // _id: '4',
             name: 'Milch',
             slug: 'Milch',
             category: 'vegi',
             image: '/images/milch.jpg',
             price: 1,
             unit: 'Liter',
             countInStock: 20,
             manufacturer: 'Fuchshof',
             description: 'Bio-Produkte'
         },
         {
            // _id: '4',
             name: '..sonstiges',
             slug: 'sonstiges',
             category: 'Bauer',
             image: '/images/sonstiges.jpg',
             price: 1,
             unit: 'Stück',
             countInStock: 20,
             manufacturer: 'HafenShop',
             description: 'Bio-Produkte'
         }
    ]
}
export default data;