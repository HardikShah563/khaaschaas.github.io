import React from 'react';
import '../style/review.css'

const Reviews = ({ name, profileImg, rating, reviewContent }) => {
  return (
    <div className="review">
    <img src={profileImg} alt={`${name}'s profile`} className="profile-img" />
    <div className="review-details">
      <div className="review-header">
        <h3 className="name">{name}</h3>
        <div className="stars">
          {Array.from({ length: rating }, (_, index) => (
            <span key={index} className="star">
              ★
            </span>
          ))}
        </div>
      </div>
      <p className="review-content">{reviewContent}</p>
    </div>
  </div>
  );
};

export default Reviews;
