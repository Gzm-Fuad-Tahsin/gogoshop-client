import React, { createContext, useState } from 'react';

export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    //user
    // const [user, setUser] = useState({
    //     id:32984,
    //     name:'Hossain Ahamed',
    //     phone:'01868726172',
    //     email:'hossainahamed6872@gmail.com',
    //     address:'29/1,Road 21, New Chasara,jamtola,Narayanganj',
    //     gender : 'Male',
    //     imgURL:'https://scontent.fdac11-2.fna.fbcdn.net/v/t39.30808-6/314023616_1627051114363680_2926308787731583629_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGUNmQzwi0BGZWuIFiFn1Qt4odC2zHAYuzih0LbMcBi7FRh7-saF1RdxjZdfj8DE-TmXGteOERxLKHrfCI-MeHG&_nc_ohc=3Opx3huQ7t8AX_efnLp&_nc_ht=scontent.fdac11-2.fna&oh=00_AfCpnv0YDRLN_8oAZBMmkJpPIqyrI7-3TM7qcNUuc72xfw&oe=6482F923'})
    
        const [user, setUser] = useState();
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