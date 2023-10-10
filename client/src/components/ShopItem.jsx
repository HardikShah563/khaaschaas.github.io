// importing from react
import { useState } from "react";
// importing icons
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import ShopItemInfo from "./ShopItemInfo";

export default function ShopItem(props) {
    const [qty, setQty] = useState(0);
    const [visibility, setVisibility] = useState(false);

    function toggleVisibility() {
        setVisibility(prevState => !prevState);
    }

    function increment() {
        setQty(prevQty => prevQty + 1);
    }

    function decrement() {
        qty <= 0 ? setQty(0) : setQty(prevQty => prevQty - 1);
    }

    return (
        <>
            <div
                className="shop-item text-hover hover2 gradient"
                id={`${props.backgroundColor}-gradient`}
                onClick={toggleVisibility}
            >
                <div className="price-tag">
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            `/images/price-bg.png`
                        }
                        className="price-img"
                        alt="price-tag"
                    />
                </div>

                <div className="shop-bg-title">{props.drinkName}</div>

                <img
                    src={
                        process.env.PUBLIC_URL +
                        `/images/${props.drinkURL}.png`
                    }
                    alt={props.drinkURL}
                    id={props.drinkURL}
                    className="shop-item-img"
                />
                <div className="shop-item-buttons flex">
                    <div className="plus view-details" onClick={decrement}>
                        <AiOutlineMinus size={30} />
                    </div>
                    <div className="view-details">{qty}</div>
                    <div className="plus view-details" onClick={increment}>
                        <AiOutlinePlus size={30} />
                    </div>
                </div>
            </div>

            {visibility && (
                <>
                    <ShopItemInfo
                        props={props}
                        toggleVisibility={toggleVisibility}
                    />
                </>
            )}
        </>
    );
};
