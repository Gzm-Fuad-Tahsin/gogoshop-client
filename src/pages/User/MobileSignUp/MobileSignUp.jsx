import React, { useState } from 'react';
import { validateMobileNumber } from '../../../assets/Scripts/utility';
import { toast } from 'react-hot-toast';

const MobileSignUp = ({ setShowUserPage, handlePageLoad }) => {


    const [submitted, setSubmitted] = useState(false);

    const [number, setNumber] = useState('');
    const [numberCorrect, setNumberCorrect] = useState(true);


    const handleInputChange = (e) => {
        setNumberCorrect(true);

    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        setNumberCorrect(true);

        let numberBeforeCrop = e.target.phone.value;
        console.log(numberBeforeCrop)

        //validation
        const isValid = await validateMobileNumber(numberBeforeCrop);
        console.log(isValid)

        if (isValid) {

            if (numberBeforeCrop.startsWith('+88')) {
                let total = numberBeforeCrop
                numberBeforeCrop = total.slice(3);// Remove the "+88" prefix
            }




            setSubmitted(true);
            setNumber(numberBeforeCrop);
            e.target.phone.value = '';

        } else {
            setNumberCorrect(false)
            toast.error('Invalid mobile number');

        }
    };

    const handleOTP = event => {
        event.preventDefault();

        const otp = event.target.otp.value;
        if (otp.length !== 4){
            toast.error('Wrong OTP')
        }
            
    }
    return (
        <>
            {
                submitted ?
                    <div className='flex flex-col justify-center items-center h-[70vh]'>
                        <div className='title'>
                            <h2 className='text-xl font-light text-[#000000] '>OTP Sent to <span className='font-semibold'>{number}</span></h2>
                        </div>

                        <form onSubmit={handleOTP} className='mt-7 w-full md:w-96 px-2 md:px-0'>

                            <div className="form-control mb-7">
                                <input
                                    type="number"
                                    name='otp'
                                    placeholder="Enter OTP" className="input bg-light-100" required />
                                <label className="label text-sm text-root-100 mx-auto" aria-label='forgot passsword'>
                                   Provide the OTP Sent to your phone
                                </label>
                            </div>

                            <div className="form-control mx-auto md:w-40  ">
                                <input type="submit" value="Enter" className="btn border-0 bg-root-100 hover:bg-root-200 text-base-100 rounded-2xl" />
                            </div>
                        </form>

                    </div>


                    :
                    <div className='flex flex-col justify-center items-center h-[70vh]'>
                        <div className='title'>
                            <h2 className='text-4xl font-light text-[#000000] '>Use Phone Number</h2>
                        </div>

                        <form onSubmit={handleSubmit} className='mt-7 w-full md:w-96 px-2 md:px-0'>

                            <div className="form-control mb-7">
                                <input
                                    type="text"

                                    onChange={handleInputChange}
                                    name='phone'
                                    placeholder="Enter mobile number" className="input bg-light-100" required />
                                <label className="label text-sm text-red-500" >
                                    {
                                        !numberCorrect && `* Invalid mobile number`
                                    }
                                </label>
                            </div>
                            <div className="form-control mx-auto md:w-40  ">
                                <input type="submit" value="Get OTP" className="h-10 w-full border-0 bg-root-100 hover:bg-root-200 text-base-100 rounded-2xl" />
                            </div>
                        </form>

                    </div>

            }
             <div className="inline-flex items-center justify-center w-full">
                <hr className="w-80 md:w-96 h-[0.15rem] font-thin my-8 bg-gray-200 border-0 rounded :bg-gray-700" />
                <div className="absolute px-3 -translate-x-1/2 bg-white left-1/2 :bg-gray-900 text-xl font-light">or</div>
            </div>

            <div aria-label="other-sign-in-method" className='w-72 mx-auto'>

                <button
                onClick={()=>{handlePageLoad('sign-in')}} 
                aria-label='sign-in'
                 className="w-full h-16 border-0 text-base-100 bg-root-100 hover:bg-root-200  text-base font-light rounded-2xl flex justify-center items-center">
                    Sign in with E-mail
                </button>
               

            </div>
        </>

    );
};

export default MobileSignUp;