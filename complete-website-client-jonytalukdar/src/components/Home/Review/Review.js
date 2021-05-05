import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const Review = () => {
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    fetch('https://shrouded-oasis-19794.herokuapp.com/reviews')
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, []);

  return (
    <div className="text-center py-4">
      <h1 className="py-3">
        Texti<span style={{ color: '#24bd7c' }}>monial</span>
      </h1>
      <div className="row">
        {reviews.map((review) => (
          <ReviewCard review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default Review;
