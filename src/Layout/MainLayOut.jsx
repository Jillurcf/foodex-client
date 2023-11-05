import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/Navbar";

const MainLayOut = () => {
    return (
        <div className="">
            <NavBar></NavBar>
           <Outlet></Outlet>
        </div>
    );
};

export default MainLayOut;