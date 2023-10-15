// importing from react
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
    const navigate = useNavigate();
    return (
        <>
            <div className="page-contents">
                <h1 className="big-heading">Error 404 | Page Not Found</h1>
                <br />
                <h1 className="txt-ctr">Yeh kaha aa gaye app</h1>
                <h1 className="txt-ctr">Chaas lijiye, thak gaye honge galat page pe ghoomte-ghoomte</h1>
                <center>
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/images/chaas-meme.png"
                        }
                        alt=""
                        className="chaas-memes"
                    />
                    <div className="main-btn cur" onClick={() => {navigate("/")}}>
                        Go back to home page
                    </div>
                </center>
            </div>
        </>
    );
};
