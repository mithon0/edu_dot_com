import React, {  createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.config';
export const AuthContext = createContext(null);
const auth =getAuth(app)
const AuthProvider = ({children}) => {
    
const [user,setUser]=useState(null)

// signup with email password 
const signUpEmailPass =(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
}
// login with email password
const loginwithEmailPass =(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}

// hold the login user 

useEffect(()=>{
    const unSubscribe= onAuthStateChanged(auth,(userInfo)=>setUser(userInfo))
    return ()=>{
        unSubscribe()
    }
},[]);
// logout
const logOut =()=>{
    return signOut(auth);
  }

    const authInfo={
        user,
        signUpEmailPass,
        loginwithEmailPass,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;