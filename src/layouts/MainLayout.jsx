import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div className="bg-[#131B2D]">
            <div className="bg-[#131B2D] min-h-screen text-white px-6 lg:px-8 xl:px-32">
                <Navbar />
                <div className="pt-16 lg:pt-16">
                    <Outlet />
                </div>
            </div>
            <div className="w-full bg-[#000614] ">
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;