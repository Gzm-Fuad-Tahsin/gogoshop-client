import React, { useEffect, useState } from 'react';
import ReviewCart from './ReviewCart';

const ProductCart = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("products.json")
          .then((res) => res.json())
          .then((data) => setProducts(data));
      }, []);
    return (
        <>
        {
                products.map((product) => (<ReviewCart
                key={product.id}
                product={product}
                ></ReviewCart>))
            }
        </>
    );
};

export default ProductCart;