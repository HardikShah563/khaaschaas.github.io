// importing from react
import { useNavigate } from "react-router-dom";
// importing stylesheet
import "../style/home.css";
import "../style/campusdelivery.css";
import "../style/faq.css";
import "../style/howtoorder.css";
// importing components
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

            <div className="how-to-order-section-parent">
                <div className="yellow-box-title stella">
                    HOW TO ORDER?
                </div>

                <p className="txt-ctr bobby main-para margin-top-20">
                    One simple step:
                </p>

                <div className="how-to-order-img-parent">
                    <img 
                        src="images/how-to-order.png" 
                        alt="how to order image"
                        className="how-to-order-img"
                    />
                </div>

                <div className="order-now main-btn">
                    <a target="_blank" href="https://wa.me/+918657586667">Click here to order now</a>
                </div>
            </div>

            <div className="faq-section-parent">
                <div className="yellow-box-title stella">
                    FAQ
                </div>

                <div className="faq-section">
                    <SingleFAQ
                        faqQuestion={"How to order?"}
                        faqSolution={"What is the answer to this solution"}
                    />
                    <SingleFAQ
                        faqQuestion={"How bad is khaas chaas?"}
                        faqSolution={"What is the answer to this solution"}
                    />
                    <SingleFAQ
                        faqQuestion={"Did you really go to shark tank?"}
                        faqSolution={"What is the answer to this solution"}
                    />
                    <SingleFAQ
                        faqQuestion={"Pakka aacha hoga na flavour?"}
                        faqSolution={"What is the answer to this solution"}
                    />
                </div>
            </div>
        </>
    );
};
