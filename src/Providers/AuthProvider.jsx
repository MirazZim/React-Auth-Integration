import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
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

    //This is a observer to make you notice who is currently Logged in
    onAuthStateChanged(auth, currentUser => {
        if(currentUser){
            console.log('Current user is Logged in',currentUser)
            setUser(currentUser);
        }
        else{
            console.log('No User Logged In')
            setUser(null)
        }
    })

    const authInfo = {
        user,
        createUser,
        signInUser
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