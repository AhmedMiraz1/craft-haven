import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const MainLayout = () => {
    return (
        <div>
            <Navbar/>

           <div className="container mx-auto p-3">
           <Outlet/>
           </div>
           <Footer/>
            
        </div>
    );
};

export default MainLayout;