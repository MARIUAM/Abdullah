import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';

interface Ibooks {
    _id: string;
    name: string;
    price: number;
    description: string;
    discountPercentage: number;
    stockLevel: number;
    category: string;
    imageUrl: string;
    slug: { current: string };
}

export function useFeaturedProducts() {
    const [products, setProducts] = useState<Ibooks[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchProducts = async () => {
            const res: Ibooks[] = await client.fetch(`*[_type == "product" && isFeaturedProduct == true][0..2] {
                _id,
                name,
                price,
                description,
                discountPercentage,
                stockLevel,
                category,
                slug { current },
                "imageUrl": image.asset->url
            }`);
            setProducts(res);
            setLoading(false);
        };

        fetchProducts();
    }, []);

    return { products, loading };
}
