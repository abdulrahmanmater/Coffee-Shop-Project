// products.data.js

export const products = [
    // Coffee
    {
        id: 1,
        title: "House Blend",
        category: "coffee",
        src: "images/house-blend.jpg",
        rating: 4.5,

        variants: [
            { size: "250g", type: "whole-bean", price: 19 },
            { size: "500g", type: "whole-bean", price: 27 },
            { size: "1kg", type: "whole-bean", price: 40 },
            { size: "250g", type: "ground", price: 20 },
            { size: "500g", type: "ground", price: 29 },
            { size: "1kg", type: "ground", price: 43 },
        ],

        reviews: [
            {
                id: 1,
                user: "Ahmed",
                rating: 5,
                comment: "Smooth and balanced flavor.",
                date: "2026-09-03",
            },
            {
                id: 2,
                user: "Omar",
                rating: 4,
                comment: "Great everyday coffee.",
                date: "2026-09-01",
            },
        ],
    },

    {
        id: 2,
        title: "Espresso Roast",
        category: "coffee",
        src: "images/espresso.jpg",
        rating: 4.8,

        variants: [
            { size: "250g", type: "whole-bean", price: 15 },
            { size: "500g", type: "whole-bean", price: 20 },
            { size: "1kg", type: "whole-bean", price: 35 },
            { size: "250g", type: "ground", price: 16 },
            { size: "500g", type: "ground", price: 22 },
        ],

        reviews: [
            {
                id: 1,
                user: "Youssef",
                rating: 5,
                comment: "Rich and strong espresso.",
                date: "2026-09-02",
            },
        ],
    },

    {
        id: 3,
        title: "Colombian Coffee",
        category: "coffee",
        src: "images/colombian-coffee.jpg",
        rating: 4.6,

        variants: [
            { size: "250g", type: "whole-bean", price: 22 },
            { size: "500g", type: "whole-bean", price: 32 },
            { size: "1kg", type: "whole-bean", price: 48 },
            { size: "250g", type: "ground", price: 23 },
            { size: "500g", type: "ground", price: 34 },
        ],

        reviews: [
            {
                id: 1,
                user: "Karim",
                rating: 5,
                comment: "Excellent aroma and flavor.",
                date: "2026-08-29",
            },
        ],
    },

    {
        id: 4,
        title: "Ethiopian Coffee",
        category: "coffee",
        src: "images/ethiopian-coffee.jpg",
        rating: 4.7,

        variants: [
            { size: "250g", type: "whole-bean", price: 24 },
            { size: "500g", type: "whole-bean", price: 36 },
            { size: "1kg", type: "whole-bean", price: 52 },
            { size: "250g", type: "ground", price: 25 },
            { size: "500g", type: "ground", price: 38 },
        ],

        reviews: [
            {
                id: 1,
                user: "Mohamed",
                rating: 5,
                comment: "Fruity and very aromatic.",
                date: "2026-09-04",
            },
            {
                id: 2,
                user: "Ali",
                rating: 4,
                comment: "A little different but really good.",
                date: "2026-09-01",
            },
        ],
    },

    {
        id: 5,
        title: "Decaf Coffee",
        category: "decaf",
        src: "images/decaf-coffee.jpg",
        rating: 4.1,

        variants: [
            { size: "250g", type: "whole-bean", price: 17 },
            { size: "500g", type: "whole-bean", price: 23 },
            { size: "250g", type: "ground", price: 18 },
            { size: "500g", type: "ground", price: 25 },
        ],

        reviews: [
            {
                id: 1,
                user: "Hassan",
                rating: 4,
                comment: "Good taste for a decaf coffee.",
                date: "2026-08-30",
            },
        ],
    },

    // Cold Brew
    {
        id: 6,
        title: "Classic Cold Brew",
        category: "cold-brew",
        src: "images/classic-cold-brew.jpg",
        rating: 4.5,

        variants: [
            { size: "250ml", type: "original", price: 18 },
            { size: "500ml", type: "original", price: 25 },
            { size: "1L", type: "original", price: 40 },
        ],

        reviews: [
            {
                id: 1,
                user: "Ahmed",
                rating: 5,
                comment: "Excellent coffee.",
                date: "2026-09-05",
            },
            {
                id: 2,
                user: "Omar",
                rating: 4,
                comment: "Very good flavor.",
                date: "2026-09-04",
            },
        ],
    },

    {
        id: 7,
        title: "Vanilla Cold Brew",
        category: "cold-brew",
        src: "images/vanilla-cold-brew.jpg",
        rating: 4.6,

        variants: [
            { size: "250ml", type: "vanilla", price: 20 },
            { size: "500ml", type: "vanilla", price: 28 },
            { size: "1L", type: "vanilla", price: 44 },
        ],

        reviews: [
            {
                id: 1,
                user: "Mariam",
                rating: 5,
                comment: "The vanilla flavor is amazing.",
                date: "2026-09-03",
            },
        ],
    },

    {
        id: 8,
        title: "Caramel Cold Brew",
        category: "cold-brew",
        src: "images/caramel-cold-brew.jpg",
        rating: 4.4,

        variants: [
            { size: "250ml", type: "caramel", price: 21 },
            { size: "500ml", type: "caramel", price: 29 },
            { size: "1L", type: "caramel", price: 45 },
        ],

        reviews: [
            {
                id: 1,
                user: "Sara",
                rating: 4,
                comment: "Sweet and refreshing.",
                date: "2026-08-31",
            },
        ],
    },

    // Hot Drinks
    {
        id: 9,
        title: "Cappuccino",
        category: "hot-drinks",
        src: "images/cappuccino.jpg",
        rating: 4.7,

        variants: [
            { size: "Small", type: "classic", price: 14 },
            { size: "Medium", type: "classic", price: 18 },
            { size: "Large", type: "classic", price: 22 },
        ],

        reviews: [
            {
                id: 1,
                user: "Omar",
                rating: 5,
                comment: "Perfect foam and great taste.",
                date: "2026-09-02",
            },
        ],
    },

    {
        id: 10,
        title: "Caffe Latte",
        category: "hot-drinks",
        src: "images/latte.jpg",
        rating: 4.6,

        variants: [
            { size: "Small", type: "classic", price: 15 },
            { size: "Medium", type: "classic", price: 19 },
            { size: "Large", type: "classic", price: 23 },
        ],

        reviews: [
            {
                id: 1,
                user: "Nour",
                rating: 5,
                comment: "Creamy and delicious.",
                date: "2026-09-01",
            },
        ],
    },

    {
        id: 11,
        title: "Mocha",
        category: "hot-drinks",
        src: "images/mocha.jpg",
        rating: 4.8,

        variants: [
            { size: "Small", type: "chocolate", price: 17 },
            { size: "Medium", type: "chocolate", price: 21 },
            { size: "Large", type: "chocolate", price: 25 },
        ],

        reviews: [
            {
                id: 1,
                user: "Youssef",
                rating: 5,
                comment: "Chocolate and coffee are perfectly balanced.",
                date: "2026-09-04",
            },
        ],
    },

    {
        id: 12,
        title: "Americano",
        category: "hot-drinks",
        src: "images/americano.jpg",
        rating: 4.3,

        variants: [
            { size: "Small", type: "classic", price: 12 },
            { size: "Medium", type: "classic", price: 15 },
            { size: "Large", type: "classic", price: 18 },
        ],

        reviews: [],
    },

    // Tea
    {
        id: 13,
        title: "Green Tea",
        category: "tea",
        src: "images/green-tea.jpg",
        rating: 4.2,

        variants: [
            { size: "Small", type: "classic", price: 10 },
            { size: "Medium", type: "classic", price: 13 },
            { size: "Large", type: "classic", price: 16 },
        ],

        reviews: [],
    },

    {
        id: 14,
        title: "Chai Latte",
        category: "tea",
        src: "images/chai-latte.jpg",
        rating: 4.5,

        variants: [
            { size: "Small", type: "classic", price: 15 },
            { size: "Medium", type: "classic", price: 19 },
            { size: "Large", type: "classic", price: 23 },
        ],

        reviews: [],
    },

    // Merchandise
    {
        id: 15,
        title: "Classic Coffee Mug",
        category: "merchandise",
        src: "images/coffee-mug.jpg",
        rating: 4.7,

        variants: [
            { size: "350ml", type: "black", price: 10 },
            { size: "350ml", type: "cream", price: 12 },
        ],

        reviews: [
            {
                id: 1,
                user: "Ahmed",
                rating: 5,
                comment: "Simple and beautiful mug.",
                date: "2026-08-28",
            },
        ],
    },

    {
        id: 16,
        title: "Travel Coffee Cup",
        category: "merchandise",
        src: "images/travel-cup.jpg",
        rating: 4.6,

        variants: [
            { size: "350ml", type: "black", price: 16 },
            { size: "500ml", type: "black", price: 20 },
            { size: "500ml", type: "cream", price: 22 },
        ],

        reviews: [],
    },

    {
        id: 17,
        title: "Coffee Tumbler",
        category: "merchandise",
        src: "images/coffee-tumbler.jpg",
        rating: 4.9,

        variants: [
            { size: "500ml", type: "black", price: 25 },
            { size: "750ml", type: "black", price: 30 },
            { size: "750ml", type: "cream", price: 32 },
        ],

        reviews: [
            {
                id: 1,
                user: "Karim",
                rating: 5,
                comment: "Excellent quality and keeps coffee hot.",
                date: "2026-09-03",
            },
        ],
    },

    {
        id: 18,
        title: "Coffee Storage Jar",
        category: "merchandise",
        src: "images/coffee-jar.jpg",
        rating: 4.4,

        variants: [
            { size: "500ml", type: "glass", price: 18 },
            { size: "1L", type: "glass", price: 25 },
        ],

        reviews: [],
    },
];

