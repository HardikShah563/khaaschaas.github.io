import "../style/home.css";

export default function Home() {
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
                    <span className="main-btn">
                        Explore Drinks
                    </span>
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
