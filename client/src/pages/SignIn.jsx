// importing from react
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// importing stylesheet
import "../style/form.css";
// importing icons
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";

export default function SignIn() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        passcode: ""
    });

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value,
        }))
    }

    const [msg, setMsg] = useState("");
    const [color, setColor] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        if (formData.email === "" || formData.passcode === "") {
            setMsg("Fill the required details");
            setColor("red");
        }
        // inside else if, check custom email validations
        else {
            setMsg("Sign In successful");
            setColor("green");

        }
        // pass the states into db
    }

    return (
        <>
            <div className="page">
                <div className="form">
                    <h1 className="simple-heading">Sign In</h1>

                    <div className="margin-top-20">
                        Email
                    </div>
                    <input
                        className="input margin-block-5"
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="off"
                        placeholder="Email Address"
                    />

                    <div className="margin-top-20">
                        Password
                    </div>
                    <input
                        className="input margin-block-5"
                        type="password"
                        name="pass"
                        id="pass"
                        value={formData.pass}
                        onChange={handleChange}
                        autoComplete="off"
                        placeholder="Pass****"
                    />
                    <div className="small-text margin-top-10 bold cur">
                        Forgot Password?
                    </div>

                    <button
                        className="input form-btn margin-top-20 cur"
                        onClick={handleSubmit}
                    >
                        Sign In
                    </button>

                    <div className="small-text txt-ctr margin-block-10">
                        or continue with
                    </div>

                    <div className="sign-with flex">
                        <div className="sign-box">
                            <FcGoogle size={25} />
                        </div>

                        <div className="sign-box">
                            <FaFacebook size={25} className="blue" />
                        </div>

                        <div className="sign-box">
                            <FaGithub size={25} />
                        </div>
                    </div>

                    <div className="small-text txt-ctr margin-top-20">
                        Don't have an account yet?
                        &nbsp;
                        <span className="bold cur" onClick={() => {navigate("/signup")}}>
                            Register for free
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};
