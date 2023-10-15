// importing from react
import { useState } from "react";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        typeOfMsg: "",
        msg: "",
    });

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value,
        }))
    }

    function handleSubmit(event) {
        console.log("Form submit ho raha hai!");
        console.log(formData);
    }

    return (
        <>
            <div className="section">
                <div className="yellow-box-title stella">
                    JOIN THE KHAAS CLUB
                </div>

                <div className="form home-form">
                    <div className="input-title margin-top-15 bobby">
                        Name
                    </div>
                    <input
                        className="input margin-block-5"
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        autoComplete="off"
                        placeholder="Full Name"
                    />

                    <div className="input-title margin-top-15 bobby">
                        E-mail
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
                    
                    <div className="input-title margin-top-15 bobby">
                        What is this message?
                    </div>
                    <select 
                        className="input margin-block-5"
                        name="typeOfMsg" 
                        id="typeOfMsg"
                        value={formData.typeOfMsg}
                        onChange={handleChange}
                        required
                    >
                        <option value="">-- None --</option>
                        <option value="review">Review</option>
                        <option value="opinion">Opinion</option>
                        <option value="suggest">Suggestion</option>
                    </select>

                    <div className="input-title margin-top-15 bobby">
                        Message
                    </div>
                    <textarea
                        className="input textarea margin-block-5"
                        name="msg"
                        id="msg"
                        value={formData.msg}
                        onChange={handleChange}
                        autoComplete="off"
                        placeholder="Leave a message"
                    ></textarea>

                    <button
                        className="input form-btn margin-top-20 cur"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </>
    );
};
