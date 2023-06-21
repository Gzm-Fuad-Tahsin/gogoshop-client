import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'
import phoneSvg from '../../../assets/icons/phone.svg'
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
const OtherSignInMethod = () => {
    const {signInbyGoogle} = useContext(AuthContext);


    return (
        <>
            <div aria-label="other-sign-in-method" className='w-72 '>

                <Link to='/auth-phone'>
                    <button aria-label='sign-in-with-phone' className="w-full h-16 border-0 bg-light-100 hover:bg-light-200 text-[#535553] text-base font-light rounded-2xl flex justify-center items-center">
                        <div className="mr-5 ">
                            <img src={phoneSvg} alt="phone icon" className='w-6' />
                        </div>
                        <p >Sign in with Phone</p>
                    </button>
                </Link>
                <button
                    onClick={signInbyGoogle}
                    aria-label='sign-in-with-gmail'
                    className="mt-3 w-full h-16 border-0 bg-light-100 hover:bg-light-200 text-[#535553] text-base font-light rounded-2xl flex justify-center items-center">
                    <div className="mr-5 ">
                        <FcGoogle alt="google icon" className='text-2xl ' />
                    </div>
                    <p>Sign in with Google</p>
                </button>

            </div>

        </>
    );
};

export default OtherSignInMethod;