import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const MainLayout = () => {
    return (
        <div>
            <Navbar/>

           <div className="container mx-auto p-3">
           <Outlet/>
           </div>
            
        </div>
    );
};

export default MainLayout;