import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BestDeals from './BestDeals';
import { fetchJson } from '../../../assets/Scripts/utility';

export async function loader({ params }) {

    return await fetchJson(`${import.meta.env.VITE_SERVER_ADDRESS}/sub-category/${params.subcategory_slug}`);
  }

const ShowBestDeals = () => {
    const {  products } = useLoaderData();
    return (
        <>
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

export default ShowBestDeals;