import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div className="bg-[#131B2D] min-h-screen text-white px-4 lg:px-8 xl:px-32">
            <Navbar />
            <div className="pt-16 lg:pt-16">
                <Outlet />
            </div>
            <div className="">
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;