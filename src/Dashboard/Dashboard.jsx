import { Outlet } from "react-router-dom";
import Dbheader from "./component/Dbheader";


const Dashboard = () => {
    return (
        <div>
            <Dbheader></Dbheader>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;