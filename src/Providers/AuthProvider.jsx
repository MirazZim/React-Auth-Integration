import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../firebase.init";

/* Create Context API */
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    /* Ekhane Firebase theke ene Email and Password er function likhsi jeta jekono jaga theke call kora jabe if i want */

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        
        createUser
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