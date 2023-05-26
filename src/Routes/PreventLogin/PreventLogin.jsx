import React, { Children, useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import ProfileLoadingPage from '../../pages/ErrorPages/ProfileLoadingPage/ProfileLoadingPage';
import { Navigate } from 'react-router-dom';

const PreventLogin = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    if(loading){
        return <ProfileLoadingPage/>
    }
    
    if(!user){
        return children
    }
  
    return (
         <Navigate to='/' replace></Navigate>
    );
};

export default PreventLogin;