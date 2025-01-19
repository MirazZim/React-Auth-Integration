import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";

/* Create Context API */
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null)

    /* Ekhane Firebase theke ene Email and Password er function likhsi jeta jekono jaga theke call kora jabe if i want */

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const signInUser = (email,password) => {
        return signInWithEmailAndPassword (auth, email, password)
    } 

    const signOutUser = () =>{
        return signOut(auth);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('Current User', currentUser)
            setUser(currentUser);
        })

        //Component UnMount // this is a clean up function
        return ()=>{
            unSubscribe();
        }

    },[])

    

    const authInfo = {
        user,
        createUser,
        signInUser,
        signOutUser
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