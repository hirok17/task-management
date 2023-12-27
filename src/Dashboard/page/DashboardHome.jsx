import { NavLink, Outlet } from "react-router-dom";
import { FaBuilding } from "react-icons/fa6";


const DashboardHome = () => {
    return (
        <section>
            <div className="flex">
                {/* dashboard aera */}
                <div className="w-[200px] min-h-screen bg-black ">
                    <div className="mt-8">
                        <ul className="text-center space-y-5">
                            <li>
                                <NavLink className="btn" to="/dashboard"><FaBuilding></FaBuilding>Dashboard</NavLink>
                            </li>
                            <li>
                                <NavLink className="btn" to="/dashboard/create-tasks">Create Task</NavLink>
                            </li>
                            <li>
                                <NavLink className="btn" to="/dashboard/task">Manage Task</NavLink>
                            </li>
                           
                        </ul>
                    </div>
                </div>
                {/* contect aera */}
                <div className="flex-1">
                    <Outlet></Outlet>
                </div>
            </div>
        </section>
    );
};

export default DashboardHome;