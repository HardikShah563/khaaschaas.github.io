import React from 'react';
import Reviews from '../components/Reviews.jsx';
import dp from '../media/dp.jpg'
const reviewsData = [
  {
    name: 'John Doe',
    profileImg: dp,
    rating: 4,
    reviewContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'John Doe',
    profileImg: dp,
    rating: 5,
    reviewContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'John Doe',
    profileImg: dp,
    rating: 4.5,
    reviewContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  // Add more review objects here
];

const Review = () => {
return (<>
<div className='page-contents'>
<div className="review-page">
      <h1 className="big-heading bobby">Customer Reviews</h1>
      <div className="reviews-container">
        {reviewsData.map((review, index) => (
          <Reviews key={index} {...review} />
        ))}
      </div>
    </div>
</div>

</>)
    };
    export default Review;
