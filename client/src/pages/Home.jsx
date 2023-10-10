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
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            `/images/swiggy.png`
                        }
                        alt=""
                    />

                    <hr className="vertical-hr" />

                    <img
                        src={
                            process.env.PUBLIC_URL +
                            `/images/zomato.png`
                        }
                        alt=""
                    />
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
           
        </>
    );
};
