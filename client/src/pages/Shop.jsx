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
                <div className="v-big-heading">
                    SHOP YOUR FAVOURITE FLAVOUR
                </div>

                <div className="shop-items">
                    {shopItems.map((el) => (
                        <>
                            <ShopItem
                                drinkURL={el.drinkURL}
                                backgroundColor={el.backgroundColor}
                                backgroundURL={el.backgroundURL}
                                drinkName={el.drinkName}
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
