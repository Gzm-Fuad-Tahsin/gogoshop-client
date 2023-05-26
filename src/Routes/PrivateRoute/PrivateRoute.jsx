import React, { Children, useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import ProfileLoadingPage from '../../pages/ErrorPages/ProfileLoadingPage/ProfileLoadingPage';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);

    const location = useLocation();
    
    if(loading){
        return <ProfileLoadingPage/>
    }
    
    if(user){
        return children
    }
  
    return (
         <Navigate to='/login' replace state={ {from: location}}></Navigate>
    );
};

export default PrivateRoute;