import React, { useState } from 'react';
import ReviewForm from './Reviewform';
import ReviewList from './ReviewList';
import { FaPlus } from 'react-icons/fa';

const Review: React.FC = () => {
  const [reviews, setReviews] = useState<{ name: string; message: string; rating: number }[]>([]);
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const addReview = (newReview: { name: string; message: string; rating: number }) => {
    setReviews([...reviews, newReview]);
    setShowForm(false); // Close the form after submitting a review
  };

  const handleCloseForm = () => {
    setShowForm(false); // Close the form when called
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="flex flex-grow">
        <main className="flex-grow p-4 relative">
          <section id="reviews">
            <ReviewList reviews={reviews} />
          </section>
          <section
            id="submit"
            className={`fixed inset-0 flex items-center justify-center ${showForm ? 'z-50' : 'hidden'}`}
          >
            <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
            <div className="bg-white p-6 rounded-lg shadow-lg z-50">
              {showForm && <ReviewForm addReview={addReview} onClose={handleCloseForm} />}
            </div>
          </section>
          {!showForm && (
            <button
              className="fixed bottom-4 right-4 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 z-50"
              onClick={toggleForm}
            >
              <FaPlus size={20} />
            </button>
          )}
        </main>
      </div>
    </div>
  );
};

export default Review;
