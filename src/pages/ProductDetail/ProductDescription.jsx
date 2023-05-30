import React, { useContext, useEffect, useState } from 'react';
import { TbCurrencyTaka } from "react-icons/tb";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from 'react-icons/bs';
import { CiShoppingCart } from "react-icons/ci";
import { UtilityContext } from '../../Contexts/Utility/UtilityProvider';
import { toast } from 'react-hot-toast';


const ProductDescription = ({ productData, cartItem }) => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    
    const { updateCart } = useContext(UtilityContext);
    const { id, img, name, u_name, size, description, finalPrice, mainPrice, category, subcategory, images } = productData;


    //animation effect
    const [largeImage, setLargeImage] = useState(img);
    const [fadeEffect, setFadeEffect] = useState(false);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {

        setQuantity(cartItem.quantity)

    }, [cartItem])


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



    useEffect(() => {

        const timer = setTimeout(() => {
            setFadeEffect(false);
        }, 200); // Adjust the duration of the fade effect here

        return () => clearTimeout(timer);
    }, [largeImage]);



    return (
        <div className="w-full  md:max-w-4xl">

            <div className="grid grid-cols-12 bg-transparent md:bg-light-100   p-2 rounded-sm md:rounded-lg">


                <div className="col-span-12 md:col-span-2  order-2 md:order-1 flex md:flex-col justify-center items-center" aria-label='all-images'>
                    {
                        images && images.map((imgPath, _idx) =>
                            <div className="avatar mx-3 my-0 md:my-3 md:mx-0 cursor-pointer"
                                key={_idx}
                                onClick={() => {

                                    (largeImage !== imgPath) && setFadeEffect(true);
                                    setLargeImage(imgPath);
                                }}>
                                <div className="p-1 w-24 rounded-full ">
                                    <img src={imgPath} />
                                </div>
                            </div>


                        )
                    }

                </div>


                <div className="col-span-12 md:col-span-5 order-1 md:order-2 mb-7 md:mb-0 flex items-center justify-center " aria-label='image full view'>
                    <div className={`avatar  transition-opacity  ease-in-out rounded-lg  ${fadeEffect ? 'opacity-0' : 'opacity-100'
                        }`}>
                        <div className="w-full px-3 md:px-1 h-64 md:h-80 max-h-80 rounded-2xl">
                            {
                                !fadeEffect && <img src={largeImage} />
                            }

                        </div>
                    </div>
                </div>


                <div className="col-span-12 md:col-span-5  order-3 my-5 px-3 flex flex-col justify-around" aria-label='product info'>


                    <div className="">
                        <div className='grid grid-cols-2 md:grid-cols-1 my-3'>
                            <div >
                                <h2 className="card-title text-3xl font-medium">
                                    {name}
                                </h2>

                            </div>
                            <div className='flex items-center ml-3 md:ml-0'>

                                <p className="text-sm   text-[#A9A9A9]">
                                    {size}
                                </p>
                            </div>

                        </div>
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
                    </div>


                    <div className="grid grid-cols-12 gap-3" >
                        <div className="col-span-9 md:col-span-12 w-full md:w-64  xl:max-w-sm ">
                            <div className="bg-shadow-100 h-14 rounded-lg grid grid-cols-12 p-2">
                                <div className="col-span-5 m-auto" aria-label='quantity'>
                                    <p>Qunatity</p>
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
                        <div className="col-span-3 md:col-span-12 w-full md:w-64  xl:max-w-sm">
                            <button onClick={() => updateCart(id, u_name, quantity)} className="btn h-14 w-full border-0 rounded-2xl md:rounded-lg bg-root-100 hover:bg-root-200   ">
                                <CiShoppingCart className='text-2xl' />
                                <span className="hidden md:block lg:block 2xl:block mx-0 md:mx-3 md:font-medium md:text-[20px] lg:font-medium lg:text-[20px] 2xl:font-medium 2xl:text-[20px] normal-case">Add to Cart</span>

                            </button></div>
                    </div>
                </div>

                <div className="col-span-12 order-4 pt-9 px-1 md:px-5">
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


    );
};

export default ProductDescription;