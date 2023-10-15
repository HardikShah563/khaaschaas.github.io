// importing from react
import { useNavigate } from "react-router-dom";
// importing stylesheet
import "../style/home.css";
import "../style/review.css";
// importing components
import Marquee from "../components/Marquee";
import ContactUs from "../components/ContactUs";
import Review from "../components/Review";
// importing icons
import { BsBicycle } from "react-icons/bs";
import { MdOutlineDirectionsBike } from "react-icons/md";
import { FaMotorcycle, FaCarSide } from "react-icons/fa";
// importing data
import reviewData from "../config/reviews";

export default function Home() {
    const navigate = useNavigate();

    const displayReviews = [];
    var counter = 0;

    reviewData.map(review => {
        counter ++;
        if(counter <= 6) {
            displayReviews.push(review);
        }
    });

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
                            alt="swiggy logo"
                        />
                    </a>

                    <span>|</span>

                    <a target="_blank" href="https://link.zomato.com/xqzv/rshare?id=473331540c6b9f5a">
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                `/images/zomato.png`
                            }
                            alt="zomato logo"
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
                    <div className="metric big-heading">4.5+</div>
                    <div className="metric-name simple-heading">Customer Ratings</div>
                </div>
                <div className="numbers-div">
                    <div className="metric big-heading">25000+</div>
                    <div className="metric-name simple-heading">Reels Views</div>
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

            <div className="section">
                <div className="yellow-box-title stella">
                    CAMPUS DELIVERY
                </div>
                <div className="campus-delivery-home flex">
                    <div>
                        <img
                            src="./images/talking-talking.png"
                            alt="two people talking image"
                            className="talking-img"
                        />
                    </div>
                    <div className="campus-delivery-text flex">
                        Experience the convenience of our Campus Delivery system. At Khaas Chaas, we bring our wide range of fresh and flavorful buttermilk and lassi directly to your college campus. Order easily through our user-friendly app, and we'll ensure prompt delivery to your preferred location. Say goodbye to the hassles of leaving campus to find your favorite desi cold drink. Whether it's a refreshing sip between classes or a treat during events, Khaas Chaas is now just a click away, making your campus life even more enjoyable.
                        <div className="main-btn" onClick={() => { navigate("/campus-delivery") }}>
                            Explore Campus Delivery
                        </div>
                    </div>
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

            <div className="reviews-section-parent">
                <div className="story-title">
                    <h1 className="yellow-box-title stella">KHAAS REVIEWS</h1>
                </div>

                <div className="reviews flex">
                    {displayReviews.map(review => (
                        <>
                            <Review
                                id={review.id}
                                name={review.name}
                                rating={review.rating}
                                review={review.review}
                            />
                        </>
                    ))}
                </div>
                <div className="review-buttons">
                    <div className="main-btn cur" onClick={() => {navigate("/reviews")}}>
                        VIEW ALL REVIEWS
                    </div>
                    <div className="main-btn cur">
                        POST A REVIEW
                    </div>
                </div>
            </div>

            <ContactUs />
        </>
    );
};
