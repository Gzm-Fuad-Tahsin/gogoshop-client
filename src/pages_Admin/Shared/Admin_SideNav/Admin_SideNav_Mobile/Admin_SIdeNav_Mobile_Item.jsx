import React, { useState } from 'react';
import { GoChevronRight } from 'react-icons/go';
import { NavLink } from 'react-router-dom';

const Admin_SIdeNav_Mobile_Item = ({ data, setsideNavstate }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { title, icon, href, subItem } = data;

    // styles 
    const buttonStyle = {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.3rem', // Adjust the padding value as needed
        marginTop :'0.9rem',
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
        marginTop: '0.3rem',
        marginBottom: '0.3rem',
        paddingLeft: '0.7rem',
        borderLeft: '1px solid #E2E8F0',
        display: 'grid',
        gap: '0.5rem', // Adjust the gap value as needed


    };

    const subCategoryLinkStyle = {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '0.3rem',
        marginTop :'0.4rem',
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
       
    };


    return (
        <div className="text-sm">

            {
                //  if sub item  is not present means, here must be href in data, so it will redirect
                href ?
                    <>
                        <NavLink to={href}>
                            <button

                                style={buttonStyle}
                                onKeyDown={() => { setsideNavstate(false) }}
                                onClick={() => { setsideNavstate(false) }}>

                                <div style={{  fontWeight: 'lighter', fontSize: '1.1rem',display: 'flex', justifyContent: 'space-between', alignItems: 'center' ,alignContent:'center'}}>
                                <div style={{marginRight:'0.7rem' }}>{icon}</div>
                                    <span style={{marginLeft:'3px' }}>{title}</span>
                                </div>


                                {subItem && (
                                    <GoChevronRight style={chevronIconStyle} />
                                )}
                            </button>
                        </NavLink>
                    </>
                    :
                    <>
                        <button
                            style={buttonStyle}
                            onClick={toggleMenu}>
                            <div style={{ fontWeight: 'lighter', fontSize: '1.1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' ,alignContent:'center' }}>
                                <div style={{marginRight:'0.7rem' }}>{icon}</div>
                                <span >{title}</span>
                            </div>


                            {subItem && (
                                <GoChevronRight style={chevronIconStyle} />
                            )}
                        </button>
                    </>
            }




            {(isOpen && subItem) && (
                <div
                    style={subCategoryContainerStyle}
                >
                    {subItem.map((item, _idx) => (
                        <NavLink
                            key={_idx}
                            to={item?.href}
                            style={subCategoryLinkStyle}
                            onKeyDown={() => { setsideNavstate(false) }} onClick={() => { setsideNavstate(false) }}
                        >


                            <span style={{ fontWeight: 'lighter', fontSize: '1.1rem' }}>{item?.title}</span>
                        </NavLink>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Admin_SIdeNav_Mobile_Item;