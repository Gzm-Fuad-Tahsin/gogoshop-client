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
      <div className="flex flex-wrap">
        {products.map((product) => (
          <Card key={product.id} product={product}></Card>
        ))}
      </div>
    </>
  );
};

export default SubCategoryProductView;
