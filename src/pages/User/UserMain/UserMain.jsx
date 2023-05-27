import React, { useContext, useEffect, useState } from 'react';
import SignIn from '../SignIn/SignIn';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import Loading from '../../ErrorPages/Loading/Loading';


import SignUp from '../SignUp/SignUp';
import MobileSignUp from '../MobileSignUp/MobileSignUp';
import UserProfile from '../UserProfile/UserProfile';
import ForgotPassword from '../ForgotPassword/ForgotPassword';

const UserMain = () => {

    const { user, loading, setLoading } = useContext(AuthContext);

    //which page need to show
    const [showUserPage, setShowUserPage] = useState('sign-in');

    

    const handlePageLoad = pageName =>{
       
        setShowUserPage(pageName);
     }


    if (loading) {
        return <Loading />
    }



    let componentToRender;

    switch (showUserPage) {
        case 'sign-in':
            componentToRender = <SignIn   setShowUserPage={setShowUserPage} handlePageLoad={handlePageLoad}/>;
            break;
        case 'sign-up':
            componentToRender = <SignUp  setShowUserPage={setShowUserPage}  handlePageLoad={handlePageLoad}/>;
            break;
        case 'mobile-sign-up':
            componentToRender = <MobileSignUp  setShowUserPage={setShowUserPage} handlePageLoad={handlePageLoad} />;
            break;
        case 'profile':
            componentToRender = <UserProfile   setShowUserPage={setShowUserPage} handlePageLoad={handlePageLoad}/>;
            break;
        case 'forget-password':
            componentToRender = <ForgotPassword   setShowUserPage={setShowUserPage} handlePageLoad={handlePageLoad}/>;
            break;
        default:
            componentToRender = <SignIn   setShowUserPage={setShowUserPage} handlePageLoad={handlePageLoad}/>;
            break;
    }



    return (
        <>
        
        
            {
           
                componentToRender

            }

        </>
    );
};

export default UserMain;