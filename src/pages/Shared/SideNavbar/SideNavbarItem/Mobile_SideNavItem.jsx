import React, { useContext, useState } from 'react';
import { GoChevronRight } from 'react-icons/go';
import { Link, NavLink } from 'react-router-dom';

const Mobile_SideNavItem = ({ data ,setsideNavstate}) => {
    const [isOpen, setIsOpen] = useState(false);

    const { _id, isActive, category_slug, img, category_name, sub_category, path } = data;



    const buttonStyle = {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.3rem', // Adjust the padding value as needed

        borderRadius: '0.375rem', // Adjust the border radius value as needed
        cursor: 'pointer',
    };

    const chevronIconStyle = {
        color: '#4A5568',
        width: '1.25rem',
        height: '1.25rem',
        transition: 'transform 200ms ease',
        transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
    };

    const subCategoryContainerStyle = {
        marginLeft: '0.7rem',
        marginTop: '0.2rem',
        marginBottom: '0.2rem',
        borderLeft: '1px solid #E2E8F0',
        display: 'grid',
        gap: '0.5rem', // Adjust the gap value as needed


    };

    const subCategoryLinkStyle = {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '0.3rem',
        borderRadius: '0.375rem', // Adjust the border radius value as needed
        cursor: 'pointer',

    };

    const imageStyle = {
        borderRadius: '0.75rem',
        width: '1.5rem',
        marginRight: '0.3rem',

    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setsideNavstate(false)
    };

    return (
        <div className="text-sm">

            <button 
            id={_id} 
            style={buttonStyle} 
            onClick={toggleMenu}
            onKeyDown={()=>{setsideNavstate(false)}}>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <img src={img} alt={category_slug} style={imageStyle} />
                    <span style={{ fontWeight: 'lighter', fontSize: '0.9rem' }}>{category_name}</span>
                </div>


                {sub_category && sub_category.length > 0 && (
                    <GoChevronRight style={chevronIconStyle} />
                )}
            </button>


            {isOpen && sub_category && sub_category.length > 0 && (
                <div
                    style={subCategoryContainerStyle}
                >
                    {sub_category.map((item) => (
                        <NavLink
                            key={item.sub_cat_id}
                            to={`sub-category/${item.sub_category_slug}`}
                            style={subCategoryLinkStyle}
                            onKeyDown={()=>{setsideNavstate(false)}} onClick={()=>{setsideNavstate(false)}}
                        >
                            <img src={item.img} alt={item.sub_category_slug} style={imageStyle} />

                            <span style={{ fontWeight: 'lighter', fontSize: '0.9rem' }}>{item.sub_category_name}</span>
                        </NavLink>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Mobile_SideNavItem;
