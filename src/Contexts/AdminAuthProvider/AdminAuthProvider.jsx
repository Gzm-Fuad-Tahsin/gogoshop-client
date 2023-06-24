import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import LoadingIcon from '../../pages/ErrorPages/LoadingIcon/LoadingIcon';
import AdminLogin from '../../pages_Admin/Admin/AdminLogin/AdminLogin';

export const AdminAuthContext = createContext();

const AdminAuthProvider = ({ children }) => {
    const [admin, setAdmin] = useState(localStorage.getItem('admin-token'));



    // when the data sent to server for jwt show Loading 
    const [adminLoadingPage, setAdminLoadingPage] = useState(false);



    const loginAdminByEmailPass = (email, password) => {
        setAdminLoadingPage(true);


        const logininfo = {
            email: email,
            password: password
        }
        axios.post(`${import.meta.env.VITE_SERVER_ADDRESS}/admin/jwt`, { logininfo })
            .then(data => {
                const adminData = data.data;
                setAdmin(adminData)
                setAdminLoadingPage(false);

            })
        setAdminLoadingPage(false);

    }


    //logout
    const adminSignOutTOServer = () => {
        const adminInfo = {
            email : admin?.email
        }
        axios.post(`${import.meta.env.VITE_SERVER_ADDRESS}/admin/signout`, { adminInfo })
            .then(data => {
                console.log(data);
                setAdmin(null)
                localStorage.removeItem('admin-token');
            })

    }

    
    const adminSignOut = () => {
        adminSignOutTOServer();
    }




    // observe admin 
    useEffect(() => {
        console.log(admin)

        const unsubscribe = () => {
            if (admin) {
                localStorage.setItem('admin-token', admin?.jwt)
            }
        }


        unsubscribe();


    }, [admin])

    const value = {
        admin,
        loginAdminByEmailPass,
        adminSignOut
    }

    return (
        <AdminAuthContext.Provider value={value}>
            {
                adminLoadingPage ?
                    <>
                        <LoadingIcon />
                    </>
                    :
                    <>
                        {
                            admin ?
                                <>
                                    {children}
                                </>
                                :
                                <>
                                    <AdminLogin />
                                </>
                        }
                    </>
            }


        </AdminAuthContext.Provider>
    );
};

export default AdminAuthProvider;