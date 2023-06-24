import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsFillClipboard2CheckFill } from 'react-icons/bs';
import { WebpageDataContext } from '../../../../Layout/User/Main';
import SideNavbarItem from '../SideNavbarItem/SideNavbarItem';
import './SideNavbar.module.css'


const SideNavbar = () => {

    const { categories } = useContext(WebpageDataContext);

    return (

        <aside className="border-r bg-white text-black font-medium">


            <ul>

                {

                    Array.isArray(categories) &&
                    categories.map((item, _idx) => <li key={_idx} >
                        <SideNavbarItem data={item} />
                    </li>
                    )

                }


            </ul>



            {/* bottom sticky  */}
            <ul className="fixed  w-60 bg-white bottom-0 ">
                <hr className='invisible md:visible' />
                <li>
                    <Link to='/orders' className="hidden md:flex  items-center mt-1 p-2  text-gray-900 transition duration-75 rounded-lg hover:bg-light-200 ">
                        <BsFillClipboard2CheckFill className='text-root-100 text-lg' />
                        <span className="ml-4">My Orders</span>
                    </Link>
                </li>
                <li>
                    <Link to='#' className="hidden md:flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-light-200 ">
                        <svg width="18" height="18" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.0317 10.9724C14.0208 14.9604 14.9258 10.3467 17.4656 12.8848C19.9143 15.3328 21.3216 15.8232 18.2192 18.9247C17.8306 19.237 15.3616 22.9943 6.6846 14.3197C-1.99348 5.644 1.76158 3.17244 2.07397 2.78395C5.18387 -0.326154 5.66586 1.08938 8.11449 3.53733C10.6544 6.0765 6.04266 6.98441 10.0317 10.9724Z" stroke="#205072" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="ml-4">Helpline</span>
                    </Link>
                </li>


            </ul>
        </aside>


    );
};

export default SideNavbar;