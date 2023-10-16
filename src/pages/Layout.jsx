import { Outlet } from "react-router-dom";
// importing components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// importing icons
import { AiOutlineArrowUp } from "react-icons/ai";

export default function Layout() {
    return (
        <>
            <div className="page" id="top">
                <Navbar />
                
                <Outlet />

                <a href="#top" className="main-btn top-arrow">
                    <AiOutlineArrowUp />
                </a>
                
                <Footer />
            </div>
        </>
    );
};
