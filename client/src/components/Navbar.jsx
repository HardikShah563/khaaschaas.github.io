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
                                onClick={() => { navigate("/campus-delivery") }}
                            >
                                Campus Delivery
                            </div>
                        </div>

                        {/* <div className="dropdown">
                            <div
                                className="nav-div-name login-icon main-btn"
                                onClick={() => { navigate("/signin") }}
                            >
                                <BiUser size={30} />
                            </div>
                        </div> */}

                        <div className="dropdown">
                            <a target="_blank" href="https://wa.me/+918657586667">
                                <div
                                    className="nav-div-name login-icon main-btn"
                                >
                                    <img
                                        src="./images/whatsapp-icon.png"
                                        alt="swiggy icon"
                                        className="what-icon"
                                    />
                                </div>
                            </a>
                        </div>

                        <div className="dropdown">
                            <a target="_blank" href="https://www.swiggy.com/menu/731356?source=sharing">
                                <div
                                    className="nav-div-name login-icon main-btn"
                                >
                                    <img
                                        src="./images/swiggy-icon.png"
                                        alt="swiggy icon"
                                        className="swig-icon"
                                    />
                                </div>
                            </a>
                        </div>

                        <div className="dropdown">
                            <a target="_blank" href="https://link.zomato.com/xqzv/rshare?id=473331540c6b9f5a">
                                <div
                                    className="nav-div-name login-icon main-btn"
                                >
                                    <img
                                        src="./images/zomato-icon.png"
                                        alt="zomato icon"
                                        className="zom-icon"
                                    />
                                </div>
                            </a>
                        </div>

                        <div className="dropdown">
                            <a target="_blank" href="https://instagram.com/thekhaaschaas">
                                <div
                                    className="nav-div-name login-icon main-btn"
                                >
                                    <AiOutlineInstagram size={30} />
                                </div>
                            </a>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    );
};
