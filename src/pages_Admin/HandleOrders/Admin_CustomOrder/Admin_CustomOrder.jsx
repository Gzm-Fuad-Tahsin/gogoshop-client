import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import LoadingIcon from '../../../pages/ErrorPages/LoadingIcon/LoadingIcon';

export async function loader() {
    return {};
}

const Admin_CustomOrder = () => {
    const { register, formState: { errors }, handleSubmit } = useForm({ mode: "onChange" });
    const [products, setProducts] = useState(null);
    useEffect(() => {
        const fetchData = async () => {

            axios.get(`${import.meta.env.VITE_SERVER_ADDRESS}/admin/products-list`)
                .then(data => {
                    if (data.status === 200) {

                        setProducts(data.data);
                        console.log(data.data)

                    }


                })
        };

        fetchData();
    }, []);
    return (
        <>
        {
            products
             ? 
             <>
                        <div className='p-7 max-w-[1300px]:'>
                            <p>Place Order</p>
                            <div>
                                <div>

                                    <select
                                        id="category_name"
                                        className="bg-gray-50 border w-full max-w-md border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block p-2.5 "
                                        // defaultValue={gender}
                                        {...register("category_name", { required: '*Select One' })}>
                                        {
                                            products.map((product, _idx) => <option className='text-base' key={_idx} value={product?._id}>{product?.name}</option>)
                                        }


                                    </select>
                                </div>
                                <div className='mt-20'>
                                    <p>Name</p>
                                    <input type="text" className="block input-field px-4 w-full md:max-w-md p-2 text-gray-900  rounded-lg border border-gray-300 text-base  read-only:bg-gray-100 read-only:border-0 read-only:cursor-not-allowed" name="name"></input>
                                </div>
                                <div className='mt-6'>
                                    <p>Phone</p>
                                    <input type="text" className="block input-field px-4 w-full md:max-w-md p-2 text-gray-900  rounded-lg border border-gray-300 text-base  read-only:bg-gray-100 read-only:border-0 read-only:cursor-not-allowed" name="name"></input>
                                </div>
                                <div className='mt-6'>
                                    <p>Address</p>
                                    <textarea rows="4" className="input-area border border-gray-200 block w-full max-w-sm text-base text-gray-900 mt-2 rounded-lg p-2 pl-4  bg-gray-50 " name="address"></textarea>
                                </div>
                                <div className='flex items-center mt-8'>
                                    <button className='bg-gray-500 mr-5 pt-2 pb-2 pr-4 pl-4 rounded-xl flex items-center text-white btn'>
                                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.5 21C4.70791 21 0 16.2921 0 10.5C0 4.70791 4.70791 0 10.5 0C16.2921 0 21 4.70791 21 10.5C21 16.2921 16.2921 21 10.5 21ZM10.5 1.46512C5.5186 1.46512 1.46512 5.5186 1.46512 10.5C1.46512 15.4814 5.5186 19.5349 10.5 19.5349C15.4814 19.5349 19.5349 15.4814 19.5349 10.5C19.5349 5.5186 15.4814 1.46512 10.5 1.46512Z" fill="white" />
                                            <path d="M7.73499 13.9969C7.54941 13.9969 7.36384 13.9285 7.21732 13.782C6.93407 13.4988 6.93407 13.0299 7.21732 12.7467L12.7457 7.2183C13.029 6.93505 13.4978 6.93505 13.7811 7.2183C14.0643 7.50156 14.0643 7.97039 13.7811 8.25365L8.25266 13.782C8.11592 13.9285 7.92057 13.9969 7.73499 13.9969Z" fill="white" />
                                            <path d="M13.2634 13.9969C13.0778 13.9969 12.8922 13.9285 12.7457 13.782L7.21732 8.25365C6.93407 7.97039 6.93407 7.50156 7.21732 7.2183C7.50057 6.93505 7.96941 6.93505 8.25266 7.2183L13.7811 12.7467C14.0643 13.0299 14.0643 13.4988 13.7811 13.782C13.6346 13.9285 13.449 13.9969 13.2634 13.9969Z" fill="white" />
                                        </svg>
                                        <span className='ml-2'>Cancel</span>
                                    </button>

                                    <button className='mr-5 bg-root-200 pt-2 pb-2 pr-4 pl-4 rounded-xl flex items-center text-white btn'>
                                        <svg width="21" height="21" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0.235305 0.358982C-0.2091 0.889066 -0.046399 1.30285 0.915298 2.08716L1.77734 2.79021L2.65993 6.94012C3.14544 9.22262 3.71489 11.9088 3.92544 12.9095C4.35793 14.9643 4.78938 15.6858 5.91637 16.238C6.54195 16.5448 7.13887 16.5806 11.6733 16.5843C16.3577 16.5881 16.7811 16.5614 17.3944 16.2239C18.5544 15.5853 18.8822 14.9684 19.4504 12.3537C20.9325 5.53439 21.0835 4.71019 20.9703 4.05895C20.8317 3.26103 20.2627 2.31884 19.5991 1.78782C19.134 1.41561 18.8754 1.39548 13.9258 1.34348C8.4277 1.28551 8.25515 1.3103 8.25515 2.15575C8.25515 3.09962 8.62857 3.16858 13.7421 3.16858H18.4613L18.8851 3.62616C19.1183 3.87778 19.3091 4.24459 19.3091 4.4416C19.3091 4.63843 18.8782 6.84395 18.3516 9.34265C17.5289 13.246 17.3331 13.9449 16.9603 14.3052C16.5322 14.719 16.4619 14.7246 11.6884 14.7246C8.72132 14.7246 6.72296 14.6508 6.52054 14.5339C6.33901 14.429 6.1105 14.182 6.01257 13.9848C5.91481 13.7876 5.29061 11.0479 4.62564 7.89648C3.9605 4.74504 3.29951 1.9744 3.15684 1.73936C2.84111 1.21934 1.1989 0 0.814085 0C0.661402 0 0.400942 0.161598 0.235305 0.358982ZM12.2297 8.1056L10.4245 10.0604L9.80754 9.41031C9.09283 8.65731 8.37398 8.54492 8.07898 9.14005C7.97534 9.34899 7.93579 9.67386 7.99123 9.86211C8.13805 10.3613 10.0775 12.3015 10.4297 12.3015C10.7673 12.3015 15.1085 7.75147 15.2589 7.23983C15.4164 6.70434 15.0342 6.15077 14.507 6.15077C14.1376 6.15077 13.6428 6.57555 12.2297 8.1056ZM7.26547 18.356C6.16214 18.8734 5.67974 20.5777 6.28115 21.8328C6.67546 22.6557 7.86394 23.1899 8.73634 22.9364C10.7421 22.3536 11.0902 19.4672 9.28075 18.4201C8.58383 18.0167 8.02612 17.999 7.26547 18.356ZM13.9549 18.4887C12.6681 19.4279 12.4247 20.959 13.3699 22.1711C14.0202 23.005 14.9661 23.2238 15.9309 22.7633C16.8223 22.3377 17.2811 21.5452 17.2671 20.455C17.2438 18.6296 15.3237 17.4896 13.9549 18.4887ZM8.66553 20.3592C8.90595 20.7712 8.45775 21.3203 8.02681 21.1419C7.73837 21.0224 7.62732 20.3104 7.85807 20.0612C8.04927 19.8549 8.45965 20.0064 8.66553 20.3592ZM15.5029 20.3033C15.6382 20.5762 15.614 20.7358 15.4026 20.9639C15.0853 21.3063 14.8349 21.2664 14.5817 20.8332C14.458 20.6215 14.4732 20.4474 14.6336 20.2387C14.9397 19.8409 15.2864 19.8666 15.5029 20.3033Z" fill="white" />
                                        </svg>

                                        <span className='ml-2'>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
             
             </>
              : 
            <><LoadingIcon/></>
        }
        </>
    );
};

export default Admin_CustomOrder;