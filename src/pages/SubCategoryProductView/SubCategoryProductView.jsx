import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";

const SubCategoryProductView = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 justify-items-center gap-2 md:gap-5 w-[300px] md:w-[650px] lg:w-[950px] 2xl:w-[1450px] m-8 mx-auto">
        {products.map((product) => (
          <Card key={product.id} product={product}></Card>
        ))}
      </div>
    </>
  );
};

export default SubCategoryProductView;
