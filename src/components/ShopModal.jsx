import "../style/shopmodal.css";
import { RxCross2 } from "react-icons/rx";

export default function ShopModal(props) {

    function toggle() {
        props.toggleShowModal();
    }

    return (
        <>
            <div className="shop-item-modal">
                <RxCross2 className="cross-icon" onClick={toggle} />

                <h1 className="margin-top-20 big-heading txt-ctr bobby">
                    {props.modalInfo.drinkFullName}
                </h1>

                <img
                    src={
                        process.env.PUBLIC_URL +
                        props.modalInfo.drinkStatic
                    }
                    alt={props.modalInfo.drinkName}
                    id={props.modalInfo.drinkName}
                    className="modal-img"
                />

                <div className="txt-ctr bobby main-para">Available in 3 different packaging: </div>

                <div className="flex price">
                    <div className="price-box main-para bobby">₹20</div>
                    <div className="price-box main-para bobby">₹50</div>
                    <div className="price-box main-para bobby">₹70</div>
                </div>

                <p className="txt-ctr bobby main-para">
                    Order Now:
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
        </>
    );
};
