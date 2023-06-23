import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
import axios from 'axios';

export const AuthContext = createContext();

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {

    // firebase user 
    const [signedInUser, setsignedInUser] = useState(null);


    //user __for my website

    // const [user, setUser] = useState({
    //     id: 32984,
    //     name: 'Hossain Ahamed',
    //     phone: '01868726172',
    //     // email:'hossainahamed6872@gmail.com',
    //     address: '29/1,Road 21, New Chasara,jamtola,Narayanganj',
    //     gender: 'Male',
    //     imgURL: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
    // })

    const [user, setUser] = useState(null);


    //laoding
    const [loading, setLoading] = useState(false);


    const createUserByEmailPass = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUserByEmailPass = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInbyGoogle = () => {

        return signInWithPopup(auth, googleAuthProvider);
    }


    const passwordResetEmail = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    //logout
    const userSignOut = () => {
        setLoading(true);
        return signOut(auth);
    }





    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(true);
            console.log(currentUser);
            setUser(currentUser)


            if (currentUser) {
               
                axios.post(`${import.meta.env.VITE_SERVER_ADDRESS}/jwt`, {
                    email: currentUser.email,
                    username: currentUser.displayName,
                    imgURL: currentUser.photoURL
                })
                    .then(data => {
                        const { user, token } = data.data;
                        console.log(data)
                        setUser(user);
                        localStorage.setItem('access-token', token)
                        setLoading(false);
                    })
            }
            else {
                localStorage.removeItem('access-token');
                setLoading(false);
            }

        });

        return () => unsubscribe();
    }, [])







    //value 
    const authInfo = {
        user,
        loading,
        setLoading,
        createUserByEmailPass,
        loginUserByEmailPass,
        passwordResetEmail,
        signInbyGoogle,
        userSignOut


    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;