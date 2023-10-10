import { useNavigate } from "react-router-dom";
import "../style/home.css";

export default function Home() {
    const navigate = useNavigate();
    return (
        <>

            <div className="page-contents">
                <div className="main">
                    <h1 className="little-big-heading stella txt-ctr">
                        Khaas Chaas
                    </h1>
                    <p className="txt-ctr bobby main-para">
                        Desi cold drink
                    </p>
                    <span className="main-btn cur" onClick={() => { navigate("/shop") }}>
                        Explore Drinks
                    </span>
                </div>

                <p className="txt-ctr bobby main-para">
                    Order at:
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

                    <hr className="vertical-hr" />

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

            <div className="out-story flex">
                <div className="story-title">
                    <h1 className="bobby">OUR <br />STORY</h1>
                </div>
                <div className="story-text">
                    Khaas Chaas, where we blend tradition with innovation, crafting buttermilk like never before. We're more than a brand; we're a flavorful revolution. With a relentless focus on freshness, we've reimagined chaas and lassi, offering a variety that's hygienic and authentic. Our mission is clear: to redefine India's classic refreshments, elevating them to a new level. Khaas Chaas isn't just a drink; it's a journey into India's rich culinary heritage. We're not just a brand, we're a movement, reshaping the future of Indian refreshments. Join us and experience the perfect blend of tradition, innovation, and a touch of "Khaas" in every sip.
                </div>
            </div>

        </>
    );
};
