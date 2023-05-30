import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UtilityContext } from '../../../Contexts/Utility/UtilityProvider';
import { BsFillClipboard2CheckFill } from 'react-icons/bs'
import rightarrow from '../../../assets/icons/rightArrow.svg';
const SideNavbar = ({ contentHeight }) => {
    const { screenWidth } = useContext(UtilityContext)
    return (

        <aside className="relative border-r bg-white text-black font-medium">

            <ul className="">
                <li>
                    <Link to='/subcategory' className="flex items-center justify-between p-2  text-gray-900 transition duration-75 rounded-lg hover:bg-light-200 ">
                        <div className="flex items-center justify-between">
                            <BsFillClipboard2CheckFill className='text-root-100 text-lg' />
                            <span className="ml-4">1</span>
                        </div>
                        <div className="pr-2">
                            <img src={rightarrow} alt="" />
                        </div>


                    </Link>
                </li>
                <li>
                    <Link to='/subcategory' className="flex items-center justify-between p-2  text-gray-900 transition duration-75 rounded-lg hover:bg-light-200 ">
                        <div className="flex items-center justify-between">
                            <BsFillClipboard2CheckFill className='text-root-100 text-lg' />
                            <span className="ml-4">2</span>
                        </div>
                        <div className="pr-2">
                            <img src={rightarrow} alt="" />
                        </div>


                    </Link>
                </li>
                <li>
                    <Link to='/subcategory' className="flex items-center justify-between p-2  text-gray-900 transition duration-75 rounded-lg hover:bg-light-200 ">
                        <div className="flex items-center justify-between">
                            <BsFillClipboard2CheckFill className='text-root-100 text-lg' />
                            <span className="ml-4">3</span>
                        </div>
                        <div className="pr-2">
                            <img src={rightarrow} alt="" />
                        </div>


                    </Link>
                </li>
                <li>
                    <Link to='/subcategory' className="flex items-center justify-between p-2  text-gray-900 transition duration-75 rounded-lg hover:bg-light-200 ">
                        <div className="flex items-center justify-between">
                            <BsFillClipboard2CheckFill className='text-root-100 text-lg' />
                            <span className="ml-4">Fruits</span>
                        </div>
                        <div className="pr-2">
                            <img src={rightarrow} alt="" />
                        </div>


                    </Link>
                </li>
                <li>
                    <Link to='/subcategory' className="flex items-center justify-between p-2  text-gray-900 transition duration-75 rounded-lg hover:bg-light-200 ">
                        <div className="flex items-center justify-between">
                            <BsFillClipboard2CheckFill className='text-root-100 text-lg' />
                            <span className="ml-4">Fruits</span>
                        </div>
                        <div className="pr-2">
                            <img src={rightarrow} alt="" />
                        </div>


                    </Link>
                </li>
                <li>
                    <Link to='/subcategory' className="flex items-center justify-between p-2  text-gray-900 transition duration-75 rounded-lg hover:bg-light-200 ">
                        <div className="flex items-center justify-between">
                            <BsFillClipboard2CheckFill className='text-root-100 text-lg' />
                            <span className="ml-4">Fruits</span>
                        </div>
                        <div className="pr-2">
                            <img src={rightarrow} alt="" />
                        </div>


                    </Link>
                </li>
                <li>
                    <Link to='/subcategory' className="flex items-center justify-between p-2  text-gray-900 transition duration-75 rounded-lg hover:bg-light-200 ">
                        <div className="flex items-center justify-between">
                            <BsFillClipboard2CheckFill className='text-root-100 text-lg' />
                            <span className="ml-4">Fruits</span>
                        </div>
                        <div className="pr-2">
                            <img src={rightarrow} alt="" />
                        </div>


                    </Link>
                </li>
                <li>
                    <Link to='/subcategory' className="flex items-center justify-between p-2  text-gray-900 transition duration-75 rounded-lg hover:bg-light-200 ">
                        <div className="flex items-center justify-between">
                            <BsFillClipboard2CheckFill className='text-root-100 text-lg' />
                            <span className="ml-4">Fruits</span>
                        </div>
                        <div className="pr-2">
                            <img src={rightarrow} alt="" />
                        </div>


                    </Link>
                </li>
                <li>
                    <Link to='/subcategory' className="flex items-center justify-between p-2  text-gray-900 transition duration-75 rounded-lg hover:bg-light-200 ">
                        <div className="flex items-center justify-between">
                            <BsFillClipboard2CheckFill className='text-root-100 text-lg' />
                            <span className="ml-4">Fruits</span>
                        </div>
                        <div className="pr-2">
                            <img src={rightarrow} alt="" />
                        </div>


                    </Link>
                </li>
                <li>
                    <Link to='/subcategory' className="flex items-center justify-between p-2  text-gray-900 transition duration-75 rounded-lg hover:bg-light-200 ">
                        <div className="flex items-center justify-between">
                            <BsFillClipboard2CheckFill className='text-root-100 text-lg' />
                            <span className="ml-4">Fruits</span>
                        </div>
                        <div className="pr-2">
                            <img src={rightarrow} alt="" />
                        </div>


                    </Link>
                </li>
                <li>
                    <Link to='/subcategory' className="flex items-center justify-between p-2  text-gray-900 transition duration-75 rounded-lg hover:bg-light-200 ">
                        <div className="flex items-center justify-between">
                            <BsFillClipboard2CheckFill className='text-root-100 text-lg' />
                            <span className="ml-4">Fruits</span>
                        </div>
                        <div className="pr-2">
                            <img src={rightarrow} alt="" />
                        </div>


                    </Link>
                </li>
                <li>
                    <Link to='/subcategory' className="flex items-center justify-between p-2  text-gray-900 transition duration-75 rounded-lg hover:bg-light-200 ">
                        <div className="flex items-center justify-between">
                            <BsFillClipboard2CheckFill className='text-root-100 text-lg' />
                            <span className="ml-4">Fruits</span>
                        </div>
                        <div className="pr-2">
                            <img src={rightarrow} alt="" />
                        </div>


                    </Link>
                </li>
                <li>
                    <Link to='/subcategory' className="flex items-center justify-between p-2  text-gray-900 transition duration-75 rounded-lg hover:bg-light-200 ">
                        <div className="flex items-center justify-between">
                            <BsFillClipboard2CheckFill className='text-root-100 text-lg' />
                            <span className="ml-4">Fruits</span>
                        </div>
                        <div className="pr-2">
                            <img src={rightarrow} alt="" />
                        </div>


                    </Link>
                </li>
                <li>
                    <Link to='/subcategory' className="flex items-center justify-between p-2  text-gray-900 transition duration-75 rounded-lg hover:bg-light-200 ">
                        <div className="flex items-center justify-between">
                            <BsFillClipboard2CheckFill className='text-root-100 text-lg' />
                            <span className="ml-4">Fruits</span>
                        </div>
                        <div className="pr-2">
                            <img src={rightarrow} alt="" />
                        </div>


                    </Link>
                </li>
                <li>
                    <Link to='/subcategory' className="flex items-center justify-between p-2  text-gray-900 transition duration-75 rounded-lg hover:bg-light-200 ">
                        <div className="flex items-center justify-between">
                            <BsFillClipboard2CheckFill className='text-root-100 text-lg' />
                            <span className="ml-4">Fruits</span>
                        </div>
                        <div className="pr-2">
                            <img src={rightarrow} alt="" />
                        </div>


                    </Link>
                </li>
                <li>
                    <Link to='/subcategory' className="flex items-center justify-between p-2  text-gray-900 transition duration-75 rounded-lg hover:bg-light-200 ">
                        <div className="flex items-center justify-between">
                            <BsFillClipboard2CheckFill className='text-root-100 text-lg' />
                            <span className="ml-4">Fruits</span>
                        </div>
                        <div className="pr-2">
                            <img src={rightarrow} alt="" />
                        </div>


                    </Link>
                </li>
                <li>
                    <Link to='/subcategory' className="flex items-center justify-between p-2  text-gray-900 transition duration-75 rounded-lg hover:bg-light-200 ">
                        <div className="flex items-center justify-between">
                            <BsFillClipboard2CheckFill className='text-root-100 text-lg' />
                            <span className="ml-4">Fruits</span>
                        </div>
                        <div className="pr-2">
                            <img src={rightarrow} alt="" />
                        </div>


                    </Link>
                </li>
                <li>
                    <Link to='/subcategory' className="flex items-center justify-between p-2  text-gray-900 transition duration-75 rounded-lg hover:bg-light-200 ">
                        <div className="flex items-center justify-between">
                            <BsFillClipboard2CheckFill className='text-root-100 text-lg' />
                            <span className="ml-4">Fruits</span>
                        </div>
                        <div className="pr-2">
                            <img src={rightarrow} alt="" />
                        </div>


                    </Link>
                </li>
                <li>
                    <Link to='/subcategory' className="flex items-center justify-between p-2  text-gray-900 transition duration-75 rounded-lg hover:bg-light-200 ">
                        <div className="flex items-center justify-between">
                            <BsFillClipboard2CheckFill className='text-root-100 text-lg' />
                            <span className="ml-4">Fruits</span>
                        </div>
                        <div className="pr-2">
                            <img src={rightarrow} alt="" />
                        </div>


                    </Link>
                </li>
                <li>
                    <Link to='/subcategory' className="flex items-center justify-between p-2  text-gray-900 transition duration-75 rounded-lg hover:bg-light-200 ">
                        <div className="flex items-center justify-between">
                            <BsFillClipboard2CheckFill className='text-root-100 text-lg' />
                            <span className="ml-4">Fruits</span>
                        </div>
                        <div className="pr-2">
                            <img src={rightarrow} alt="" />
                        </div>


                    </Link>
                </li>
                <li>
                    <Link to='/subcategory' className="flex items-center justify-between p-2  text-gray-900 transition duration-75 rounded-lg hover:bg-light-200 ">
                        <div className="flex items-center justify-between">
                            <BsFillClipboard2CheckFill className='text-root-100 text-lg' />
                            <span className="ml-4">Fruits</span>
                        </div>
                        <div className="pr-2">
                            <img src={rightarrow} alt="" />
                        </div>


                    </Link>
                </li>
                <li>
                    <Link to='/subcategory' className="flex items-center justify-between p-2  text-gray-900 transition duration-75 rounded-lg hover:bg-light-200 ">
                        <div className="flex items-center justify-between">
                            <BsFillClipboard2CheckFill className='text-root-100 text-lg' />
                            <span className="ml-4">Fruits</span>
                        </div>
                        <div className="pr-2">
                            <img src={rightarrow} alt="" />
                        </div>


                    </Link>
                </li>
            </ul>


            <ul className="fixed  w-60 bg-white bottom-0  pt-4  pb-1  border-t ">
                <li>
                    <Link to='/orders' className="flex items-center p-2  text-gray-900 transition duration-75 rounded-lg hover:bg-light-200 ">
                        <BsFillClipboard2CheckFill className='text-root-100 text-lg' />
                        <span className="ml-4">My Orders</span>
                    </Link>
                </li>
                <li>
                    <Link to='/' className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-light-200 ">
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