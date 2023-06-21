import React from 'react';
import { useForm } from 'react-hook-form';

const AddressUpdateForm = () => {
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm({ mode: "onChange" });


    const onSubmit = (data) => {
        console.log(data);

        // to update  realod dibo jno off hoy
        window.location.reload() 
        

    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            
            <div className='grid grid-cols-2 gap-2 my-4'>
                <div >
                    <input
                        autoComplete='off'
                        type="text"
                        placeholder="Floor No"
                        className="block border border-gray-200 input-field w-full mx-auto p-2 pl-4 text-gray-900  rounded-lg bg-gray-50"
                        {...register("floorNo", {
                            required: "*Floor No required",
                            maxLength: {
                                value: 10,
                                message: "Max length is 10"
                            }
                        })} />
                    {errors.floorNo && <p className='p-1 text-xs text-red-600'>{errors.floorNo.message}</p>}
                </div>
                <div>
                    <input
                        autoComplete='off'
                        type="text"
                        placeholder="Apartment No"
                        className="block border border-gray-200 input-field w-full mx-auto p-2 pl-4 text-gray-900  rounded-lg bg-gray-50"
                        {...register("apartmentNo", {
                            required: "*Apartment No required",
                            maxLength: {
                                value: 25,
                                message: "Max length is 25"
                            }
                        })} />
                    {errors.apartmentNo && <p className='p-1 text-xs text-red-600'>{errors.apartmentNo.message}</p>}
                </div>

            </div>
            <div className='my-4'>
                <input
                    autoComplete='off'
                    type="text"

                    placeholder="Area"
                    className="block border border-gray-200 input-field w-full mx-auto p-2 pl-4 text-gray-900  rounded-lg bg-gray-50"
                    {...register("area", {
                        required: "*Area required",
                        maxLength: {
                            value: 80,
                            message: "Max length is 80"
                        }
                    })} />
                {errors.area && <p className='p-1 text-xs text-red-600'>{errors.area.message}</p>}
            </div>




            <div>
                <textarea
                    rows="3"
                    className="input-area border border-gray-200 block   w-full text-base text-gray-900  rounded-lg mx-auto p-2 pl-4  bg-gray-50 "

                    placeholder="Address"

                    {...register("address", {
                        required: "*Address required",
                        maxLength: {
                            value: 200,
                            message: "Max length is 200"
                        }
                    })} />
                {errors.address && <p className='p-1 text-xs text-red-600'>{errors.address.message}</p>}
            </div>


            <div className='mb-3 mx-auto w-fit py-4'  >
                <input type="submit" htmlFor='address-update-modal' className='cursor-pointer pt-4 pr-10 pb-4 pl-10 bg-root-100 hover:bg-root-200 text-white rounded-xl' value='Add Address' />
            </div>
        </form>
    );
};

export default AddressUpdateForm;