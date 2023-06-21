import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { BiError} from 'react-icons/bi';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import OtherSignInMethod from '../OtherSignInMethod/OtherSignInMethod';
import LoadingIcon from '../../ErrorPages/LoadingIcon/LoadingIcon';
const SignIn = () => {
    const { loading, setLoading, loginUserByEmailPass } = useContext(AuthContext);

    const [showPass, setShowPass] = useState(false);
    const [errormessage, seterrormessage] = useState('');

    const navigate = useNavigate();
    //pass the previous location
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';





    const handleSubmit = event => {
        event.preventDefault();
        setLoading(true);
        seterrormessage('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        if (!email || !password) {
            toast.error('Provide necessary information');
            return;
        }


        loginUserByEmailPass(email, password)
            .then(result => {
                const user = result.user;

                navigate(from, { replace: true })


            })
            .catch(error => {
                setLoading(false);
                if (error.code === "auth/wrong-password") {
                   
                    seterrormessage("Password Wrong");

                } else if (error.code === "auth/user-not-found") {
                    seterrormessage("No User by this E-mail");
                } else {
    
                    seterrormessage("An error occurred during sign up. Please try again later.");
                }

            })
    }
    return (
        <>
            <div aria-label='Sign-in' className='mt-7 flex flex-col justify-center items-center user-select-none'>
                <div className=' '>
                    <h2 className='text-4xl font-light text-[#000000] '>Login</h2>
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

                        <Link to='/forget-password'>
                            <label className="label text-base hover:underline hover:cursor-pointer" aria-label='forgot passsword'>Forgot your password?</label>
                        </Link>
                    </div>
                    {
                       errormessage && <p className='px-2 text-red-500 flex justify-center items-center'><BiError className='mr-1'/>{errormessage}</p>

                    }
                    <div className="form-control mt-7 mx-auto md:w-40  px-5 md:px-0">
                        <input type="submit" value="Login" className=" p-2 px-10 lg:px-16 cursor-pointer text-base font-normal text-white border-0 bg-root-100 hover:bg-root-200 rounded-2xl" />
                    </div>
                </form>

                <label className="mt-9 label text-base " aria-label='Register '>
                    Don&#8217;t have an account?
                    <Link to='/sign-up'>
                        <span className='px-1 hover:underline  text-root-100 hover:cursor-pointer'> Register</span>
                    </Link>
                </label>

                <div className="inline-flex items-center justify-center w-full relative">
                    <hr className="w-80 md:w-96 h-[0.15rem] font-thin my-8 bg-gray-200 border-0 rounded :bg-gray-700" />
                    <div className="absolute px-3 -translate-x-1/2 bg-white left-1/2 :bg-gray-900 text-xl font-light">or</div>
                </div>

                <OtherSignInMethod />



            </div>
            {
                loading && <LoadingIcon />
            }
        </>
    );
};

export default SignIn;