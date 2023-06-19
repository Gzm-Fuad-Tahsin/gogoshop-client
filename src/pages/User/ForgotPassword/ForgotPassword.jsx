import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { validateEmail } from '../../../assets/Scripts/utility';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    const [error, setError] = useState(false);
    const handlechange = e => {
        setError(false);
    }
    const handleSubmit = event => {
        setError(false);
        event.preventDefault();
        const email = event.target.email.value;
        if (!email || validateEmail(email)) {
            toast.error('Provide an correct email');
            setError(true);

        }
    }
    return (
        <div>
            <div className='flex flex-col justify-center items-center h-[70vh]'>
                <div className='title'>
                    <h2 className='text-2xl font-light text-[#000000] '>Provide Your E-mail address</h2>
                </div>

                <form onSubmit={handleSubmit} className='mt-4 w-full md:w-96 px-2 md:px-0'>

                    <div className="form-control mb-7">
                        <input
                            onChange={handlechange}
                            type="email"
                            name='email'
                            placeholder="alex@example.com" 
                            className="block input-field w-full xl:max-w-lg p-2 pl-5 text-gray-900  rounded-lg bg-light-100 text-base " 
                            required />
                        <label className="label text-sm text-red-500" >
                            {
                                error && `* Invalid E-mail`
                            }
                        </label>
                    </div>
                    <div className="form-control mx-auto md:w-40  ">
                        <input type="submit" value="Submit" className="h-10 w-full border-0 bg-root-100 hover:bg-root-200 text-base-100 rounded-2xl" />
                    </div>
                </form>

                <div className="inline-flex items-center justify-center w-full relative">
                    <hr className="w-80 md:w-96 h-[0.15rem] font-thin my-8 bg-gray-200 border-0 rounded :bg-gray-700" />
                    <div className="absolute px-3 -translate-x-1/2 bg-white left-1/2 :bg-gray-900 text-xl font-light">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-700 :text-gray-300" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>

                    </div>
                </div>
                <div aria-label="other-sign-in-method" className='w-72 mx-auto'>
                    <Link to='/login'>
                        <button
                            aria-label='sign-in'
                            className="w-full h-16 border-0 text-base-100 bg-root-100 hover:bg-root-200  text-base font-light rounded-2xl flex justify-center items-center">
                            Go Back to Sign in
                        </button>
                    </Link>


                </div>
            </div>

        </div>
    );
};

export default ForgotPassword;