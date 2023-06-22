import React, { useContext, useState } from 'react';
import './SideNavBar.module.css';
import { GoChevronRight } from 'react-icons/go';
import { Link, NavLink } from 'react-router-dom';



const SideNavbarItem = ({ data }) => {
  
    const [isOpen, setIsOpen] = useState(false);

    const { _id, isActive, category_slug, img, category_name, sub_category, path } = data;


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    //button 
    const button =
        <>
            <button id={_id}
                className="w-full flex items-center justify-between p-2  text-gray-700 hover:bg-gray-100"
                onClick={toggleMenu} >
                <div className='flex items-center'>
                    <img src={img} alt={category_slug} className='w-6 h-6' />
                    <span className="ml-2">{category_name}</span>
                </div>


                {
                    (sub_category && (sub_category.length > 0)) && <GoChevronRight className={`w-5 h-5 transition-transform duration-50000 ${isOpen ? 'transform rotate-90' : ''}`} />
                }

            </button>
        </>

    return (
        <div className="relative text-sm">

            {
                //  if the path dont have any child or dropdwon, then it will redirect to path
                path ?
                    <Link to={`products/${path}`}>
                        {
                            button
                        }
                    </Link>
                    :
                    button
            }


            {(isOpen && sub_category && (sub_category.length > 0)) && (
                <div className=" ml-4  border-l px-1 space-y-2 ">
                    {
                        sub_category.map(item => <NavLink
                            key={item.sub_cat_id}
                            to={`sub-category/${item.sub_category_slug}`}

                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center pl-1 py-2 text-gray-800 bg-light-200 hover:bg-light-200 rounded "
                                    : "flex items-center pl-1 py-2 text-gray-800 bg-white hover:bg-gray-100 rounded "
                            }

                        >

                            <img src={item.img} alt={item.sub_category_slug } className='w-6 h-6 bg-transparent' />
                            <p className='ml-2'>{item.sub_category_name}</p>
                        </NavLink>
                        )
                    }

                </div>
            )}
        </div>
    );
};

export default SideNavbarItem;