import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoutes = ({ children }) => {

    //Jodi ekhane User Thake
    const { user, loading } = useContext(AuthContext);

    if(loading){
        <span className="loading loading-ring loading-lg"></span>
    }

    //Tahole user ey jao
    if (user) {
        return children;
    }

    //ar jodi na thake then Login ey chole jao thats what all this page about
    return (
        <Navigate to = "/login"></Navigate>
    );
};

export default PrivateRoutes;