import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';

const SubCategoryProductView = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("products.json")
          .then((res) => res.json())
          .then((data) => setProducts(data));
      }, []);

    return (
        <>
        <div className='grid grid-cols-2 lg:grid-cols-4 justify-items-center gap-6 lg:w-[1000px] lg:mx-auto m-10'>
            {
                products.map(product => <Card
                key={product.id}
                product={product}
                ></Card>)
            }
        </div>
        </>
    );
};

export default SubCategoryProductView;