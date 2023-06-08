import React, { createContext, useContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import TopNavbar from '../../pages/Shared/TopNavBar/TopNavbar';
import SideNavbar from '../../pages/Shared/SideNavbar/SideNavbar/SideNavbar';
import { UtilityContext } from '../../Contexts/Utility/UtilityProvider';
import Footer from '../../pages/Shared/Footer/Footer';

import { fetchJson } from '../../assets/Scripts/utility';
import { Helmet } from 'react-helmet-async';
import TopNav from '../../pages/Shared/TopNavBar/TopNav';
import BottomBar from '../../pages/Shared/BottomBar/BottomBar';


export const WebpageDataContext = createContext();


export async function loader({ params }) {

    return await fetchJson(`${import.meta.env.VITE_SERVER_ADDRESS}/home`);

}
const Main = () => {



    //load the all products, category and footer data;
    const homepageInformation = useLoaderData();
    const { categories, AllproductsData, footerData } = homepageInformation;




    const { screenWidth, showSideNav, hideSideNavbyTouch } = useContext(UtilityContext);
    const contextvalue = {
        categories,
        AllproductsData,
        footerData
    }

    return (
        <>

            <WebpageDataContext.Provider value={contextvalue}>
                {
                    screenWidth < 768 ?
                        <>
                            <div className="drawer">
                                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                                <div className="drawer-content flex flex-col">
                                    {/* Navbar */}
                                    <div className="w-full navbar bg-base-300">
                                        <div className="flex-none lg:hidden">
                                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                            </label>
                                        </div>
                                       
                                    </div>
                                    {/* Page content here */}
                                    <Outlet ></Outlet>
                                    <Footer />
                                </div>
                                <div className="drawer-side">
                                    <label htmlFor="my-drawer-3" className="drawer-overlay "></label>

                                    <SideNavbar />


                                </div>
                            </div>
                        </>
                        :


                        <>
                            <div className='w-screen border-b-[1px] max-w-full  sticky top-0 z-[1000] '>
                                {/* <TopNavbar /> */}
                                <TopNav />
                            </div>
                            <div className='flex relative'>
                                {
                                    showSideNav &&
                                    <div className={`min-w-[240px] w-60 h-screen  overflow-y-auto  ${screenWidth < 768 ? 'fixed' : 'sticky'} top-[64px] z-40   bg-white flex flex-col `} >
                                        <SideNavbar />
                                    </div>
                                }
                                <div className="w-full" onTouchStart={hideSideNavbyTouch}>

                                    <Outlet ></Outlet>
                                    <Footer />

                                </div>

                                {
                                    screenWidth < 768 && <BottomBar />
                                }


                            </div>

                            {/* <SwipeNavigation showSideNavbySwipe={showSideNavbyTouch} hideSideNavbySwipe={hideSideNavbyTouch} /> */}

                        </>
                }
            </WebpageDataContext.Provider>






        </>
    );
};

export default Main;