import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import LoadingIcon from '../../../pages/ErrorPages/LoadingIcon/LoadingIcon';

const Admin_ProductEdit = () => {
    // get the category names
    const [categories, setCategories] = useState(null);
    const [product,setProduct] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            axios.get(`${import.meta.env.VITE_SERVER_ADDRESS}/admin/subcategory-list`)
                .then(data => {
                    if (data.status === 200) {
                        setCategories(data.data);
                    }
                });
        };

        fetchData();
    }, []);

    // handle image
    const [selectedImage0, setSelectedImage0] = useState(null);
    const [selectedImage1, setSelectedImage1] = useState(null);
    const [selectedImage2, setSelectedImage2] = useState(null);

    const handleImageUpload0 = (event) => {
        const file = event.target.files[0];
        setSelectedImage0(URL.createObjectURL(file));
    
    };
    const handleImageUpload1 = (event) => {
        const file = event.target.files[0];
        setSelectedImage1(URL.createObjectURL(file));
    
    };
    const handleImageUpload2 = (event) => {
        const file = event.target.files[0];
        setSelectedImage2(URL.createObjectURL(file));
    
    };


    // handle data validation
    const { register, formState: { errors }, handleSubmit } = useForm({ mode: "onChange" });

    const onSubmit = (data) => {
        console.log(data);

      
        
    };
 
    return (
        <>
            {
                categories ?
                    <form onSubmit={handleSubmit(onSubmit)} className='max-w-[1400px] mx-auto pt-8 lg:pt-10 px-4 lg:px-5'>

                        <h2 className='text-xl md:text-2xl text-[#292D32] mb-3'>Add New Product</h2>
                        <div className='pt-8  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                            {/* col-1  */}
                            <div className="col flex flex-col items-center md:items-center lg:items-end mb-7">


                                {/* Image Upload */}
                                <div className='grid grid-cols-1 gap-2'>

                                    {/* iamge 1  */}
                                    <div
                                        className={`w-64 h-64 lg:w-80 lg:h-80 rounded-2xl bg-[#EFEFEF] border-2 border-gray-300 flex items-center justify-center relative `}
                                       
                                    >
                                        {!selectedImage0 && (
                                            <>
                                                <div className="icon absolute top-3 right-3">

                                                    <svg width="28" height="28" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.8466 13.3963C13.5582 13.3963 14.9457 12.0088 14.9457 10.2973C14.9457 8.58573 13.5582 7.19824 11.8466 7.19824C10.135 7.19824 8.74756 8.58573 8.74756 10.2973C8.74756 12.0088 10.135 13.3963 11.8466 13.3963Z" stroke="#434343" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M18.0448 1H11.8467C4.09905 1 1 4.09905 1 11.8467V21.1438C1 28.8914 4.09905 31.9905 11.8467 31.9905H21.1438C28.8914 31.9905 31.9905 28.8914 31.9905 21.1438V13.3962" stroke="#434343" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M27.5586 1.91414L21.9338 7.5389C21.7169 7.75584 21.5 8.17421 21.469 8.48411L21.1591 10.638C21.0506 11.4127 21.5929 11.955 22.3677 11.8466L24.5215 11.5367C24.8159 11.4902 25.2498 11.2888 25.4667 11.0718L31.0915 5.44705C32.0677 4.47085 32.5171 3.35519 31.0915 1.92963C29.6505 0.473079 28.5348 0.937936 27.5586 1.91414Z" stroke="#434343" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M26.7533 2.71973C27.2336 4.4242 28.5662 5.75679 30.2707 6.23714" stroke="#434343" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M2.03809 27.2643L9.67724 22.1353C10.9014 21.3141 12.6678 21.4071 13.7679 22.3523L14.2793 22.8016C15.4879 23.8398 17.4403 23.8398 18.6489 22.8016L25.095 17.2698C26.3036 16.2317 28.256 16.2317 29.4646 17.2698L31.9903 19.4392" stroke="#434343" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                                <div className="absolute inset-0 flex flex-col items-center justify-center">

                                                    <p className="text-gray-500">440 x 440</p>
                                                    <p className="text-gray-500">place an .png image</p>
                                                </div>
                                            </>
                                        )}
                                        {selectedImage0 && (
                                            <img src={selectedImage0} alt="Uploaded" className="w-64 h-64 lg:w-80 lg:h-80 rounded-2xl object-contain" />
                                        )}
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="opacity-0 w-full h-full absolute top-0 left-0 cursor-pointer"
                                            onChange={handleImageUpload0}
                                        />
                                    </div>

                                    <div className="flex justify-between items-center">

                                        {/* image 2  */}
                                        <div
                                        className={`  w-30 h-32 lg:w-[150px] lg:h-[150px]  rounded-2xl bg-[#EFEFEF] border-2 border-gray-300 flex items-center justify-center relative `}
                                       
                                    >
                                        {!selectedImage1 && (
                                            <>
                                                <div className="icon absolute top-3 right-3">

                                                    <svg width="28" height="28" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.8466 13.3963C13.5582 13.3963 14.9457 12.0088 14.9457 10.2973C14.9457 8.58573 13.5582 7.19824 11.8466 7.19824C10.135 7.19824 8.74756 8.58573 8.74756 10.2973C8.74756 12.0088 10.135 13.3963 11.8466 13.3963Z" stroke="#434343" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M18.0448 1H11.8467C4.09905 1 1 4.09905 1 11.8467V21.1438C1 28.8914 4.09905 31.9905 11.8467 31.9905H21.1438C28.8914 31.9905 31.9905 28.8914 31.9905 21.1438V13.3962" stroke="#434343" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M27.5586 1.91414L21.9338 7.5389C21.7169 7.75584 21.5 8.17421 21.469 8.48411L21.1591 10.638C21.0506 11.4127 21.5929 11.955 22.3677 11.8466L24.5215 11.5367C24.8159 11.4902 25.2498 11.2888 25.4667 11.0718L31.0915 5.44705C32.0677 4.47085 32.5171 3.35519 31.0915 1.92963C29.6505 0.473079 28.5348 0.937936 27.5586 1.91414Z" stroke="#434343" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M26.7533 2.71973C27.2336 4.4242 28.5662 5.75679 30.2707 6.23714" stroke="#434343" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M2.03809 27.2643L9.67724 22.1353C10.9014 21.3141 12.6678 21.4071 13.7679 22.3523L14.2793 22.8016C15.4879 23.8398 17.4403 23.8398 18.6489 22.8016L25.095 17.2698C26.3036 16.2317 28.256 16.2317 29.4646 17.2698L31.9903 19.4392" stroke="#434343" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                                <div className="absolute inset-0 flex flex-col items-center justify-center">

                                                    <p className="text-gray-500">440 x 440</p>
                                                    <p className="text-gray-500">place an .png image</p>
                                                </div>
                                            </>
                                        )}
                                        {selectedImage1 && (
                                            <img src={selectedImage1} alt="Uploaded" className="w-30 h-32 lg:w-[150px] lg:h-[150px]  rounded-2xl object-contain" />
                                        )}
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="opacity-0 w-full h-full absolute top-0 left-0 cursor-pointer"
                                            onChange={handleImageUpload1}
                                        />
                                    </div>

                                        {/* image 3  */}
                                        <div
                                        className={`w-30 h-32 lg:w-[150px] lg:h-[150px]  rounded-2xl bg-[#EFEFEF] border-2 border-gray-300 flex items-center justify-center relative `}
                                       
                                    >
                                        {!selectedImage2 && (
                                            <>
                                                <div className="icon absolute top-3 right-3">

                                                    <svg width="28" height="28" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.8466 13.3963C13.5582 13.3963 14.9457 12.0088 14.9457 10.2973C14.9457 8.58573 13.5582 7.19824 11.8466 7.19824C10.135 7.19824 8.74756 8.58573 8.74756 10.2973C8.74756 12.0088 10.135 13.3963 11.8466 13.3963Z" stroke="#434343" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M18.0448 1H11.8467C4.09905 1 1 4.09905 1 11.8467V21.1438C1 28.8914 4.09905 31.9905 11.8467 31.9905H21.1438C28.8914 31.9905 31.9905 28.8914 31.9905 21.1438V13.3962" stroke="#434343" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M27.5586 1.91414L21.9338 7.5389C21.7169 7.75584 21.5 8.17421 21.469 8.48411L21.1591 10.638C21.0506 11.4127 21.5929 11.955 22.3677 11.8466L24.5215 11.5367C24.8159 11.4902 25.2498 11.2888 25.4667 11.0718L31.0915 5.44705C32.0677 4.47085 32.5171 3.35519 31.0915 1.92963C29.6505 0.473079 28.5348 0.937936 27.5586 1.91414Z" stroke="#434343" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M26.7533 2.71973C27.2336 4.4242 28.5662 5.75679 30.2707 6.23714" stroke="#434343" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M2.03809 27.2643L9.67724 22.1353C10.9014 21.3141 12.6678 21.4071 13.7679 22.3523L14.2793 22.8016C15.4879 23.8398 17.4403 23.8398 18.6489 22.8016L25.095 17.2698C26.3036 16.2317 28.256 16.2317 29.4646 17.2698L31.9903 19.4392" stroke="#434343" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                                <div className="absolute inset-0 flex flex-col items-center justify-center">

                                                    <p className="text-gray-500">440 x 440</p>
                                                    <p className="text-gray-500">place an .png image</p>
                                                </div>
                                            </>
                                        )}
                                        {selectedImage2 && (
                                            <img src={selectedImage2} alt="Uploaded" className="w-30 h-32 lg:w-[150px] lg:h-[150px]  rounded-2xl object-contain" />
                                        )}
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="opacity-0 w-full h-full absolute top-0 left-0 cursor-pointer"
                                            onChange={handleImageUpload2}
                                        />
                                    </div>
                                    </div>


                                </div>



                            </div>
                            {/* col-2  Input Fields */}
                            <div className="col flex justify-center md:justify-start items-start">
                                <div className='w-full mt-2'>


                                    {/* subcategory Name */}
                                    <div className='grid grid-cols-1 justify-center gap-6 mb-3'>
                                        <div className=''>
                                            <div className='flex items-center'>
                                                <label className="block my-1 pl-2 text-md font-medium">Select subcategory</label>
                                            </div>
                                            <select
                                                id="sub_category"
                                                className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block p-2.5"
                                                {...register("sub_category", { required: '*Select One' })}
                                            >
                                                {categories.map((category, index) => (
                                                    <option key={index} value={category.category_name}>
                                                        {category.category_name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                            


                                    {/* product name */}
                                    <div className='grid grid-cols-1 justify-center gap-6 mb-3'>
                                        <div className=''>
                                            <div className='flex items-center'>
                                                <label htmlFor="name" className="block my-1 pl-2 text-md font-medium">Product name</label>
                                            </div>
                                            <div>
                                                <input
                                                    autoComplete='off'
                                                    type="text"
                                                    id="name"
                                                    placeholder="Type here"
                                                    className="block input-field w-full p-2 text-gray-900 rounded-lg border border-gray-300 text-base"
                                                    {...register("name", {
                                                        required: "*name is required",
                                                        maxLength: {
                                                            value: 50,
                                                            message: "Max length is 50"
                                                        }
                                                    })}
                                                />
                                                {errors.name && (
                                                    <p className='p-1 text-xs text-red-600'>{errors.name.message}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    {/* product Size */}
                                    <div className='grid grid-cols-1 justify-center gap-6 mb-3'>
                                        <div className=''>
                                            <div className='flex items-center'>
                                                <label htmlFor="size" className="block my-1 pl-2 text-md font-medium">Size</label>
                                            </div>
                                            <div>
                                                <input
                                                    autoComplete='off'
                                                    type="text"
                                                    id="size"
                                                    placeholder="Type here"
                                                    className="block input-field w-full p-2 text-gray-900 rounded-lg border border-gray-300 text-base"
                                                    {...register("size", {
                                                        required: "* size is required",
                                                        maxLength: {
                                                            value: 50,
                                                            message: "Max length is 50"
                                                        }
                                                    })}
                                                />
                                                {errors.size && (
                                                    <p className='p-1 text-xs text-red-600'>{errors.size.message}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Short Description */}
                                    <div className='grid grid-cols-1 justify-center gap-6 mb-3'>
                                        <div className=''>
                                            <div className='flex items-center'>
                                                <label htmlFor="shortdescription" className="block my-1 pl-2 text-md font-medium">Short Description</label>
                                            </div>
                                            <div>
                                                <textarea
                                                    id="shortdescription"
                                                    rows="2"
                                                    className="input-area border border-gray-200 block w-full text-base text-gray-900 rounded-lg p-2 pl-4 bg-gray-50"
                                                    placeholder="shortly About the Product"
                                                    {...register("shortdescription", {
                                                        required: "* Short description is required",
                                                        maxLength: {
                                                            value: 200,
                                                            message: "Max length is 200"
                                                        }
                                                    })}
                                                />
                                                {errors.shortdescription && (
                                                    <p className='p-1 text-xs text-red-600'>{errors.shortdescription.message}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Full Description */}
                                    <div className='grid grid-cols-1 justify-center gap-6 mb-6'>
                                        <div className=''>
                                            <div className='flex items-center'>
                                                <label htmlFor="description" className="block my-1 pl-2 text-md font-medium">Short Description</label>
                                            </div>
                                            <div>
                                                <textarea
                                                    id="description"
                                                    rows="2"
                                                    className="input-area border border-gray-200 block w-full text-base text-gray-900 rounded-lg p-2 pl-4 bg-gray-50"
                                                    placeholder="Deatil about the Product "
                                                    {...register("description", {
                                                        required: "*full description is required",
                                                        maxLength: {
                                                            value: 300,
                                                            message: "Max length is 300"
                                                        }
                                                    })}
                                                />
                                                {errors.description && (
                                                    <p className='p-1 text-xs text-red-600'>{errors.description.message}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* col-3 prices and all  */}
                            <div className="col flex justify-center md:justify-start items-start">
                                <div className='w-full mt-2'>




                                    {/*stock Qunanity  */}
                                    <div className='grid grid-cols-1 justify-center gap-6 mb-4'>
                                        <div className=''>
                                            <div className='flex items-center'>
                                                <label htmlFor="stock" className="block my-1 pl-2 text-md font-medium">Added Stock Quantity</label>
                                            </div>
                                            <div>
                                                <input
                                                    autoComplete='off'
                                                    type="number"
                                                    id="stock"
                                                    placeholder="Type here"
                                                    className="block input-field w-full p-2 text-gray-900 rounded-lg border border-gray-300 text-base"
                                                    {...register("stock", {
                                                        required: "* stock quantity is required",
                                                        maxLength: {
                                                            value: 50,
                                                            message: "Max length is 50"
                                                        }
                                                    })}
                                                />
                                                {errors.name && (
                                                    <p className='p-1 text-xs text-red-600'>{errors.stock.message}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>


                                    {/* Buying Price  */}
                                    <div className='grid grid-cols-1 justify-center gap-6 mb-4'>
                                        <div className=''>
                                            <div className='flex items-center'>
                                                <label htmlFor="buyingPrice" className="block my-1 pl-2 text-md font-medium">Buying Price</label>
                                            </div>
                                            <div>
                                                <input
                                                    autoComplete='off'
                                                    type="text"
                                                    id="buyingPrice"
                                                    placeholder="Type here"
                                                    className="block input-field w-full p-2 text-gray-900 rounded-lg border border-gray-300 text-base"
                                                    {...register("buyingPrice", {
                                                        required: "* Buying Price is required",
                                                        maxLength: {
                                                            value: 50,
                                                            message: "Max length is 50"
                                                        }
                                                    })}
                                                />
                                                {errors.name && (
                                                    <p className='p-1 text-xs text-red-600'>{errors.buyingPrice.message}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* MRP Name */}
                                    <div className='grid grid-cols-1 justify-center gap-6 mb-4'>
                                        <div className=''>
                                            <div className='flex items-center'>
                                                <label htmlFor="MRP" className="block my-1 pl-2 text-md font-medium">MRP <small className='text-[10px]'>&#40;w&#47;offer&#41;</small></label>
                                            </div>
                                            <div>
                                                <input
                                                    autoComplete='off'
                                                    type="text"
                                                    id="MRP"
                                                    placeholder="Type here"
                                                    className="block input-field w-full p-2 text-gray-900 rounded-lg border border-gray-300 text-base"
                                                    {...register("MRP", {
                                                        required: "* MRP is required",
                                                        maxLength: {
                                                            value: 50,
                                                            message: "Max length is 50"
                                                        }
                                                    })}
                                                />
                                                {errors.MRP && (
                                                    <p className='p-1 text-xs text-red-600'>{errors.MRP.message}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Selling Price  */}
                                    <div className='grid grid-cols-1 justify-center gap-6 mb-4'>
                                        <div className=''>
                                            <div className='flex items-center'>
                                                <label htmlFor="sellingPrice" className="block my-1 pl-2 text-md font-medium">Selling Price</label>
                                            </div>
                                            <div>
                                                <input
                                                    autoComplete='off'
                                                    type="number"
                                                    id="sellingPrice"
                                                    placeholder="Type here"
                                                    className="block input-field w-full p-2 text-gray-900 rounded-lg border border-gray-300 text-base"
                                                    {...register("sellingPrice", {
                                                        required: "* product Selling Price is required",
                                                        maxLength: {
                                                            value: 50,
                                                            message: "Max length is 50"
                                                        }
                                                    })}
                                                />
                                                {errors.sellingPrice && (
                                                    <p className='p-1 text-xs text-red-600'>{errors.sellingPrice.message}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>




                                </div>
                            </div>
                        </div>
                        <div className='col md:col-span-2 flex justify-center items-center'>
                            <input type="submit" className='cursor-pointer py-2.5 pr-10 pl-10 bg-root-100 hover:bg-root-200 text-white text-xl rounded-[45px]' value='Save' />
                        </div>
                    </form>
                    :
                    <LoadingIcon />
            }
        </>
    );
};

export default Admin_ProductEdit;
