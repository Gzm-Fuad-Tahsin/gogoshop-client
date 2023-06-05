import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { TbCurrencyTaka } from "react-icons/tb";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from 'react-icons/bs';
import { CiShoppingCart } from "react-icons/ci";
import { UtilityContext } from '../../Contexts/Utility/UtilityProvider';
import { fetchJson } from '../../assets/Scripts/utility';
import { toast } from 'react-hot-toast';
import PageTitle from '../../components/PageTitle/PageTitle';
import PageTitleBreadCrumb from '../../components/PageTitleBreadCrumb/PageTitleBreadCrumb';


export async function loader({ params }) {

    return await fetchJson("productDetailData.json");

}
const ProductDetail = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const { cart, updateCart } = useContext(UtilityContext);

    const productData = useLoaderData();

    const { id, img, name, u_name, size, description, finalPrice, mainPrice, category, subcategory, images } = productData;



    // ________________________________cart item for this item_______________________________
    const [cartItem, setCartItem] = useState({
        "id": null,
        "u_name": null,
        "quantity": 1
    })

    useEffect(() => {

        setQuantity(cartItem.quantity)

    }, [cartItem])



    //___________________________set the quantity if previously added________________________
    useEffect(() => {
        if (cart.length > 0 && productData) {

            setCartItem(cart.find(item => item.id === productData?.id))
        }

    }, [cart, productData])
    // _______________________________________________________________________


    //animation effect
    const [largeImage, setLargeImage] = useState(img);
    const [fadeEffect, setFadeEffect] = useState(false);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {

        const timer = setTimeout(() => {
            setFadeEffect(false);
        }, 200); // Adjust the duration of the fade effect here

        return () => clearTimeout(timer);
    }, [largeImage]);

    // ____________________________________________________________________






    ///_______________________increase and Decrease___________________
    const handleIncrease = e => {
        event.preventDefault();

        // 20 will be replaced by "available product ammount"

        if (parseInt(quantity) >= 20) {
            toast.error('Maximum product Added');
            return;
        }
        setQuantity(parseInt(quantity) + 1);

    }
    const handledecrease = e => {
        event.preventDefault();

        if (parseInt(quantity) <= 1) {
            toast.error('Product less than 1');
            return;
        }
        setQuantity(parseInt(quantity) - 1);
    }
    // _____________________________________________________________







    return (
        <>
        <PageTitleBreadCrumb data={['category','subcategory' ]}/>
            <div className='flex justify-center p-2  pt-4  '>


                <div className="w-full lg:max-w-4xl">

                    <div className="grid grid-cols-12 bg-transparent md:bg-light-100   p-2 rounded-sm md:rounded-lg">


                        <div className="col-span-12 lg:col-span-2  order-2 lg:order-1 flex lg:flex-col justify-center items-center mt-0 md:mt-4 lg:mt-0" aria-label='all-images'>
                            {
                                images && images.map((imgPath, _idx) =>
                                    <div className="avatar mx-3 my-0 lg:my-3 md:mx-0 cursor-pointer"
                                        key={_idx}
                                        onClick={() => {

                                            (largeImage !== imgPath) && setFadeEffect(true);
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
                            <div className={`avatar  transition-opacity  ease-in-out rounded-lg  ${fadeEffect ? 'opacity-0' : 'opacity-100'
                                }`}>
                                <div className="w-full px-3 md:px-1 h-56 lg:h-80 max-h-80 rounded-2xl">
                                    {
                                        !fadeEffect && <img src={largeImage} />
                                    }

                                </div>
                            </div>
                        </div>


                        <div className="col-span-12 lg:col-span-5  order-3 my-5 px-3 flex flex-col justify-around" aria-label='product info'>




                            <h2 className="card-title text-2xl font-medium">{name}</h2>
                            <p className="text-sm   text-[#A9A9A9]">{size}</p>



                            <p className="my-3 flex text-lg text-[#807F7F]">
                                <TbCurrencyTaka></TbCurrencyTaka>
                                {finalPrice}
                                {mainPrice && (
                                    <s className="flex text-base ml-3 text-[#878080]">
                                        <TbCurrencyTaka></TbCurrencyTaka>
                                        {mainPrice}
                                    </s>
                                )}
                            </p>


                            <div className="grid grid-cols-12 gap-3" >
                                <div className="col-span-9 md:col-span-6  lg:col-span-12 w-full  md:w-64  xl:max-w-sm ">
                                    <div className="bg-shadow-100 h-14 rounded-lg grid grid-cols-12 p-2 ">
                                        <div className="col-span-5 m-auto" aria-label='quantity'>
                                            <p>Quantity</p>
                                        </div>
                                        <form className="col-span-7 flex justify-around items-center">
                                            <button className="text-2xl text-[#666666] " onClick={handledecrease}>
                                                <BsFillCaretLeftFill />
                                            </button>
                                            <div className="text-xl">
                                                {
                                                    quantity

                                                }
                                            </div>
                                            <button className="text-2xl text-[#666666] " onClick={handleIncrease}>
                                                <BsFillCaretRightFill />
                                            </button>

                                        </form>
                                    </div>
                                </div>
                                <div className="col-span-3 md:col-span-6 lg:col-span-12 w-full md:w-64  xl:max-w-sm">
                                    <button onClick={() => updateCart({ id, u_name, quantity })} className="btn h-14 w-full border-0 rounded-2xl lg:rounded-lg bg-root-100 hover:bg-root-200   ">
                                        <CiShoppingCart className='text-2xl' />
                                        <span className="hidden md:block lg:block 2xl:block mx-0 md:mx-3 md:font-medium md:text-[20px] lg:font-medium lg:text-[20px] 2xl:font-medium 2xl:text-[20px] normal-case">Add to Cart</span>

                                    </button></div>
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
    );
};

export default ProductDetail;