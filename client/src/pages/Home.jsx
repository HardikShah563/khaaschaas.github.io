// importing from react
import { useNavigate } from "react-router-dom";
// importing stylesheet
import "../style/home.css";
// importing components
import Marquee from "../components/Marquee";
// importing icons
import { BsBicycle } from "react-icons/bs";
import { MdOutlineDirectionsBike } from "react-icons/md";
import { FaMotorcycle, FaCarSide } from "react-icons/fa";
// importing components
import ContactUs from "../components/ContactUs";

export default function Home() {
    const navigate = useNavigate();

    return (
        <>
            <div className="page-contents">
                <div className="main">
                    <img
                        src="/images/logo-straight.png"
                        alt=""
                        className="main-title-img"
                    />
                </div>

                <p className="txt-ctr bobby main-para margin-top-20">
                    Now available at:
                </p>

                <div className="flex delivery-logos">
                    <a target="_blank" href="https://www.swiggy.com/menu/731356?source=sharing">
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                `/images/swiggy.png`
                            }
                            alt=""
                        />
                    </a>

                    <span>|</span>

                    <a target="_blank" href="https://link.zomato.com/xqzv/rshare?id=473331540c6b9f5a">
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                `/images/zomato.png`
                            }
                            alt=""
                        />
                    </a>
                </div>
            </div>

            <div className="main-img-parent">
                <img
                    src={
                        process.env.PUBLIC_URL +
                        "/images/main.png"
                    }
                    alt="main-img"
                    className="main-img"
                />
            </div>

            <div className="first-marquee">
                <Marquee
                    limit={20}
                    text="DESI DESI NA BOLA KAR&nbsp;&nbsp;&nbsp;&nbsp;KHAASS CHAAS PIYA KAR&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;"
                    color={"yellow"}
                />
            </div>
            
            <div className="numbers flex">
                <div className="numbers-div">
                    <div className="metric big-heading">1000+</div>
                    <div className="metric-name simple-heading">Units sold yet</div>
                </div>
                <div className="numbers-div">
                    <div className="metric big-heading">1000+</div>
                    <div className="metric-name simple-heading">Units sold yet</div>
                </div>
                <div className="numbers-div">
                    <div className="metric big-heading">1000+</div>
                    <div className="metric-name simple-heading">Units sold yet</div>
                </div>
                <div className="numbers-div">
                    <div className="metric big-heading">1000+</div>
                    <div className="metric-name simple-heading">Units sold yet</div>
                </div>
            </div>

            <div className="our-story">
                <div className="story-title">
                    <h1 className="yellow-box-title stella">OUR STORY</h1>
                </div>
                <div className="story-text">
                    Khaas Chaas, where we blend tradition with innovation, crafting buttermilk like never before. We're more than a brand; we're a flavorful revolution. With a relentless focus on freshness, we've reimagined chaas and lassi, offering a variety that's hygienic and authentic. Our mission is clear: to redefine India's classic refreshments, elevating them to a new level. Khaas Chaas isn't just a drink; it's a journey into India's rich culinary heritage. We're not just a brand, we're a movement, reshaping the future of Indian refreshments. Join us and experience the perfect blend of tradition, innovation, and a touch of "Khaas" in every sip.
                </div>
            </div>

            <div className="second-marquee">
                <Marquee
                    limit={20}
                    text="DESI DESI NA BOLA KAR&nbsp;&nbsp;&nbsp;&nbsp;KHAASS CHAAS PIYA KAR&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;"
                    color={"yellow"}
                />
            </div>

            <div className="section">
                <div className="story-title">
                    <h1 className="yellow-box-title stella">KHAAS PACKAGING</h1>
                </div>
                <div className="revolution-text-parent">
                    <div className="revolution-text">
                        In April  2023, Khaas Chaas introduced 200ml glass bottles, offering chaas, lassi, and buttermilk. Over four months, these classic bottles delighted customers and refreshed palates.
                    </div>
                    <div className="revolution-text">
                        In August 2023, we decided to take a bold step to align our brand with eco-conscious choices. We transitioned to 200ml PET plastic bottles, reducing our environmental footprint
                    </div>
                    <div className="revolution-text">
                        In October 2023, brace for a game-changing shift as we unveil eco-friendly spout pouches. Redefining packaging and our dedication to sustainability, setting a new standard in the refreshments industry.
                    </div>
                </div>
                <div className="revolution-flex">
                    <div className="revolution-icons-parent flex">
                        <div className="revolution-hr white-hr"></div>

                        <div className="revolution-icon">
                            <BsBicycle color="#FFED00" />
                        </div>

                        <div className="revolution-hr black-hr"></div>

                        <div className="revolution-icon">
                            <FaMotorcycle color="#FFED00" />
                        </div>

                        <div className="revolution-hr black-hr"></div>

                        <div className="revolution-icon">
                            <FaCarSide color="#FFED00" />
                        </div>

                        <div className="revolution-hr white-hr"></div>
                    </div>

                    <div className="flex revolution-images">
                        <img src="/images/glass.png" alt="glass bottles" />
                        <img src="/images/plastic.png" alt="glass bottles" />
                        <img src="/images/spouch.png" alt="glass bottles" />
                    </div>
                </div>
            </div>

            <ContactUs />
        </>
    );
};
