import React from 'react';

interface Review {
  name: string;
  message: string;
  rating: number;
}

interface ReviewListProps {
  reviews: Review[];
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Reviews</h2>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review, index) => (
            <li key={index} className="mb-4 p-4 border rounded">
              <h3 className="font-semibold">{review.name}</h3>
              <p>{review.message}</p>
              <div className="text-yellow-500">
                {Array.from({ length: review.rating }, (_, i) => (
                  <span key={i}>★</span>
                ))}
                {Array.from({ length: 5 - review.rating }, (_, i) => (
                  <span key={i} className="text-gray-300">★</span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews yet. Be the first to review!</p>
      )}
    </div>
  );
};

export default ReviewList;
