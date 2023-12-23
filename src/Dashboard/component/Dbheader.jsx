import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";


const Dbheader = () => {
    const {user, logOut}=useContext(AuthContext);
    const heandelLogout=()=>{
        logOut()
        .then(()=>{
            toast.success('Log out successful');
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <section className="bg-[#C9405A]">
            <div className="container mx-auto navbar">
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost text-xl font-bold text-white">TaskMaker</Link>
                     
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end text-white">
                        <button className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                <span className="badge badge-xs badge-primary indicator-item"></span>
                            </div>
                        </button>

                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="user" src={user?.photoURL} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                               {user?.displayName}
                            </li>
                            <li onClick={heandelLogout} className="cursor-pointer">Logout</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Dbheader;