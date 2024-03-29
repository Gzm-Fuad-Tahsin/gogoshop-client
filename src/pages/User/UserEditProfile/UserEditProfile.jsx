import React, { useContext, useEffect, useState } from 'react';
import { MdCall, MdEmail, MdOutlineDriveFileRenameOutline, MdCameraAlt, MdPeopleAlt, MdLocationPin, MdNearMe } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsXLg } from 'react-icons/bs'
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import AddressUpdateForm from './AddressUpdateForm/AddressUpdateForm';
import { useForm } from 'react-hook-form';
import { validateEmail, validateMobileNumber } from '../../../assets/Scripts/utility';

import ScrollToTop from '../../../components/ScrollToTop/ScrollTotop';

const UserEditProfile = () => {
  const [imgUpload, setImageUpload] = useState();

  const { register, formState: { errors }, handleSubmit } = useForm({ mode: "onChange" });

  const { user } = useContext(AuthContext);
  const { name, phone, email, address, imgURL, gender } = user;







  const handleImageUpload = (event) => {
    console.log(event.target.files);
    setImageUpload(URL.createObjectURL(event.target.files[0]))
  }

  useEffect(() => {
    setImageUpload(imgURL)
  }, [user])





  const onSubmit = (data) => {
    console.log(data);

  };

  return (
    <>
    <ScrollToTop/>
      <div className='w-full lg:w-[900px] mx-auto px-2 md:px-4'>
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="relative cursor-pointer w-20 mx-auto h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-500 mt-8 mb-4 md:mx-0">
            {
              imgURL ? <img src={imgUpload} alt="" /> : <div><svg className="absolute w-20 h-20 text-gray-400 top-2 left-0  md:mr-8 md:mx-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg></div>
            }
          </div>
          <div>
            <div className='relative'>
              <label htmlFor="image-upload" className='absolute -top-12 left-[52%] bg-gray-400 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer md:left-12'>
                <MdCameraAlt size={25} className='text-white top-8' />
              </label>
            </div>
            <input
              type="file"
              id="image-upload"
              accept="image/*"
              name='image'
              onChange={handleImageUpload}
              className='hidden'

            />

          </div>
          <div className='grid grid-cols-1 justify-center gap-6 mb-6 md:grid-cols-2 md:justify-start'>
            <div className=''>
              <div className='flex items-center'>
                <MdOutlineDriveFileRenameOutline className='text-lg mr-3' />
                <label htmlFor="first_name" className="block my-2 mb-2 text-md font-medium">Name</label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="block input-field w-full md:max-w-xs p-2 text-gray-900  rounded-lg border border-gray-300 text-base  read-only:bg-gray-100 read-only:border-0 read-only:cursor-not-allowed"
                  defaultValue={name}
                  {...register("name", {
                    required: "*Name required",
                    maxLength: {
                      value: 40,
                      message: "Max length is 40"
                    }
                  })} />
                {errors.name && <p className='p-1 text-xs text-red-600'>{errors.name.message}</p>}
              </div>
            </div>



            {/* phone  */}
            <div>
              <div className='flex items-center'>
                <MdCall className='text-lg mr-3' />
                <label htmlFor="first_name" className="block my-2 mb-2 text-md font-medium">Phone</label>
              </div>


              {
                phone ?
                  <>
                    <div>

                      <input
                        type="tel"
                        name='phone'
                        placeholder="Type here"
                        className="block input-field w-full md:max-w-xs p-2 text-gray-900  rounded-lg border border-gray-300 text-base  read-only:bg-gray-100 read-only:border-0 read-only:cursor-not-allowed"
                        readOnly
                        defaultValue={phone}
                      />

                    </div>
                  </>
                  :
                  <>
                    <div>
                      <input
                        type="tel"
                        placeholder="Type here"
                        className="block input-field w-full md:max-w-xs p-2 text-gray-900  rounded-lg border border-gray-300 text-base  read-only:bg-gray-100 read-only:border-0 read-only:cursor-not-allowed"
                        {...register("phone", {
                          required: "*Phone No required",
                          validate: {
                            notPhone: (value) => validateMobileNumber(value)
                          },
                        })} />
                      {errors.phone && errors.phone.type === "notPhone" && <p className='p-1 text-xs text-red-600'>*Invalid</p>}
                      {errors.phone && <p className='p-1 text-xs text-red-600'>{errors.phone.message}</p>}
                    </div>
                  </>
              }



            </div>


            {/* email  */}
            <div>
              <div className='flex items-center'>
                <MdEmail className='text-lg mr-3' />
                <label htmlFor="first_name" className="block my-2 mb-2 text-md font-medium">Email Address</label>
              </div>

              {
                email ?
                  <>
                    <div>
                      <input
                        type="email"
                        placeholder="Type here"
                        className="block input-field w-full md:max-w-xs p-2 text-gray-900  rounded-lg border border-gray-300 text-base  read-only:bg-gray-100 read-only:border-0 read-only:cursor-not-allowed"
                        readOnly
                        defaultValue={email}
                      />

                    </div>
                  </>
                  :
                  <>
                    <div>
                      <input
                        type="email"
                        placeholder="Type here"
                        className="block input-field w-full md:max-w-xs p-2 text-gray-900  rounded-lg border border-gray-300 text-base  read-only:bg-gray-100 read-only:border-0 read-only:cursor-not-allowed"
                        {...register("email", {
                          validate: {
                            notemail: (value) => validateEmail(value)
                          },
                        })} />
                      {errors.email && errors.email.type === "notemail" && <p className='p-1 text-xs text-red-600'>*Invalid</p>}
                      {errors.email && <p className='p-1 text-xs text-red-600'>{errors.email.message}</p>}
                    </div>
                  </>
              }

            </div>


            {/* gender  */}
            <div>
              <div className='flex items-center'>
                <MdPeopleAlt className='text-lg mr-3' />
                <label htmlFor="gender" className="block my-2 mb-2 text-md font-medium">Gender</label>
              </div>
              <div>

                <select
                  id="gender"
                  name='gender'
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full md:max-w-xs p-2.5 "
                  defaultValue={gender}
                  {...register("gender", { required: '*Select One' })}
                >

                  <option value='Male'>Male</option>
                  <option value='Female' >Female</option>
                  <option value='Others'>Others</option>
                </select>
              </div>
            </div>

          </div>
          <div className='text-center md:text-start'>
            <input type='submit' value='Save' className='btn border-0  bg-root-100 hover:bg-root-200 pt-4 pr-8 pb-4 pl-8  text-white rounded-xl' />
          </div>


        </form>


        {/* address book  */}
        <div className='my-5 max-w-[500px]'>
          <div className='border border-gray-400 text-light-black-200 rounded-md'>


            <div className='flex items-center bg-gray-200 p-2 rounded-t-md'>
              <MdLocationPin className='text-[25px] mr-1' />
              <h3>Address</h3>
            </div>




            {/* add address  */}
            <div>
              {/* modal trigger  */}
              <label htmlFor='address-update-modal' className=' flex rounded-md border border-gray-300 items-center m-2 p-1 justify-center cursor-pointer '>
                <AiOutlinePlus className='text-2xl mr-3' />
                <p>Change Address</p>
              </label>

              {/* hidden toggle  */}
              <input type="checkbox" id="address-update-modal" className="peer modal-toggle" />


              {/* form address change  modal */}
              <label htmlFor="address-update-modal" className="cursor-pointer modal  bg-gray-700/50 m-0 p-0" >

                <label className=' modal-box px-4 md:px-6  py-8 scale-90 rounded-3xl bg-white transition shadow-2xl '>

                  {/* toggle cross  */}
                  <label htmlFor='address-update-modal' className=" btn-lg absolute right-1 cursor-pointer top-3 font-semibold"><BsXLg /></label>
                  {/* modal  */}
                  <AddressUpdateForm />
                </label>
              </label>



            </div>





            {/* existed address show bar  */}
            {
              address && <>
                <div className='flex rounded-md justify-between items-center m-2 p-1 bg-light-200 text-light-black-200'>
                  <div className='flex  justify-between items-start gap-1'>
                    <MdNearMe className='text-xl pt-1' />
                    <div className="flex flex-col items-start">
                      <p>{address}</p>
                      <p>{phone}</p>
                    </div>
                  </div>
                </div>
              </>
            }

          </div>
        </div>


      </div>
    </>
  );
};

export default UserEditProfile;