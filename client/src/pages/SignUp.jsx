import { useState } from "react";

// importing stylesheet
import "../style/form.css";
// importing icons
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        pass: "",
        cpass: ""
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
        const email = formData.email;
        const passcode = formData.pass;
        /*  
            perform custom checks like 
            incorrect email, incorrect password ... 
            and pass the data into database 
        */
    }

    return (
        <>
            <div className="page">
                <div className="form">
                    <h1 className="simple-heading">Sign Up</h1>

                    <div className="margin-top-20">
                        Full Name
                    </div>
                    <input
                        className="input margin-block-5"
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        autoComplete="off"
                        placeholder="John Doe"
                    />

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
                        placeholder="johndoe@gmail.com"
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

                    <div className="margin-top-20">
                        Re-type Password
                    </div>
                    <input
                        className="input margin-block-5"
                        type="password"
                        name="cpass"
                        id="cpass"
                        value={formData.cpass}
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
                        Already have an account?
                        &nbsp;
                        <span className="bold cur" onClick={() => {navigate("/signup")}}>
                            Sign In
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};
