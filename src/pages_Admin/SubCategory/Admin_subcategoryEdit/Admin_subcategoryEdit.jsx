import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import LoadingIcon from '../../../pages/ErrorPages/LoadingIcon/LoadingIcon';
import { useParams } from 'react-router-dom';


const Admin_subcategoryEdit = () => {
    const {subcategory_slug} = useParams();
    console.log(subcategory_slug)


    // get the category names 
    const [categories, setCategories] = useState(null);

    //get all the old subcategory data 
    const [subcategoryData,setSubcategoryData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {

            axios.get(`${import.meta.env.VITE_SERVER_ADDRESS}/admin/subcategory-list/${subcategory_slug}/edit`)
                .then(data => {
                    if (data.status === 200) {

                        const {categories} = data.data;
                        console.log(categories)
                        setCategories(categories);

                    }

                })
        };

        fetchData();
    }, []);

    // ___________________handle image _____________________________
    const [selectedImage, setSelectedImage] = useState(null);
    const [dragging, setDragging] = useState(false);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setSelectedImage(URL.createObjectURL(file));
        setDragging(false);
    };

    const handleDragEnter = (event) => {
        event.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = (event) => {
        event.preventDefault();
        setDragging(false);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        setSelectedImage(URL.createObjectURL(file));
        setDragging(false);
    };

    // _________________ handle data validation _____________________
    const { register, formState: { errors }, handleSubmit } = useForm({ mode: "onChange" });


    const onSubmit = (data) => {
        console.log(data);

    };
    return (
        <>
            {
                categories ?
                    <> <form onSubmit={handleSubmit(onSubmit)} className='max-w-5xl pt-8 lg:pt-10 px-4 lg:px-10 '>

                        <div className='pt-8  grid grid-cols-1 md:grid-cols-2'>
                            {/* image upload  */}
                            <div className="col flex flex-col items-center md:items-start mb-7">
                                <h2 className='text-xl md:text-2xl text-[#292D32] mb-7'>Edit Subcategory</h2>
                                <div
                                    className={`w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl bg-[#EFEFEF] border-2 border-gray-300 flex items-center justify-center relative ${dragging ? 'bg-gray-100' : ''
                                        }`}
                                    onDragEnter={handleDragEnter}
                                    onDragOver={(event) => event.preventDefault()}
                                    onDragLeave={handleDragLeave}
                                    onDrop={handleDrop}
                                >
                                    {!selectedImage && (
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
                                    {selectedImage && (
                                        <img src={selectedImage} alt="Uploaded" className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl object-contain" />
                                    )}
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="opacity-0 w-full h-full absolute top-0 left-0 cursor-pointer"
                                        onChange={handleImageUpload}
                                    />
                                </div>

                            </div>
                            <div className="col flex justify-center md:justify-start items-center">
                                <div className='w-full mt-2'>

                                    {/* category name  */}
                                    <div className='grid grid-cols-1 justify-center gap-6 mb-6 '>
                                        <div className=''>
                                            <div className='flex items-center'>
                                                <label className="block my-1 pl-2 text-md font-medium">Select category</label>
                                            </div>

                                            <select
                                                id="category_name"
                                              
                                                className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block p-2.5 "
                                                // defaultValue={gender}
                                                {...register("category_name", { required: '*Select One' })}>
                                                {
                                                    categories.map((category, _idx) => <option className='text-base' key={_idx} value={category?.category_name}>{category?.category_name}</option>)
                                                }


                                            </select>



                                        </div>
                                    </div>


                                    {/* sub category name  */}
                                    <div className='grid grid-cols-1 justify-center gap-6 mb-6 '>
                                        <div className=''>
                                            <div className='flex items-center'>
                                                <label htmlFor="first_name" className="block my-1 pl-2 text-md font-medium">Subcategory Name</label>
                                            </div>
                                            <div>
                                                <input
                                                    autoComplete='off'
                                                    type="text"
                                                    placeholder="Type here"
                                                    className="block input-field w-full  p-2 text-gray-900  rounded-lg border border-gray-300 text-base  read-only:bg-gray-100 read-only:border-0 read-only:cursor-not-allowed"

                                                    {...register("subcategoryname", {
                                                        required: "*subcategory name required",
                                                        maxLength: {
                                                            value: 50,
                                                            message: "Max length is 50"
                                                        }
                                                    })} />
                                                {errors.subcategoryname && <p className='p-1 text-xs text-red-600'>{errors.subcategoryname.message}</p>}
                                            </div>

                                        </div>
                                    </div>


                                    {/* Short Description  */}
                                    <div className='grid grid-cols-1 justify-center gap-6 mb-6 '>
                                        <div className=''>
                                            <div className='flex items-center'>
                                                <label htmlFor="first_name" className="block my-1 pl-2 text-md font-medium">Short Description</label>
                                            </div>
                                            <div>
                                                <textarea
                                                    rows="3"
                                                    className="input-area border border-gray-200 block   w-full text-base text-gray-900  rounded-lg mx-auto p-2 pl-4  bg-gray-50 "

                                                    placeholder="About the category ............"

                                                    {...register("shortDescription", {
                                                        required: "*short Description required",
                                                        maxLength: {
                                                            value: 200,
                                                            message: "Max length is 200"
                                                        }
                                                    })} />
                                                {errors.shortDescription && <p className='p-1 text-xs text-red-600'>{errors.shortDescription.message}</p>}
                                            </div>
                                        </div>
                                    </div>
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

export default Admin_subcategoryEdit;