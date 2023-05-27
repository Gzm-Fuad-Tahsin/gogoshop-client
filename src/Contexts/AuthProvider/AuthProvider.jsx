import React, { createContext, useState } from 'react';

export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    //user
    const [user, setUser] = useState()
    //laoding
    const [loading, setLoading] = useState(false);




    //value 
    const authInfo = {
        user,
        loading,
        setLoading,


    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;