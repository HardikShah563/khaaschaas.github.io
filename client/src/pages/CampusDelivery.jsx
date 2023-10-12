// importing from react
import { useNavigate } from "react-router-dom";
// importing stylesheet
import "../style/home.css";
import "../style/campusdelivery.css";
// importing components
import Marquee from "../components/Marquee";
// importing icons
import { BsBicycle } from "react-icons/bs";
import { MdOutlineDirectionsBike } from "react-icons/md";
import { FaMotorcycle, FaCarSide } from "react-icons/fa";
// importing components
import ContactUs from "../components/ContactUs";
import SingleFAQ from "../components/SingleFAQ";

export default function CampusDelivery() {
    const navigate = useNavigate();

    return (
        <>
            <div className="page-contents">
                <div className="main">
                    <div className="story-title">
                        <h1 className="yellow-box-title stella">CAMPUS DELIVERY</h1>
                    </div>
                </div>

                <p className="txt-ctr bobby main-para margin-top-20">
                    Order your khaas chaas here:
                </p>

                <div className="flex delivery-logos campus-delivery-logo">
                    <a target="_blank" href="https://www.swiggy.com/menu/731356?source=sharing">
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                `/images/whatsapp-logo.png`
                            }
                            alt="whatsapp logo"
                            className="whatsapp-logo"
                        />
                    </a>
                </div>
            </div>

            <div>
                <img
                    src={
                        process.env.PUBLIC_URL +
                        "/images/campus-delivery.png"
                    }
                    alt="main-img"
                    className="campus-main-img"
                />
            </div>

            <div className="yellow-box-title stella">
                FAQ
            </div>

            <div className="faq-section">
                <SingleFAQ 
                    faqQuestion={"How to order?"}
                    faqSolution={"What is the answer to this solution"}
                />
                <SingleFAQ 
                    faqQuestion={"How to order?"}
                    faqSolution={"What is the answer to this solution"}
                />
                <SingleFAQ 
                    faqQuestion={"How to order?"}
                    faqSolution={"What is the answer to this solution"}
                />
                <SingleFAQ 
                    faqQuestion={"How to order?"}
                    faqSolution={"What is the answer to this solution"}
                />
            </div>
        </>
    );
};
