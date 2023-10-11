// importing from react
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// importing stylesheet
import "../style/navbar.css";
// importing components
import NavHover from "./NavHover";
// importing icons
// import { FiChevronDown } from "react-icons/fi";
import { BiSolidChevronDown, BiUser } from "react-icons/bi";
import { AiOutlineShoppingCart, AiOutlineInstagram } from "react-icons/ai";

export default function Navbar() {
    const navigate = useNavigate();
    // setting admin state
    const [collapseNavbar, setCollapseNavbar] = useState(false);
    const [admin, setAdmin] = React.useState(true);
    const [login, setLogin] = useState(false);
    const [loginInfo, setLoginInfo] = useState({
        username: "username",
        userLogo: "userLoogo",
    });

    const toggleNavbar = () => {
        setCollapseNavbar(prevState => !prevState);
    }

    const shopHoverMetaData = {
        btnReq: true,
        btnStyle: "",
        btnURL: "/shop",
    };

    const shopItems = [
        {
            imgURL: "blueberry",
            imgName: "Blueberry Lassi",
            imgBg: "tertiary-1-bg"
        }, {
            imgURL: "masala",
            imgName: "Masala Chaas",
            imgBg: "tertiary-2-bg"
        }, {
            imgURL: "punjabi",
            imgName: "Classic Punjabi Lassi",
            imgBg: "tertiary-3-bg"
        }, {
            imgURL: "combo-4",
            imgName: "Explore All",
            imgBg: "tertiary-4-bg"
        }
    ];

    return (
        <>
            <section className="nav">
                <nav>
                    {/* NAV LINES */}
                    <div className="nav-lines" onClick={toggleNavbar}>
                        <div className="Bar"></div>
                        <div className="Bar"></div>
                        <div className="Bar"></div>
                    </div>

                    <div className="nav-items">
                        {/* NAV LOGO */}
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                "/images/logo-straight.png"
                            }
                            className="logo"
                            onClick={() => { navigate("/") }}
                        />
                    </div>

                    <div className={collapseNavbar ? "nav-links active" : "nav-links"}>
                        <div className="dropdown">
                            <div
                                onClick={() => { navigate("/shop") }}
                                className="nav-div-name main-btn"
                            >
                                <span>Shop</span>
                                <BiSolidChevronDown className="drop-down-icon" size={20} />
                            </div>

                            <div className="dropdown-content">
                                <NavHover
                                    metadata={shopHoverMetaData}
                                    data={shopItems}
                                />
                            </div>
                        </div>

                        <div className="dropdown">
                            <div
                                className="nav-div-name main-btn"
                            >
                                Learn
                            </div>
                        </div>

                        <div className="dropdown">
                            <div
                                className="nav-div-name login-icon main-btn"
                                onClick={() => { navigate("/signin") }}
                            >
                                <BiUser size={30} />
                            </div>

                            {/* <div className="dropdown-content">
                                <NavHover />
                            </div> */}
                        </div>

                        <div className="dropdown">
<<<<<<< Updated upstream
                            <a target="_blank" href="https://www.instagram.com/thekhaaschaas/">
                                <div
                                    className="nav-div-name login-icon main-btn"
                                >
                                    <AiOutlineInstagram size={30} />
                                </div>
                            </a>
=======
                            <div
                                className="nav-div-name login-icon main-btn"
                                onClick={() => { navigate("/cart") }}
                            >
                                <AiOutlineShoppingCart size={30} />
                            </div>
>>>>>>> Stashed changes

                            {/* <div className="dropdown-content">
                                <NavHover />
                            </div> */}
                        </div>
                    </div>
                </nav>
            </section>
        </>
    );
};
