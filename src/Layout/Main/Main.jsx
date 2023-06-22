import React, { createContext, useContext, useEffect } from "react";
import { Outlet, useLoaderData } from "react-router-dom";

import SideNavbar from "../../pages/Shared/SideNavbar/SideNavbar/SideNavbar";
import { UtilityContext } from "../../Contexts/Utility/UtilityProvider";
import Footer from "../../pages/Shared/Footer/Footer";

import { fetchJson } from "../../assets/Scripts/utility";
import TopNav from "../../pages/Shared/TopNavBar/TopNav";
import Mobile from "../Mobile/Mobile";

export const WebpageDataContext = createContext();

export async function loader({ params }) {
    return await fetchJson(`${import.meta.env.VITE_SERVER_ADDRESS}/home`);
}

const Main = () => {
    //load the all products, category and footer data;
    const homepageInformation = useLoaderData();
    const { categories, topBanner,bottomBanner, footerData } = homepageInformation;

    const { screenWidth, showSideNav } = useContext(UtilityContext);
    const contextvalue = {
        categories,
        topBanner,
        bottomBanner,
        footerData,
    };


    // const {setShowSideNav} = useContext(UtilityContext);
    // useEffect(()=>{setShowSideNav(true)},[]);
    return (
        <>
            <WebpageDataContext.Provider value={contextvalue}>
                {
                    screenWidth < 768 ?
                        <>
                            <Mobile>
                                <Outlet></Outlet>
                            </Mobile>
                        </>
                        :
                        <>
                            <div className="w-screen border-b-[1px] max-w-full  sticky top-0 z-[1000] ">
                                {/* <TopNavbar /> */}
                                <TopNav />
                            </div>
                            <div className="flex relative">
                                {showSideNav && (
                                    <div
                                        className={`min-w-[240px]  w-60 h-screen  overflow-y-auto  sticky
                                             top-[64px] z-40   bg-white flex flex-col `}
                                    >
                                        <SideNavbar />
                                    </div>
                                )}
                                <div className="w-full">
                                    <Outlet></Outlet>
                                    <Footer />
                                </div>


                            </div>
                        </>
                }
            </WebpageDataContext.Provider>
        </>
    );
};

export default Main;
