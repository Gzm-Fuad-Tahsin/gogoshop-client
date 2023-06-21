import React from "react";
import Card from "../../components/Card/Card";
import { useLoaderData } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";
import ScrollToTop from "../../components/ScrollToTop/ScrollTotop";
import NotFound from "../ErrorPages/NotFound/NotFound";

import { fetchJson } from "../../assets/Scripts/utility";


export async function loader({ params }) {

  return await fetchJson(`${import.meta.env.VITE_SERVER_ADDRESS}/sub-category/${params.subcategory_slug}`);
}

const SubCategoryProductView = () => {
 
  const { subcategory_slug, subcategoryname, products } = useLoaderData();



  return (
    <>
      <ScrollToTop />

      {
        Array.isArray(products) ?
          <>
            <PageTitle text={subcategoryname} />
            <div className="flex flex-wrap justify-start">
              {
                products.map((product, _idx) => (
                  <Card key={_idx} product={product}></Card>
                ))


              }
            </div>
          </>
          :
          <NotFound />
      }



    </>
  );
};

export default SubCategoryProductView;
