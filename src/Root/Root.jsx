import { Outlet } from "react-router-dom";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";


const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className="min-h-[calc(100vh-68px)]">
            <Outlet></Outlet>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Root;