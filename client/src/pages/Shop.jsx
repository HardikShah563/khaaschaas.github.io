// importing from react
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// importing stylesheet
import "../style/shop.css";
// importing icons
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
// importing data
import { shopItems } from "../config/data";
// importing components
import ShopItem from "../components/ShopItem";

export default function Shop() {
    const navigate = useNavigate();

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

                <div className="shop-items">
                    {shopItems.map((el) => (
                        <>
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
                        </>
                    ))}
                </div>
            </div>
        </>
    );
};
