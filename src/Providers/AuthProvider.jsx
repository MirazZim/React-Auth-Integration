import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";

/* Create Context API */
export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null)

    const [loading , setLoading] = useState(true)

    /* Ekhane Firebase theke ene Email and Password er function likhsi jeta jekono jaga theke call kora jabe if i want */

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }


    const signInUser = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword (auth, email, password)
    } 

    const signOutUser = () =>{
        setLoading(true)
        return signOut(auth);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('Current User', currentUser)
            setUser(currentUser);
            setLoading(false)
        })

        //Component UnMount // this is a clean up function
        return ()=>{
            unSubscribe();
        }

    },[])

    

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
        signInWithGoogle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;

/* 
1.Create context with null as default
2. Create provider
3. Set a Default Value (authInfo)
4.[Attention Please !!!]
5. use the authProvider in the main.jsx
6. access the children inside the authProvider in the main.jsx
7. Export Auth Context
 */