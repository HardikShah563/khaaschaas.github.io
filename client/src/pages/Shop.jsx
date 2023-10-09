// importing from react
import { useNavigate } from "react-router-dom";
// importing stylesheet
import "../style/shop.css";
// importing icons
import { AiOutlinePlus } from "react-icons/ai";

export default function Shop() {
    const navigate = useNavigate();

    const shopItems = [
        {
            drinkURL: "blueberry",
            backgroundColor: "violet",
            backgroundURL: "berries",
            drinkName: "BLUEBERRY",
            drinkCost: 19.99,
        }, {
            drinkURL: "punjabi",
            backgroundColor: "white",
            backgroundURL: "berries",
            drinkName: "PUNJABI",
            drinkCost: 19.99,
        }, {
            drinkURL: "gujarati",
            backgroundColor: "yellow",
            backgroundURL: "spices",
            drinkName: "GUJARATI",
            drinkCost: 19.99,
        }, {
            drinkURL: "masala",
            backgroundColor: "white",
            backgroundURL: "spices",
            drinkName: "MASALA",
            drinkCost: 19.99,
        }, {
            drinkURL: "peri_peri",
            backgroundColor: "red",
            backgroundURL: "chilli",
            drinkName: "PERI-PERI",
            drinkCost: 19.99,
        }, {
            drinkURL: "pudhina",
            backgroundColor: "green",
            backgroundURL: "pudina",
            drinkName: "PUDHINA",
            drinkCost: 19.99,
        }, {
            drinkURL: "cookie_cream",
            backgroundColor: "red",
            backgroundURL: "chilli",
            drinkName: "COOKIES",
            drinkCost: 19.99,
        }, {
            drinkURL: "mango",
            backgroundColor: "yellow",
            backgroundURL: "aam",
            drinkName: "MANGO",
            drinkCost: 19.99,
        }, {
            drinkURL: "rose",
            backgroundColor: "baby-pink",
            backgroundURL: "rose_flower",
            drinkName: "ROSE",
            drinkCost: 19.99,
        }
    ];

    return (
        <>
            <div className="page-contents">
                <div className="v-big-heading">
                    SHOP YOUR FAVOURITE FLAVOUR
                </div>

                <div className="shop-items">
                    {shopItems.map((el) => (
                        <>
                            <div
                                className="shop-item text-hover hover2 gradient"
                                id={`${el.backgroundColor}-gradient`}
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
                                <div className="shop-bg-title">{el.drinkName}</div>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        `/images/${el.drinkURL}.png`
                                    }
                                    alt={el.drinkURL}
                                    id={el.drinkURL}
                                    className="shop-item-img"
                                />
                                <div className="shop-item-buttons flex">
                                    <div className="view-details" onClick={() => {navigate(`/${el.drinkURL}`)}}>View Details</div>

                                    <div className="plus view-details"><AiOutlinePlus size={30} /></div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    );
};
