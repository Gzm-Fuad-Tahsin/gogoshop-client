import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNavbar from '../../pages/Shared/TopNavBar/TopNavbar';

const Main = () => {
    return (
        <>
            <TopNavbar />
            <Outlet ></Outlet>
        </>
    );
};

export default Main;