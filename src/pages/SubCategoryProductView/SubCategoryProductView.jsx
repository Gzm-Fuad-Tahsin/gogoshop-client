import React, { useContext, useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { useLoaderData, useParams } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";
import ScrollToTop from "../../components/ScrollToTop/ScrollTotop";
import NotFound from "../ErrorPages/NotFound/NotFound";
import { WebpageDataContext } from "../../Layout/Main/Main";


export async function loader({ params }) {

  return params.path_Subcat_Uname;
}

const SubCategoryProductView = () => {
  const { AllproductsData } = useContext(WebpageDataContext);  //fetch products from context
  const path_Subcat_Uname = useLoaderData();
  

  const [SubcategoryProducts, setSubcategoryProducts] = useState([]);

  useEffect(() => {
    const data =  AllproductsData.find(productData=>productData?.sub_category_Uname ===path_Subcat_Uname)
    setSubcategoryProducts(data);
   


  }, [path_Subcat_Uname,AllproductsData])


  const { sub_category_Uname, subcategoryname, products } = SubcategoryProducts;



  return (
    <>

      <ScrollToTop />
      <PageTitle text={subcategoryname} />
      <div className="flex flex-wrap justify-evenly">
        {Array.isArray(products) ?
          products.map((product) => (
            <Card key={product.id} product={product}></Card>
          ))
          :
          <NotFound />

        }
      </div>


    </>
  );
};

export default SubCategoryProductView;
