// importing from react
import React from 'react';
// importing stylesheet
import '../style/review.css'
// importing icons
import { BiUser } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';

export default function Review(props) {
    const stars = [];

    for (let i = 0; i < props.rating; i++) {
        stars.push(<AiFillStar />);
    }

    return (
        <>
            <div className="review" key={props.id}>
                <div className="flex user-info">
                    <div>
                        <BiUser className="user-icon" size={45} />
                    </div>
                    <div>
                        <div className="user-name">{props.name}</div>
                        <div className="user-rating">
                            {stars}
                        </div>
                    </div>
                </div>
                <div>
                    {props.review}
                </div>
            </div>
        </>
    );
};
