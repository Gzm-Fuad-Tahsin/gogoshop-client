import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { BiError} from 'react-icons/bi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import LoadingIcon from '../../ErrorPages/LoadingIcon/LoadingIcon';
import OtherSignInMethod from '../OtherSignInMethod/OtherSignInMethod';


const SignUp = () => {
    const { loading, setLoading, createUserByEmailPass } = useContext(AuthContext);


    const [showPass, setShowPass] = useState(false);
    const [passSame, setPassSame] = useState(true);

    const [errormessage, seterrormessage] = useState('');

    const navigate = useNavigate();
    //pass the previous location
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';




    const handleSubmit = event => {
        event.preventDefault();

        setLoading(true);
        seterrormessage('');
        setPassSame(true);


        // get data 
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmpassword = form.confirmpassword.value;


        // validation 
        if (!email || !password) {
            toast.error('Provide necessary information');
            return;
        }
        if (password !== confirmpassword) {
            setPassSame(false);
            toast.error("password didn't match");
            return;
        }


        createUserByEmailPass(email, password)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true })
            })
            .catch(error => {
                setLoading(false);
                if (error.code === "auth/email-already-in-use") {
                  
                    seterrormessage("Email is already in use. Use  different email.");

                } else {
                   
                    seterrormessage("An error occurred during sign up. Please try again later.");
                }

            })
    }
    return (
        <>

            <div aria-label='Sign-in' className='mt-7 flex flex-col justify-center items-center user-select-none'>
                <div className='title'>
                    <h2 className='text-4xl font-light text-[#000000] '>Sign Up</h2>
                </div>


                <form onSubmit={handleSubmit} className='mt-7 w-full md:w-96 px-2 md:px-0'>
                    <div className="form-control mb-7">
                        <input type="email" placeholder="Email" id='email' name='email' className="block input-field w-full xl:max-w-lg p-2 pl-4 text-gray-900  rounded-lg bg-light-100" required />
                    </div>
                    <div className="form-control mb-7 relative">
                        <input type={showPass ? 'text' : 'password'} placeholder="Password" id='password' name='password' className="block input-field w-full xl:max-w-lg p-2 pl-4 text-gray-900  rounded-lg bg-light-100" required />

                        <div onClick={() => setShowPass(!showPass)} className='cursor-pointer  absolute right-3 top-3'>
                            {
                                showPass ? <BsEyeSlash className='text-2xl' /> : <BsEye className='text-2xl' />
                            }
                        </div>
                    </div>

                    <div className="form-control  relative">
                        <input onChange={() => setPassSame(true)} type={showPass ? 'text' : 'password'} placeholder="Confirm Password" id='confirmpassword' name='confirmpassword' className="block input-field w-full xl:max-w-lg p-2 pl-4 text-gray-900  rounded-lg bg-light-100" required />
                        <label className="label text-sm text-red-500" aria-label='forgot passsword'>
                            {
                                !passSame && `* password didn't match`
                            }
                        </label>
                    </div>


                    {
                        errormessage && <p className='px-2 text-red-500 flex justify-center items-center'><BiError className='mr-1' />{errormessage}</p>

                    }
                    <div className="form-control mt-7 mx-auto md:w-40 px-5 md:px-0 ">
                        <input type="submit" value="Sign Up" className=" p-2 px-10 lg:px-16 cursor-pointer text-base font-normal text-white border-0 bg-root-100 hover:bg-root-200 rounded-2xl" />
                    </div>
                </form>

                <label className="mt-9 label text-base " aria-label='Register '>
                    Already have an account?
                    <Link to='/login'>  <span className='mx-1 hover:underline  text-root-100 hover:cursor-pointer' > Sign in</span></Link>
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

export default SignUp;