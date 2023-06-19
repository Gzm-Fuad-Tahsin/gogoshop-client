import React, { createContext, useState } from 'react';

export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    //user
    const [user, setUser] = useState({
        id:32984,
        name:'Hossain Ahamed',
        phone:'01868726172',
        // email:'hossainahamed6872@gmail.com',
        address:'29/1,Road 21, New Chasara,jamtola,Narayanganj',
        gender : 'Male',
        imgURL:'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80'})
    
        // const [user, setUser] = useState();
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