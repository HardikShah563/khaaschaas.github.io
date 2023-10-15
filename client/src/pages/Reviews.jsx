// importing from react
import { useState } from 'react';
// importing components
import Review from '../components/Review';
// importing icons
import { AiFillStar } from 'react-icons/ai';
// importing data
import reviewData from "../config/reviews";

export default function Reviews() {
    const displayReviews = [];
    var counter = 0;

    reviewData.map(review => {
        counter++;
        displayReviews.push(review);
    });

    const [formData, setFormData] = useState({
        name: "",
        stars: 0,
        review: "",
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

    const [stars, setStars] = useState({
        star1: false,
        star2: false,
        star3: false,
        star4: false,
        star5: false,
    });

    function handleStars(event) {
        const { name, value } = event.target;
        setStars(prevStars => ({
            ...prevStars,
            [name]: !stars.star1
        }))
    }

    return (
        <>
            <div className="page-contents reviews-section-parent">
                <div className="story-title">
                    <h1 className="yellow-box-title stella">KHAAS REVIEWS</h1>
                </div>

                <div className="reviews flex">
                    {displayReviews.map(review => (
                        <>
                            <Review
                                id={review.id}
                                name={review.name}
                                rating={review.rating}
                                review={review.review}
                            />
                        </>
                    ))}
                </div>
            </div>

            <div className="add-a-review">
                <div className="section">
                    <div className="big-heading bobby">
                        ADD A REVIEW
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
                            Stars
                        </div>
                        <div className="star-div">
                            <AiFillStar 
                                className={`star-icon ${stars.star1 ? "yellow" : ""}`} 
                                id="star-1" size={35}
                                onClick={handleStars}
                            />

                            <AiFillStar className="star-icon" id="star-2" size={35} />
                            <AiFillStar className="star-icon" id="star-3" size={35} />
                            <AiFillStar className="star-icon" id="star-4" size={35} />
                            <AiFillStar className="star-icon" id="star-5" size={35} />
                        </div>

                        <div className="input-title margin-top-15 bobby">
                            Message
                        </div>
                        <textarea
                            className="input textarea margin-block-5"
                            name="review"
                            id="review"
                            value={formData.review}
                            onChange={handleChange}
                            autoComplete="off"
                            placeholder="Leave a review"
                        ></textarea>

                        <button
                            className="input form-btn margin-top-20 cur"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

