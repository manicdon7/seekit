import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

interface ReviewFormProps {
  addReview: (review: { name: string; message: string; rating: number }) => void;
  onClose: () => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ addReview, onClose }) => {
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [rating, setRating] = useState<number>(0); // State for star rating, default 0 means no rating

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && message && rating > 0) { // Ensure all fields are filled
      addReview({ name, message, rating });
      setName('');
      setMessage('');
      setRating(0); // Reset rating after submission
      onClose(); // Close the form using onClose function from props
    } else {
      alert('Please fill in all fields and select a rating.');
    }
  };

  const handleClose = () => {
    setName('');
    setMessage('');
    setRating(0);
    onClose(); // Close the form using onClose function from props
  };

  const handleRatingChange = (value: number) => {
    setRating(value);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 w-full max-w-md bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Submit Your Review</h2>
        <button
          type="button"
          className="text-gray-500 hover:text-gray-600 focus:outline-none"
          onClick={handleClose}
        >
          <FaTimes size={20} />
        </button>
      </div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 mb-2 border rounded text-black"
        placeholder="Your name"
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full p-2 mb-2 border rounded text-black
        33"
        placeholder="Your review message..."
        rows={4}
      ></textarea>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Rate your experience:</label>
        <div>
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              type="button"
              className={`text-xl ${value <= rating ? 'text-yellow-500' : 'text-gray-300'} focus:outline-none`}
              onClick={() => handleRatingChange(value)}
            >
              ★
            </button>
          ))}
        </div>
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default ReviewForm;
