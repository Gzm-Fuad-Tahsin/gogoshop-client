import React, { createContext, useContext, useEffect } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { UtilityContext } from "../../Contexts/Utility/UtilityProvider";
import { fetchJson } from "../../assets/Scripts/utility";
import Mobile from "./Mobile/Mobile";
import Desktop from "./Desktop/Desktop";

export const WebpageDataContext = createContext();

export async function loader({ params }) {
    return await fetchJson(`${import.meta.env.VITE_SERVER_ADDRESS}/home`);
}

const Main = () => {
    //load the all products, category and footer data;
    const homepageInformation = useLoaderData();
    const { categories, topBanner, bottomBanner, footerData } = homepageInformation;

    const { screenWidth, showSideNav } = useContext(UtilityContext);
    const contextvalue = {
        categories,
        topBanner,
        bottomBanner,
        footerData,
    };

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
                            <Desktop>
                                <Outlet></Outlet>
                            </Desktop>
                        </>
                }
            </WebpageDataContext.Provider>
        </>
    );
};

export default Main;
