// importing from react
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// importing stylesheet
import "../style/shop.css";
// importing data
import { shopItems } from "../config/data";
// importing components
import ShopItem from "../components/ShopItem";
import ShopModal from "../components/ShopModal";

export default function Shop() {
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);
    const [modalInfo, setModalInfo] = useState({});

    function toggleShowModal() {
        setShowModal(prevState => !prevState);
    }

    return (
        <>
            <div className="page-contents">
                <div className="big-heading lips">
                    <span className="">
                        <img src={
                            process.env.PUBLIC_URL +
                            `/images/lips.gif`
                        } alt="" />
                    </span>
                    <span className="smacking bobby">SMACKING</span>
                </div>
                <div className="v-big-heading bobby">
                    Flavours
                </div>

                <p className="txt-ctr bobby main-para">
                    Available at:
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

                <div className="shop-items">
                    {shopItems.map((el) => (
                        <div onClick={() => {
                            setShowModal(true);
                            setModalInfo(el);
                        }}>
                            <ShopItem
                                drinkURL={el.drinkURL}
                                backgroundColor={el.backgroundColor}
                                backgroundURL={el.backgroundURL}
                                drinkName={el.drinkName}
                                drinkStatic={el.drinkStatic}
                                drinkGIF={el.drinkGIF}
                                drinkFullName={el.drinkFullName}
                                drinkCost={el.drinkCost}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {showModal && (
                <div>
                    <ShopModal
                        modalInfo={modalInfo}
                        toggleShowModal={toggleShowModal}
                    />
                </div>
            )}
        </>
    );
};
