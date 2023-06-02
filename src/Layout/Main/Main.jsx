import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import TopNavbar from '../../pages/Shared/TopNavBar/TopNavbar';
import SideNavbar from '../../pages/Shared/SideNavbar/SideNavbar/SideNavbar';
import { UtilityContext } from '../../Contexts/Utility/UtilityProvider';
import Footer from '../../pages/Shared/Footer/Footer';
import { fetchJson } from '../../assets/Scripts/utility';


export const WebpageDataContext = createContext();


export async function loader({ params }) {

    return await fetchJson(`${import.meta.env.VITE_SERVER_ADDRESS}/home`);

}
const Main = () => {



    //load the all products, category and footer data;
    const homepageInformation = useLoaderData();
    const {categories,AllproductsData,footerData} = homepageInformation;





    const { screenWidth, showSideNav, hideSideNavbyTouch } = useContext(UtilityContext);
    const contextvalue = {
        AllproductsData,
        categories,
        footerData
    }

    return (
        <>
        <WebpageDataContext.Provider  value={contextvalue}>
            
            
                
                    <>
                        <div className='border-b-[1px] max-w-full  sticky top-0 z-[1000] '>
                            <TopNavbar />
                        </div>
                        <div className='flex relative'>
                            {
                                showSideNav &&
                                <div className={` min-w-[240px] w-60 h-screen  overflow-y-auto  ${screenWidth<768 ? 'fixed' : 'sticky'} top-[64px] z-40   bg-white flex flex-col `} >
                                    <SideNavbar />
                                </div>
                            }
                            <div className="w-full" onTouchStart={hideSideNavbyTouch}>

                                <Outlet ></Outlet>
                                <Footer />

                            </div>
                        </div>

                        {/* <SwipeNavigation showSideNavbySwipe={showSideNavbyTouch} hideSideNavbySwipe={hideSideNavbyTouch} /> */}

                    </>
                            </WebpageDataContext.Provider>
            





        </>
    );
};

export default Main;