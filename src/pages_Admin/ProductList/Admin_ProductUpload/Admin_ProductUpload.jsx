import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import LoadingIcon from '../../../pages/ErrorPages/LoadingIcon/LoadingIcon';

const Admin_ProductUpload = () => {
  // get the category names
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      axios.get(`${import.meta.env.VITE_SERVER_ADDRESS}/admin/category-list`)
        .then(data => {
          if (data.status === 200) {
            setCategories(data.data);
          }
        });
    };

    fetchData();
  }, []);

  // handle image
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const images = files.map(file => URL.createObjectURL(file));
    setSelectedImages(prevImages => [...prevImages, ...images]);
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
          <form onSubmit={handleSubmit(onSubmit)} className='max-w-[2500px] pt-8 lg:pt-10 px-4 lg:px-10'>
            <div className='pt-8  grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
              {/* Image Upload */}
              <div className="col flex flex-col items-center md:items-start mb-7">
                <h2 className='text-xl md:text-2xl text-[#292D32] mb-7'>Add New Subcategory</h2>
                <div className={`w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-2xl bg-[#EFEFEF] border-2 border-gray-300 flex items-center justify-center relative`}>

                  {selectedImages.length === 0 && (
                    <>
                      <div className="icon absolute top-3 right-3">
                        <svg width="28" height="28" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* SVG paths for image icon */}
                        </svg>
                      </div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <p className="text-gray-500">440 x 440</p>
                        <p className="text-gray-500">Place a .png image</p>
                      </div>
                    </>
                  )}
                  {selectedImages.length > 0 && (
                    <div className="image-preview-container">
                      {selectedImages.map((image, index) => (
                        <img key={index} src={image} alt={`Uploaded Image ${index + 1}`} className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl object-contain" />
                      ))}
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    className="opacity-0 w-full h-full absolute top-0 left-0 cursor-pointer"
                    onChange={handleImageUpload}
                  />
                </div>
              </div>
              {/* Other Input Fields */}
              <div className="col flex justify-center md:justify-start items-center">
                <div className='w-full mt-2'>
                  {/* Category Name */}
                  <div className='grid grid-cols-1 justify-center gap-6 mb-6'>
                    <div className=''>
                      <div className='flex items-center'>
                        <label className="block my-1 pl-2 text-md font-medium">Select Category</label>
                      </div>
                      <select
                        id="category_name"
                        className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block p-2.5"
                        {...register("category_name", { required: '*Select One' })}
                      >
                        {categories.map((category, index) => (
                          <option key={index} value={category.category_name}>
                            {category.category_name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Subcategory Name */}
                  <div className='grid grid-cols-1 justify-center gap-6 mb-6'>
                    <div className=''>
                      <div className='flex items-center'>
                        <label htmlFor="subcategory_name" className="block my-1 pl-2 text-md font-medium">Subcategory Name</label>
                      </div>
                      <div>
                        <input
                          autoComplete='off'
                          type="text"
                          id="subcategory_name"
                          placeholder="Type here"
                          className="block input-field w-full p-2 text-gray-900 rounded-lg border border-gray-300 text-base"
                          {...register("subcategory_name", {
                            required: "* Subcategory name is required",
                            maxLength: {
                              value: 50,
                              message: "Max length is 50"
                            }
                          })}
                        />
                        {errors.subcategory_name && (
                          <p className='p-1 text-xs text-red-600'>{errors.subcategory_name.message}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Short Description */}
                  <div className='grid grid-cols-1 justify-center gap-6 mb-6'>
                    <div className=''>
                      <div className='flex items-center'>
                        <label htmlFor="short_description" className="block my-1 pl-2 text-md font-medium">Short Description</label>
                      </div>
                      <div>
                        <textarea
                          id="short_description"
                          rows="3"
                          className="input-area border border-gray-200 block w-full text-base text-gray-900 rounded-lg p-2 pl-4 bg-gray-50"
                          placeholder="About the category ............"
                          {...register("short_description", {
                            required: "* Short description is required",
                            maxLength: {
                              value: 200,
                              message: "Max length is 200"
                            }
                          })}
                        />
                        {errors.short_description && (
                          <p className='p-1 text-xs text-red-600'>{errors.short_description.message}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col md:col-span-2 flex justify-center items-center'>
                <input type="submit" className='cursor-pointer py-2.5 pr-10 pl-10 bg-root-100 hover:bg-root-200 text-white text-xl rounded-[45px]' value='Save' />
              </div>
            </div>
          </form>
          :
          <LoadingIcon />
      }
    </>
  );
};

export default Admin_ProductUpload;
