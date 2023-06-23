import React, { useContext } from 'react';
import Footer from '../../../pages/Shared/Footer/Footer';
import SideNavbar from '../../../pages/Shared/SideNavbar/SideNavbar/SideNavbar';
import TopNav from '../../../pages/Shared/TopNavBar/TopNav';
import { UtilityContext } from '../../../Contexts/Utility/UtilityProvider';

const Desktop = ({ children }) => {
    const{showSideNav} = useContext(UtilityContext);
    return (
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
                    {
                        children
                    }
                    <Footer />
                </div>


            </div>
        </>
    );
};

export default Desktop;