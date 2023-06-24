import axios from 'axios';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { BiError} from 'react-icons/bi';
import { AdminAuthContext } from '../../../Contexts/AdminAuthProvider/AdminAuthProvider';
const AdminLogin = () => {

    const {loginAdminByEmailPass} = useContext(AdminAuthContext)
    const [showPass, setShowPass] = useState(false);
    const [errormessage, seterrormessage] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        seterrormessage('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        if (!email || !password) {
            toast.error('Provide necessary information');
            return;
        }
       loginAdminByEmailPass(email,password);

    }
    return (
        <>
            <div aria-label='Sign-in' className='mt-7 flex flex-col justify-center items-center user-select-none'>
                <div className=' '>
                    <h2 className='text-4xl font-light text-[#000000] '>Admin</h2>
                </div>


                <form onSubmit={handleSubmit} className='mt-7 w-full md:w-96 px-2 md:px-0'>
                    <div className=" mb-7">
                        <input type="email" placeholder="Email" id='email' name='email' className="block input-field w-full xl:max-w-lg p-2 pl-4 text-gray-900  rounded-lg bg-light-100" required />
                    </div>
                    <div className=" mb-7 relative">
                        <input
                            type={showPass ? 'text' : 'password'}
                            placeholder="Password"
                            id='password'
                            name='password'
                            className="block input-field w-full xl:max-w-lg p-2 pl-4 text-gray-900  rounded-lg bg-light-100"
                            required />

                        <div onClick={() => setShowPass(!showPass)} className='cursor-pointer absolute right-3 top-3'>
                            {
                                showPass ? <BsEyeSlash className='text-2xl' /> : <BsEye className='text-2xl' />
                            }
                        </div>

                     
                    </div>
                    {
                        errormessage && <p className='px-2 text-red-500 flex justify-center items-center'><BiError className='mr-1' />{errormessage}</p>

                    }
                    <div className="form-control mt-7 mx-auto md:w-40  px-5 md:px-0">
                        <input type="submit" value="Login" className=" p-2 px-10 lg:px-16 cursor-pointer text-base font-normal text-white border-0 bg-root-100 hover:bg-root-200 rounded-2xl" />
                    </div>
                </form>

             



            </div>
        </>
    );
};

export default AdminLogin;