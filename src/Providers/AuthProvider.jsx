import { createContext } from "react";

/* Create Context API */
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const authInfo = {
        name: 'Llalalal'
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