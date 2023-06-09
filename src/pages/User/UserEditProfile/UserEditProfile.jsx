import React, { useContext, useEffect, useState } from 'react';
import { MdCall, MdEmail, MdOutlineDriveFileRenameOutline, MdCameraAlt, MdPeopleAlt, MdLocationPin, MdNearMe } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai'
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const UserEditProfile = () => {
  const [imgUpload, setImageUpload] = useState();
  const { user } = useContext(AuthContext);

  const handleImageUpload = (event) => {
    console.log(event.target.files);
    setImageUpload(URL.createObjectURL(event.target.files[0]))
  }

  useEffect(() => {
    setImageUpload(user.imgURL)
  }, [user])

  return (

    <form className='w-full lg:w-[900px] mx-auto px-2 md:px-4'>

      <div className="relative cursor-pointer w-20 mx-auto h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-500 mt-8 mb-4 md:mx-0">
        {
          user?.imgURL ? <img src={imgUpload} alt="" /> : <div><svg className="absolute w-20 h-20 text-gray-400 top-2 left-0  md:mr-8 md:mx-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg></div>
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
          <input type="text" placeholder="Type here" className="input input-bordered w-full md:max-w-xs" />
        </div>

        <div>
          <div className='flex items-center'>
            <MdCall className='text-lg mr-3' />
            <label htmlFor="first_name" className="block my-2 mb-2 text-md font-medium">Phone</label>
          </div>
          <input type="number" placeholder="Type here" className="input input-bordered w-full md:max-w-xs" />
        </div>

        <div>
          <div className='flex items-center'>
            <MdEmail className='text-lg mr-3' />
            <label htmlFor="first_name" className="block my-2 mb-2 text-md font-medium">Email Address</label>
          </div>
          <input type="email" placeholder="Type here" className="input input-bordered w-full md:max-w-xs" />
        </div>

        <div>
          <div className='flex items-center'>
            <MdPeopleAlt className='text-lg mr-3' />
            <label htmlFor="first_name" className="block my-2 mb-2 text-md font-medium">Gender</label>
          </div>
          <div>
            <select className="select select-bordered w-full md:max-w-xs">
              <option disabled selected>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
        </div>

        <div className='my-5'>
          <div className='border border-gray-400 text-light-black-200 rounded-md'>
            <div className='flex items-center bg-gray-200 p-2 rounded-md'>
              <MdLocationPin className='text-[25px] mr-1' />
              <h3>Address</h3>
            </div>

            <label htmlFor='my-modal-4' className='flex rounded-md border border-gray-300 items-center m-2 p-1 justify-center cursor-pointer'>
              <AiOutlinePlus className='text-2xl' />
              <p>New Address</p>
              <input type="checkbox" id="my-modal-4" className="modal-toggle" />
              <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                  <label htmlFor="my-modal-4" className=" btn-lg absolute right-1 cursor-pointer top-3 font-semibold">✕</label>
                  <div className='grid grid-cols-2 gap-2 my-4'>
                    <input type="text" placeholder="Floor No" className="input input-bordered w-full mb-6" />
                    <input type="text" placeholder="Apartment No" className="input input-bordered w-full mb-6" />
                  </div>
                  <input type="text" placeholder="Area" className="input input-bordered w-full mb-6 mx-auto" />
                  <textarea className="textarea textarea-bordered w-full text-base" placeholder="Address"></textarea>
                  {/* <input type="text" placeholder="Address" className="input input-bordered w-full  my- mb-6 mx-auto" />
                <input type="text" placeholder="Road No" className="input input-bordered w-full  my-2 mb-6 mx-auto" /> */}
                  <div className='mb-3 mx-auto w-fit py-4'>
                    <Link className='pt-4 pr-10 pb-4 pl-10 bg-root-100 hover:bg-root-200 text-white rounded-xl'>Add Address</Link>
                  </div>
                </label>
              </label>
            </label>

            <div className='flex rounded-md justify-between items-center m-2 p-1 bg-light-200 text-light-black-200'>
              <div>
                <div className='flex items-center'>
                  <MdNearMe className='text-xl' />
                  <p>Jamtola, Narayanganj</p>
                </div>
                <p className='px-4'>01906913254</p>
              </div>
              <div>
                <p className='cursor-pointer underline text-red-500 mr-1'>delete</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className='text-center md:text-start'>
        <Link className='btn border-0  bg-root-100 hover:bg-root-200 pt-4 pr-8 pb-4 pl-8  text-white rounded-xl' >Submit</Link>
      </div>


    </form>
  );
};

export default UserEditProfile;