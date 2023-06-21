import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { TbCurrencyTaka } from "react-icons/tb";

import { CiShoppingCart } from "react-icons/ci";
import { UtilityContext } from '../../Contexts/Utility/UtilityProvider';
import { fetchJson } from '../../assets/Scripts/utility';
import { toast } from 'react-hot-toast';

import PageTitleBreadCrumb from '../../components/PageTitleBreadCrumb/PageTitleBreadCrumb';
import ScrollToTop from '../../components/ScrollToTop/ScrollTotop';
import { Helmet } from 'react-helmet-async';
import NotFound from '../ErrorPages/NotFound/NotFound';


export async function loader({ params }) {

    return await fetchJson(`${import.meta.env.VITE_SERVER_ADDRESS}/productDetail/${params.product_slug_name}`);

}
const ProductDetail = () => {
    const productData = useLoaderData();
    const { product_id, img, name, slug_name, size, description, finalPrice, mainPrice, category, subcategory, images } = productData;


    const { cart, updateCart } = useContext(UtilityContext);

    const [alreadyAdded, setAlreadyAdded] = useState(false);

    useEffect(() => {

        if (cart.find(item => item.product_id === product_id)) {
            setAlreadyAdded(true);
        }

    }, [cart, product_id])


    //animation effect
    const [largeImage, setLargeImage] = useState(img);

 




    return (
        <>
            {
                productData ?
                    <>
                        <Helmet prioritizeSeoTags>
                            {/* <title>{name}</title> */}
                            <meta property="og:title" content={name} />
                            <meta name="whatever" value="notImportant" />
                            <meta property="og:description" content={description} />
                            <meta property="og:image" content={img} />
                            <link rel="notImportant" href="https://www.chipotle.com _____________ei page er path___" />
                        </Helmet>

                        <ScrollToTop />
                        <PageTitleBreadCrumb data={[category, subcategory]} />
                        <div className='flex justify-center p-2  pt-4  '>

                            <div className="w-full lg:max-w-4xl">

                                <div className="grid grid-cols-12 bg-transparent md:bg-light-100   p-2 rounded-sm md:rounded-lg">


                                    <div className="col-span-12 lg:col-span-2  order-2 lg:order-1 flex flex-wrap lg:flex-col justify-center items-center mt-0 md:mt-4 lg:mt-0" aria-label='all-images'>
                                        {
                                            images && [...images,largeImage].map((imgPath, _idx) =>
                                                <div className="avatar px-3 my-0 lg:my-3 md:px-3 cursor-pointer"
                                                    key={_idx}
                                                    onClick={() => {

                                                      
                                                        setLargeImage(imgPath);
                                                    }}>
                                                    <div className="p-1 w-20 lg:w-24 rounded-full ">
                                                        <img src={imgPath} />
                                                    </div>
                                                </div>


                                            )
                                        }

                                    </div>


                                    <div className="col-span-12 lg:col-span-5 order-1 lg:order-2  flex items-center justify-center " aria-label='image full view'>
                                      
                                            <div className={`avatar  transition-opacity  ease-in-out rounded-lg  `}>
                                            <div className="w-full px-3 md:px-1 h-56 lg:h-80 max-h-80 rounded-2xl">
                                                {
                                                   <img src={largeImage} />
                                                }

                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-span-12 lg:col-span-5  order-3 my-5 px-3 flex flex-col justify-center " aria-label='product info'>




                                        <h2 className="card-title text-2xl font-medium">{name}</h2>
                                        <p className="text-sm   text-[#A9A9A9]">{size}</p>



                                        <p className="my-3 flex items-center text-lg text-[#807F7F]">
                                            <TbCurrencyTaka></TbCurrencyTaka>
                                            {finalPrice}
                                            {mainPrice && (
                                                <s className="flex items-center text-base ml-3 text-[#878080]">
                                                    <TbCurrencyTaka></TbCurrencyTaka>
                                                    {mainPrice}
                                                </s>
                                            )}
                                        </p>


                                        <div className="flex justify-center lg:justify-start items-center my-3 md:my-5" >
                                            
                                            <div className=" w-full md:w-64  xl:max-w-sm">
                                                {
                                                    alreadyAdded ?
                                                       
                                                        <button onClick={() => toast.error('Already added')} className="btn text-white h-14 w-full border-0 rounded-2xl lg:rounded-lg bg-root-100 hover:bg-root-200   flex">
                                                            <CiShoppingCart className='text-2xl ' />
                                                            <span className=" px-3 md:font-medium md:text-[20px] lg:font-medium lg:text-[20px] 2xl:font-medium 2xl:text-[20px] normal-case">Added</span>

                                                        </button>
                                                        :
                                                         <button onClick={() => updateCart({ product_id, quantity: 1 })} className="btn text-white h-14 w-full border-0 rounded-2xl lg:rounded-lg bg-root-100 hover:bg-root-200   ">
                                                         <CiShoppingCart className='text-2xl ' />
                                                         <span className="px-3 md:font-medium md:text-[20px] lg:font-medium lg:text-[20px] 2xl:font-medium 2xl:text-[20px] normal-case">Add to Cart</span>

                                                     </button>
                                                     
                                                }
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-span-12 order-4 pt-9 px-1 lg:px-5">
                                        {
                                            description &&
                                            <>
                                                <h2 className='font-semibold text-lg mb-2'>Description</h2>
                                                <p className='font-normal text-base leading-7'>
                                                    {
                                                        description

                                                    }
                                                </p>
                                            </>
                                        }

                                    </div>





                                </div>
                            </div>

                        </div>
                    </>
                    :
                    <NotFound />
            }
        </>
    );
};

export default ProductDetail;