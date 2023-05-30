import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { fetchJson } from "../../assets/Scripts/utility";
import { useLoaderData } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";
export async function loader({ params }) {

  return await fetchJson("products.json");

}

const SubCategoryProductView = () => {
  const productsData = useLoaderData();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);


  return (
    <>
    <PageTitle text='subcategoryname'/>
      <div className="flex flex-wrap ">
        {productsData.map((product) => (
          <Card key={product.id} product={product}></Card>
        ))}
      </div>


    </>
  );
};

export default SubCategoryProductView;
