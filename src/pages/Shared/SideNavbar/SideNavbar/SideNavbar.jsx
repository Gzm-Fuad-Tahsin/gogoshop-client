import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillClipboard2CheckFill } from 'react-icons/bs';
import { GoChevronRight } from 'react-icons/go'
import { UtilityContext } from '../../../../Contexts/Utility/UtilityProvider';
import { AuthContext } from '../../../../Contexts/AuthProvider/AuthProvider';
import { WebpageDataContext } from '../../../../Layout/Main/Main';
import SideNavbarItem from '../SideNavbarItem/SideNavbarItem';
import './SideNavbar.module.css'


const SideNavbar = () => {
    const { screenWidth } = useContext(UtilityContext);
    const { user } = useContext(AuthContext);
    const { categories } = useContext(WebpageDataContext);

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (

        <aside className="border-r bg-white text-black font-medium">




            {
                screenWidth < 768 &&
                <>
                    {
                        user ?
                            <>
                                <div className='relative'>

                                    <button
                                        onClick={toggleMenu}
                                        className="p-2 border-b w-full flex justify-between items-center">
                                        <div className='flex justify-between items-center'>

                                            <img className='rounded-xl  w-12  ' src={user?.imgURL} />
                                            <div className='pl-3 flex flex-col items-start '>
                                                <p>{user?.name}</p>
                                                <p className='text-sm hover:underline cursor-pointer text-gray-400'>{user?.id}</p>
                                            </div>
                                        </div>
                                        <GoChevronRight className={`w-5 h-5 transition-transform duration-50000 ${isOpen ? 'transform rotate-90' : ''}`} />
                                    </button>
                                    {
                                        isOpen &&
                                        <ul className="menu dropdown-content  p-2 border-0 border-b   bg-base-100  text-gray-700">


                                            <li >
                                                <Link to='/profile' className="block px-4 py-2 text-sm  hover:bg-gray-100 " role="menuitem">Profile</Link>
                                            </li>
                                            <li >
                                                <Link to='/update-profile' className="block px-4 py-2 text-sm  hover:bg-gray-100 " role="menuitem">Update information</Link>
                                            </li>
                                            <li >
                                                <Link to='/orders' className="block px-4 py-2 text-sm  hover:bg-gray-100 " role="menuitem">My orders</Link>
                                            </li>
                                            <li >
                                                <Link to='/order-history' className="block px-4 py-2 text-sm  hover:bg-gray-100 " role="menuitem">Order History</Link>
                                            </li>
                                            <li >
                                                <Link className="block px-4 py-2 text-sm  hover:bg-gray-100 " role="menuitem">Sign out</Link>
                                            </li>
                                        </ul>
                                    }

                                </div>

                            </>
                            :
                            <>
                                <Link to='/login' className="p-2 border-b w-full flex flex-col items-center ">

                                    <div className="mb-1 relative w-8 h-8 overflow-hidden bg-gray-100 rounded-xl dark:bg-gray-600">
                                        <svg className="absolute w-10 h-10 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                                    </div>
                                    <p>Sign In</p>


                                </Link>
                            </>
                    }
                </>


            }


            <ul>

                {
                    categories.map(item => <li key={item?._id} >
                        <SideNavbarItem data={item} />
                    </li>
                    )

                }


            </ul>


            <ul className="fixed  w-60 bg-white bottom-0 ">
                <hr className= 'invisible md:visible' />
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