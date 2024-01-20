import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

function ProductDetail() {
    const [product, setProduct] = useState(null);
    const { productId } = useParams();

    useEffect(() => {
        const fetchShop = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${productId}`)
            const data = await response.json();
            setProduct(data)
        };
        fetchShop();
    }, [productId]);

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>${product.price}</p>
        </div>
    );
}


export default ProductDetail;