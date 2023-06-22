import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import MobileTopNav from '../../pages/Shared/TopNavBar/Mobile_TopNav';
import AdminTopNav from '../../pages_Admin/Shared/Admin_TopNav/AdminTopNav';

const Admin = () => {
    return (
        <>
            <div className="w-screen border-b-[1px] max-w-full  sticky top-0 z-[1000] ">
                <AdminTopNav />
            </div>
            <div className="flex relative">
                <div className="w-[260px] h-[100vh] hidden lg:block bg-light-200">sidenav
                <NavLink to='/admin/upload-top-banner'>top banner</NavLink>
                </div>
                <div className="w-full">
                    <Outlet></Outlet>
                </div>


            </div>
        </>
    );
};

export default Admin;