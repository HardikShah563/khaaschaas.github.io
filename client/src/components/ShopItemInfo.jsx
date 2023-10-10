// importing stylesheet
import "../style/shopiteminfo.css";
// importing icons
import { RxCross2 } from "react-icons/rx";

export default function ShopItemInfo(props) {
    // document.getElementById(`${props.drinkURL}`).style.top = 100;

    return (
        <>
            <div className="blur-background" id={props.drinkURL}>
                {/* <div className="blur-background"></div> */}
                <div className="shop-item-info">
                    <div className="cross-icon flex cur" onClick={props.toggleVisibility}>
                        <RxCross2 size={30} />
                    </div>
                    
                </div>
            </div>
        </>
    );
};
