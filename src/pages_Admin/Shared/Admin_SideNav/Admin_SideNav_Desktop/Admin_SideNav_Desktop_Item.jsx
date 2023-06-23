import React, { useState } from 'react';
import { GoChevronRight } from 'react-icons/go';
import { Link, NavLink } from 'react-router-dom';
const Admin_SideNav_Desktop_Item = ({ data }) => {
    const { title, icon, href, subItem } = data;

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    //button 
    const button =
        <>
            <button
                className="w-full flex items-center justify-between p-2  text-gray-700 hover:bg-gray-100"
                onClick={toggleMenu} >
                <div className='flex items-center'>
                   {icon}
                    <span className="ml-2">{title}</span>
                </div>


                {
                    subItem && <GoChevronRight className={`w-5 h-5 transition-transform duration-50000 ${isOpen ? 'transform rotate-90' : ''}`} />
                }

            </button>
        </>
    return (
        <div className="relative text-sm">
            {
                href ?
                    <>
                        <NavLink  to={href}>{button}</NavLink>
                    </>
                    :
                    <>
                        {button}
                    </>
            }

            {(isOpen && subItem) && (
                <div className=" ml-4  border-l px-1 space-y-2 ">
                    {
                        subItem.map((item, _idx) => <NavLink
                            key={_idx}
                            to={item?.href}

                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center pl-1 py-2 text-gray-800 bg-light-200 hover:bg-light-200 rounded "
                                    : "flex items-center pl-1 py-2 text-gray-800 bg-white hover:bg-gray-100 rounded "
                            }

                        >


                            <p className='ml-2'>{item?.title}</p>
                        </NavLink>
                        )
                    }

                </div>
            )}

        </div>
    );
};

export default Admin_SideNav_Desktop_Item;