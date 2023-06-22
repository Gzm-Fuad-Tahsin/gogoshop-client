import React from 'react';
import { useLoaderData } from 'react-router';
import { fetchJson } from '../../../assets/Scripts/utility';
export async function loader() {
    return await fetchJson(`${import.meta.env.VITE_SERVER_ADDRESS}/footer`);
}

const Upload_footerData = () => {
    const footer = useLoaderData()
    const {companyInfo, phone, social} = footer;
    return (
        <form className='w-full max-w-[1350px] p-7'>
            <div className='md:w-3/4'>
                <p>Footer</p>
                <div className='mt-5'>
                    <p>About Us</p>
                    <textarea rows="6" defaultValue={companyInfo.aboutUs} class="input-area border border-gray-200 block w-full text-base text-gray-900 mt-2 rounded-lg mx-auto p-2 pl-4  bg-gray-50 " name="address"></textarea>
                </div>
                <div className='mt-5'>
                    <p>Contact Information</p>
                   <div className='flex items-center mt-5'>
                        <p>Phone</p>
                        <input type="text" defaultValue={phone.number1} placeholder="+88" class="block input-field px-4 w-full md:max-w-md ml-4 p-2 text-gray-900  rounded-lg border border-gray-300 text-base  read-only:bg-gray-100 read-only:border-0 read-only:cursor-not-allowed" name="name"></input>
                   </div>

                    <div className='flex items-center mt-5'>
                        <p>Facebook Link</p>
                        <input type="url" defaultValue={social.facebook} placeholder="https://" class="block input-field px-4 w-full md:max-w-md ml-4 p-2 text-gray-900  rounded-lg border border-gray-300 text-base  read-only:bg-gray-100 read-only:border-0 read-only:cursor-not-allowed" name="name"></input>
                    </div>
                    <div className='flex items-center mt-5'>
                        <p>Instagram Link</p>
                        <input type="url" defaultValue={social.instagram} placeholder="https://" class="block input-field px-4 w-full md:max-w-md ml-4 p-2 text-gray-900  rounded-lg border border-gray-300 text-base  read-only:bg-gray-100 read-only:border-0 read-only:cursor-not-allowed" name="name"></input>
                    </div>

                    <div className='mt-5'>
                        <p>Address</p>
                        <textarea rows="3" defaultValue={companyInfo.address} class="input-area border border-gray-200 block w-full text-base text-gray-900 mt-2 rounded-lg mx-auto p-2 pl-4  bg-gray-50 " name="address"></textarea>
                    </div>
                    <div className='mt-5'>
                        <p>Privacy Policy</p>
                        <textarea rows="7" defaultValue={companyInfo.privacyPolicy} class="input-area border border-gray-200 block w-full text-base text-gray-900 mt-2 rounded-lg mx-auto p-2 pl-4  bg-gray-50 " name="address"></textarea>
                    </div>
                    <div className='mt-5'>
                        <p>Cancellation & Return Policy</p>
                        <textarea rows="7" defaultValue={companyInfo.cancelProduct} class="input-area border border-gray-200 block w-full text-base text-gray-900 mt-2 rounded-lg mx-auto p-2 pl-4  bg-gray-50 " name="address"></textarea>
                    </div>
                </div>
                <div className='mt-3 relative'>
                    <input type="submit" class="cursor-pointer pt-4 pr-10 pb-4 pl-10 bg-root-100 absolute right-0 hover:bg-root-200 text-white rounded-xl" value="Submit"></input>
                </div>
            </div>
        </form>
    );
};

export default Upload_footerData;