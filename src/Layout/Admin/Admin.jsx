import React from 'react';
import TopNav from '../../pages/Shared/TopNavBar/TopNav';
import SideNavbar from '../../pages/Shared/SideNavbar/SideNavbar/SideNavbar';
import { Link, Outlet } from 'react-router-dom';

const Admin = () => {
    return (
        <>
            <div className="w-screen border-b-[1px] max-w-full  sticky top-0 z-[1000] ">
                {/* <TopNavbar /> */}
                <TopNav />
            </div>
            <div className="flex relative">
                <div className="w-full">
                    <Outlet></Outlet>
                </div>


            </div>
        </>
    );
};

export default Admin;