import React, { createContext, useContext, useEffect } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import { BsFillClipboard2CheckFill } from 'react-icons/bs';
import TopNavbar from '../../pages/Shared/TopNavBar/TopNavbar';
import SideNavbar from '../../pages/Shared/SideNavbar/SideNavbar/SideNavbar';
import { UtilityContext } from '../../Contexts/Utility/UtilityProvider';
import Footer from '../../pages/Shared/Footer/Footer';

import { fetchJson } from '../../assets/Scripts/utility';
import TopNav from '../../pages/Shared/TopNavBar/TopNav';
import BottomBar from '../../pages/Shared/BottomBar/BottomBar';
import ScrollToTop from '../../components/ScrollToTop/ScrollTotop';


export const WebpageDataContext = createContext();


export async function loader({ params }) {

    return await fetchJson(`${import.meta.env.VITE_SERVER_ADDRESS}/home`);

}
const Main = () => {





    //load the all products, category and footer data;
    const homepageInformation = useLoaderData();
    const { categories, AllproductsData, footerData } = homepageInformation;




    const { screenWidth, showSideNav } = useContext(UtilityContext);
    const contextvalue = {
        categories,
        AllproductsData,
        footerData
    }


    return (
        <>


            <WebpageDataContext.Provider value={contextvalue}>
          


                            <div className='w-screen border-b-[1px] max-w-full  sticky top-0 z-[1000] '>
                                {/* <TopNavbar /> */}
                                <TopNav />
                            </div>
                            <div className='flex relative'>
                                {
                                    showSideNav &&
                                    <div className={`min-w-[240px]  h-screen  overflow-y-auto  ${screenWidth < 768 ? 'fixed' : 'sticky'} top-[64px] z-40   bg-white flex flex-col `} >
                                        <SideNavbar />
                                    </div>
                                }
                                <div className="w-full" >

                                    <Outlet ></Outlet>
                                    <Footer />

                                </div>

                                {
                                    screenWidth < 768 && <BottomBar />
                                }


                            </div>


                
            </WebpageDataContext.Provider>






        </>
    );
};

export default Main;


// <div className="">
// <header>
//     <div className="relative z-20 border-b bg-white">
        

//             <input type="checkbox" name="hamburger" id="hamburger" className="peer" hidden />

//             <div className='w-screen border-b-[1px] max-w-full  sticky top-0 z-[1000] '>
               
//                 <TopNav />
//             </div>

//             <div className="peer-checked:translate-x-0 fixed top-0 inset-0 w-screen translate-x-[-100%]    border-r  shadow-xl transition duration-300 flex flex-nowrap">
//                 <div className="w-60 border bg-white  h-screen  overflow-y-auto  z-40   ">
//                     <SideNavbar />
//                 </div>
//                 <div className="flex-grow bg-gray-500 ">

//                     <label htmlFor="hamburger" className="peer-checked:hamburger w-full h-screen ">
//                         <div className="w-full h-full"></div>
//                     </label>
//                 </div>
//             </div>

//     </div>
// </header>
// <div className='w-full'>
//     <Outlet ></Outlet>
//     <Footer />
// </div>
// </div>