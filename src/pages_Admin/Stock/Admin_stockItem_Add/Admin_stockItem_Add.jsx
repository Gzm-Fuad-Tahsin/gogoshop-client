import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import LoadingIcon from '../../../pages/ErrorPages/LoadingIcon/LoadingIcon';

const Admin_stockItem_Add = () => {
    const { product_slug } = useParams();


    // ___________________handle image _____________________________
    const [selectedImage, setSelectedImage] = useState(null);
    const [existingStockEditable,setexistingStockEditable] = useState(true);


    //  data 

    const [product, setProduct] = useState(null);
    useEffect(() => {
        const fetchData = async () => {

            axios.get(`${import.meta.env.VITE_SERVER_ADDRESS}/admin/inventory/${product_slug}/add`)
                .then(data => {
                    if (data.status === 200) {
                        setProduct(data.data);

                    }

                })
        };

        fetchData();
    }, [product_slug]);

    useEffect(() => {
        if (product) {

            setSelectedImage(product?.img);
        }

    }, [product])


    const { register, formState: { errors }, handleSubmit } = useForm({ mode: "onChange" });

    const onSubmit = (data) => {
        console.log(data);

    };
    return (
        <>
            {
                product ?
                    <>
                        <form onSubmit={handleSubmit(onSubmit)} className='max-w-5xl pt-8 lg:pt-10 px-4 lg:px-10 '>

                            <div className='pt-8  grid grid-cols-1 md:grid-cols-2'>
                                {/* image upload  */}
                                <div className="col flex flex-col items-center md:items-start mb-7">
                                    <h2 className='text-xl md:text-2xl text-[#292D32] mb-7'>Add to Stock</h2>


                                    <img src={selectedImage} alt="Uploaded" className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl object-contain" />



                                </div>
                                <div className="col flex justify-center md:justify-start items-center">
                                    <div className='w-full mt-2'>

                                        {/* product name  */}
                                        <div className='grid grid-cols-1 justify-center gap-6 mb-6 '>
                                            <div className=''>
                                                <div className='flex items-center'>
                                                    <label htmlFor="name" className="block my-1 pl-2 text-md font-medium">Name</label>
                                                </div>
                                                <div>
                                                    <input
                                                        autoComplete='off'
                                                        type="text"
                                                        placeholder="Type here"
                                                        className="block input-field w-full px-4 p-2 text-gray-900  rounded-lg border border-gray-300 text-base  read-only:bg-gray-100 read-only:border-0 read-only:cursor-not-allowed"

                                                        defaultValue={`${product?.name} (${product?.size})`}
                                                        readOnly
                                                        {...register("name", {
                                                            required: "*name required",
                                                            maxLength: {
                                                                value: 50,
                                                                message: "Max length is 50"
                                                            }
                                                        })} />
                                                    {errors.name && <p className='p-1 text-xs text-red-600'>{errors.name.message}</p>}
                                                </div>

                                            </div>
                                        </div>


                                        {/* previous stock  */}
                                        <div className='grid grid-cols-1 justify-center gap-6 mb-6 '>
                                            <div>
                                                <div className='flex items-center'>
                                                    <label htmlFor="first_name" className="block my-1 pl-2 text-md font-medium">Existing Stock</label>
                                                </div>
                                                <div  className='relative'>
                                                    <input
                                                        autoComplete='off'
                                                        type="number"
                                                        placeholder="Type here"
                                                        className="block input-field w-full px-3 p-2 text-gray-900  rounded-lg border border-gray-300 text-base  read-only:bg-gray-100 read-only:border-0 read-only:cursor-not-allowed"

                                                        defaultValue={product?.stock}
                                                        readOnly={existingStockEditable}
                                             
                                                        {...register("stock", {
                                                            required: "*product stock required",
                                                            maxLength: {
                                                                value: 50,
                                                                message: "Max length is 50"
                                                            }
                                                        })} />
                                                    {errors.stock && <p className='p-1 text-xs text-red-600'>{errors.stock.message}</p>}
                                                    <div className='absolute top-3 right-2 bg-slate-300 px-2 rounded-xl cursor-pointer'  onClick={()=>setexistingStockEditable(!existingStockEditable)}>Edit</div>
                                                </div>

                                            </div>
                                        </div>

                                        {/* new stock  */}
                                        <div className='grid grid-cols-1 justify-center gap-6 mb-6 '>
                                            <div className=''>
                                                <div className='flex items-center'>
                                                    <label htmlFor="first_name" className="block my-1 pl-2 text-md font-medium">New Stock</label>
                                                </div>
                                                <div>
                                                    <input
                                                        autoComplete='off'
                                                        type="number"
                                                        placeholder="Type here"
                                                        className="block input-field w-full p-2 px-3 text-gray-900  rounded-lg border border-gray-300 text-base  read-only:bg-gray-100 read-only:border-0 read-only:cursor-not-allowed"
                                                      
                                                        {...register("newStock", {
                                                            required: "*new stock required",
                                                            maxLength: {
                                                                value: 50,
                                                                message: "Max length is 50"
                                                            }
                                                        })} />
                                                    {errors.newStock && <p className='p-1 text-xs text-red-600'>{errors.newStock.message}</p>}
                                                </div>

                                            </div>
                                        </div>


                                        {/* hidden input  */}
                                        <input {...register("_id")} defaultValue={product?._id} readOnly type='hidden'/>
                                        <input {...register("slug_name")} defaultValue={product?.slug_name} readOnly type='hidden'/>
                                    


                                       
                                    </div>
                                </div>
                                <div className='col md:col-span-2 flex justify-center items-center'>
                                    <input type="submit" className='cursor-pointer py-2.5 pr-10  pl-10 bg-root-100 hover:bg-root-200 text-white  text-xl rounded-[45px]' value='Save' />
                                </div>
                            </div>
                        </form>

                    </>
                    :
                    <>
                        <LoadingIcon />
                    </>
            }

        </>
    );
};

export default Admin_stockItem_Add;