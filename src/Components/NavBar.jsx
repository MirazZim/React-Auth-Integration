import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const NavBar = () => {
    
    const { user, signOutUser } = useContext(AuthContext);
    console.log(user);


    const Links = <>
        <li><NavLink to = "/">Home</NavLink></li>
        <li><NavLink to = "/login">Login</NavLink></li>
        <li><NavLink to ="register">Register</NavLink></li>

        {/* When user is logged in only then the orders page will be visible or else it wont be visible  */}
        {
            user && <>
                <li><NavLink to ="/Orders">Orders</NavLink></li>
                <li><NavLink to ="/Profile">Profile</NavLink></li>
             </>
        }
        
    </>

    const handleSignOut = () => {
        signOutUser()
        .then(() => {
            console.log('User Sign Out Successfully')
        })
        .catch(error => {
            console.log('ERROR', error.message)
        })
    }


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none" 
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        
                    {
                        Links
                    }

                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">React Auth Integration</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                
                {
                        Links
                }

                </ul>
            </div>
            <div className="navbar-end">
                {/* niche emon kora hoise karon user jodi thake tahole dekhabe email ar na shudhu button dekhbe */}
                {
                    user ? 
                    <>
                        <span>{user.email}</span>
                        <a onClick={handleSignOut} className="btn">Sign Out</a>
                    </>

                    : <Link to ="/login">Login</Link>
                }
            </div>
        </div>
    );
};

export default NavBar;