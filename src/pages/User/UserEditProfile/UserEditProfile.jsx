import React, { useContext, useState } from 'react';
import { MdCall, MdEmail, MdOutlineDriveFileRenameOutline, MdCameraAlt } from 'react-icons/md';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
const UserEditProfile = () => {
    const [imgUpload, setImageUpload] = useState();
    const {user} = useContext(AuthContext);
    const {imgURL} = user;

    const handleImageUpload = (event) =>{
        console.log(event.target.files);
        setImageUpload(URL.createObjectURL(event.target.files[0]))
    }
    return (
        <form className='w-full lg:w-[900px] mx-auto px-2 md:px-4'>

            <div className="relative cursor-pointer w-20 mx-auto h-20 overflow-hidden bg-gray-500 rounded-full  mt-8 mb-4 md:mx-0">
                {
                    user && imgURL ? <img src={imgUpload} alt="" /> : <div><svg className="absolute w-20 h-20 text-gray-400 top-2 left-0  md:mr-8 md:mx-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg></div>
                }
            </div>
            <div>
                <div className='relative'>
                    <label htmlFor="image-upload" className='absolute -top-11 left-[51%] bg-gray-400 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer md:-top-12 md:left-12'>
                        <MdCameraAlt size={25} className='text-white top-8'/>
                    </label>
                </div>
                <input
                    type="file"
                    id="image-upload"
                    onChange={handleImageUpload}
                    className='hidden'
                />
                
            </div>
            <div className='grid justify-center gap-6 mb-6 md:grid-cols-2 md:justify-start'>
                <div>
                    <div className='flex items-center'>
                        <MdOutlineDriveFileRenameOutline className='text-lg mr-3' />
                        <label htmlFor="first_name" className="block my-2 mb-2 text-md font-medium">Name</label>
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>

                <div>
                    <div className='flex items-center'>
                        <MdCall className='text-lg mr-3' />
                        <label htmlFor="first_name" className="block my-2 mb-2 text-md font-medium">Phone</label>
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>

               <div>
                  <div className='flex items-center'>
                      <MdEmail className='text-lg mr-3' />
                      <label htmlFor="first_name" className="block my-2 mb-2 text-md font-medium">Email Address</label>
                 </div>
                 <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
              </div>

            </div>
            <div className='text-center md:text-start'>
                <Link className='btn border-0 hover:bg-[#4ABA6F] mt-5 pt-4 pr-8 pb-4 pl-8 bg-[#4ABA6F] text-white rounded-xl' >Submit</Link>
            </div>
        </form>
    );
};

export default UserEditProfile;