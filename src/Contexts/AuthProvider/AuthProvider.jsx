import React, { createContext, useState } from 'react';

export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    //user
    const [user, setUser] = useState({
        id:32984,
        name:'Hossain Ahamed',
        phone:'01868726172',
        email:'hossainahamed6872@gmail.com',
        address:'Chasara,Narayanganj',
        imgURL:'https://scontent.fdac11-2.fna.fbcdn.net/v/t39.30808-6/314023616_1627051114363680_2926308787731583629_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGUNmQzwi0BGZWuIFiFn1Qt4odC2zHAYuzih0LbMcBi7FRh7-saF1RdxjZdfj8DE-TmXGteOERxLKHrfCI-MeHG&_nc_ohc=BAj5wSxu71QAX_CbkfJ&_nc_ht=scontent.fdac11-2.fna&oh=00_AfC6hvwX0wg6vVtS_zTztXnkbpyjK0QxFsf8J23mnhuM4w&oe=647D0A63'})
    
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