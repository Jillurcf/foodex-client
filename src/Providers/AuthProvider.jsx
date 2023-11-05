import { createContext, useEffect, useState } from "react";
import app from "../firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, } from "firebase/auth";
const auth = getAuth(app)
import { GoogleAuthProvider } from "firebase/auth";


const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext(auth)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const signinwithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password)=>{
        setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
    }
  

    const loggedOut = ()=>{
        setLoading(true)
      return signOut(auth)
    }

    useEffect(()=>{
        const unsubsCribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubsCribe()
        }
    },[])

    const userInfo = {
        user,
        loading,
        createUser,
        signIn,
        loggedOut,
        signinwithGoogle,
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;