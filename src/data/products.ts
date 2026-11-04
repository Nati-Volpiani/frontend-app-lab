type ProductImage = {
    src: string;
    alt: string;
};

export type Product = {
    id: string;
    name: string;
    price: number;
    description: string;
    images: ProductImage[];
};

export const products: Product[] = [
    {
        id: 'sweater',
        name: 'Sweater',
        price: 49,
        description: 'A soft beige knit for cooler days. The relaxed silhouette, crew neck and ribbed cuffs make it an easy layer to wear with your favorite jeans.',
        images: [
            { src: '/products/sweater-front.jpg', alt: 'Beige sweater, front view' },
            { src: '/products/sweater-detail.jpg', alt: 'Close-up of the sweater knit' },
        ],
    },
    {
        id: 't-shirt',
        name: 'T-Shirt',
        price: 25,
        description: 'An everyday white tee with a classic round neckline and a comfortable fit. Wear it on its own or use it as a simple base for your favorite layers.',
        images: [
            { src: '/products/t-shirt-front.jpg', alt: 'White T-shirt, front view' },
            { src: '/products/t-shirt-detail.jpg', alt: 'White T-shirt, detail view' },
        ],
    },
    {
        id: 'leather-bag',
        name: 'Leather Bag',
        price: 89,
        description: 'A brown leather weekender with sturdy handles and room for your essentials. A side pocket keeps smaller items within easy reach, whether you are heading out for the day or packing for a short trip.',
        images: [
            { src: '/products/leather-bag-front.webp', alt: 'Brown leather bag, front view' },
            { src: '/products/leather-bag-side.webp', alt: 'Brown leather bag, side pocket' },
            { src: '/products/leather-bag-back.webp', alt: 'Brown leather bag, back view' },
        ]
    },
];