import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Header = () => {
    const {user}=useContext(AuthContext);
    const menu=<>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
    </>
    return (
        <section className="bg-[#FFFAE9]">
            <div className="container mx-auto navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                           {
                            menu
                           }
                        </ul>
                    </div>
                    <Link to="/" className="text-3xl font-bold text-[#140A44]"><span className="text-[#D64C66]">T</span>askMaker</Link>
                    
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {
                        menu
                       }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?
                        <Link to="/dashboard" className="btn text-white bg-[#140A44] hover:bg-[#2A29E8]">Dashboard</Link>
                        :
                        <div>
                    <Link to="/login" className="text-base font-medium mr-3">Login</Link>
                    <Link to="/signup" className="btn text-white bg-[#140A44] hover:bg-[#2A29E8]">Sign Up</Link>
                  </div>
                    }
                   
                  
                   
                </div>
            </div>
        </section>
    );
};

export default Header;