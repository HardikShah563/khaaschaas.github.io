// importing from react
import React from 'react';
// importing components
import Review from '../components/Review';

export default function Reviews() {
    return (
        <>
            <div className='page-contents'>
                <div className="review-page">
                    <h1 className="big-heading bobby">Customer Reviews</h1>
                    {/* <div className="reviews-container">
                        {reviewsData.map((review, index) => (
                            <Review key={index} {...review} />
                        ))}
                    </div> */}
                </div>
            </div>
        </>
    );
};

