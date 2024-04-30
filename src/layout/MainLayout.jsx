import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const MainLayout = () => {
    return (
        <div>
            <Navbar/>

           <div className="container mx-auto  px-4 min-h-[calc(100vh-417px)]">
           <Outlet/>
           </div>
           <Footer/>
            
        </div>
    );
};

export default MainLayout;