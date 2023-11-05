import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../FireBase/FireBase";
// import app from "../FireBase/Firebase";

export const AuthContext =createContext(null);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [handleReload,setHandleReload]=useState(true)


    const googleSignIn =() =>{
        setHandleReload(true);
        return signInWithPopup(auth, googleProvider);
    }
    const createNewUser=(email,password)=>{
        setHandleReload(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const userLogin = (email, password)=>{
        setHandleReload(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userLogOut = () =>{
        setHandleReload(true);
        return signOut(auth);
    }

    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth, currentUser  =>{
            // console.log("user logged",currentUser);
            setUser(currentUser);
            setHandleReload(false);
        });
        return () =>{
            unSubscribe();
        }
       
    },[])

  const authInfo={
   user,
   createNewUser,
   userLogin,
   googleSignIn,
   userLogOut,
   handleReload
  }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;