import React, {  useContext, useEffect } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';
import { UtilityContext } from '../../Contexts/Utility/UtilityProvider';

const PreventLogin = ({children}) => {
    const {user} = useContext(AuthContext);
    const {setShowSideNav} = useContext(UtilityContext);
    useEffect(()=>{setShowSideNav(false)},[]);

    if(!user){
        return children
    }
  
    return (
         <Navigate to='/' replace></Navigate>
    );
};

export default PreventLogin;