import { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.init'

export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider;


const KitchenContexts = ({children}) => {

    const [user,setUser] = useState(null)
    const [loader,setLoader] = useState(true)

    const createUser = (email,password) =>{
        setLoader(true)
       return  createUserWithEmailAndPassword(auth,email,password)
    }

    const logIn = (email,password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignIn = () =>{
        return signInWithPopup(auth,googleProvider)
    }


    const logOut =()=>{
        setLoader(true)
        return signOut(auth);
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            setLoader(false)
        }) ;
        

        return () =>{
            return unsubscribe();
        }
        
    },[])

  

    const resetPass = (email)  =>{
        return sendPasswordResetEmail(auth,email)
    }

    const updateUser = (profile) =>{
        return updateProfile(auth.currentUser,profile)
    }
   
    const authInfo = {
        createUser,
        logOut,
        logIn,
        googleSignIn,
        updateUser,
        resetPass,
        loader,
        user
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default KitchenContexts;