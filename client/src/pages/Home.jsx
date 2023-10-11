// importing from react
import { useNavigate } from "react-router-dom";
// importing stylesheet
import "../style/home.css";
// importing components
import Marquee from "../components/Marquee";

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

            <div>
                <img
                    src={
                        process.env.PUBLIC_URL +
                        "/images/main.png"
                    }
                    alt="main-img"
                    className="main-img"
                />
            </div>

            <div className="our-story section">
                <div className="story-title">
                    <h1 className="yellow-box-title stella">OUR STORY</h1>
                </div>
                <div className="story-text">
                    Khaas Chaas, where we blend tradition with innovation, crafting buttermilk like never before. We're more than a brand; we're a flavorful revolution. With a relentless focus on freshness, we've reimagined chaas and lassi, offering a variety that's hygienic and authentic. Our mission is clear: to redefine India's classic refreshments, elevating them to a new level. Khaas Chaas isn't just a drink; it's a journey into India's rich culinary heritage. We're not just a brand, we're a movement, reshaping the future of Indian refreshments. Join us and experience the perfect blend of tradition, innovation, and a touch of "Khaas" in every sip.
                </div>
            </div>

            <div className="margin-block-10">
                <Marquee
                    limit={20}
                    text="DESI DESI NA BOLA KAR&nbsp;&nbsp;&nbsp;&nbsp;KHAASS CHAAS PIYA KAR&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;"
                    color={"yellow"}
                />
            </div>
        </>
    );
};
