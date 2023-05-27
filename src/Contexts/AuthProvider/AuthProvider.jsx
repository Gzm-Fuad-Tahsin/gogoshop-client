import React, { createContext, useState } from 'react';

export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    //user
    const [user, setUser] = useState({'imgURL': 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'});

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