"use client";
import Navbar from '@/Components/Navbar';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileInput, Label } from "flowbite-react";

type Props = {};

const FoundItemForm: React.FC<Props> = (props: Props) => {
  const [formData, setFormData] = useState({
    itemName: '',
    time: '',
    place: '',
    category: '',
    color: '',
    description: '',
    image: null as File | null,
    phone: '',
    address: '',
    gmail: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length > 0) {
      setFormData({
        ...formData,
        image: files[0]
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Submit form data to the platform's backend or perform necessary actions
    console.log('Found Item Details:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white font-anton">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="container mx-auto p-8"
      >
        <h2 className="text-4xl font-bold mb-10 text-center pt-20">Report Found Item</h2>
        <form onSubmit={handleSubmit} className="bg-gray-700 p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label htmlFor="itemName" className="block text-gray-300">Name of the Item</label>
            <input
              type="text"
              id="itemName"
              name="itemName"
              value={formData.itemName}
              onChange={handleChange}
              className="mt-2 block w-full px-3 py-2 bg-gray-900 border border-gray-600 rounded-md"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="time" className="block text-gray-300">Time Found</label>
            <input
              type="datetime-local"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="mt-2 block w-full px-3 py-2 bg-gray-900 border border-gray-600 rounded-md"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="place" className="block text-gray-300">Place Found</label>
            <input
              type="text"
              id="place"
              name="place"
              value={formData.place}
              onChange={handleChange}
              className="mt-2 block w-full px-3 py-2 bg-gray-900 border border-gray-600 rounded-md"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="category" className="block text-gray-300">Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-2 block w-full px-3 py-2 bg-gray-900 border border-gray-600 rounded-md"
              required
            >
              <option value="" disabled>Select category</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Accessories">Accessories</option>
              <option value="Documents">Documents</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="color" className="block text-gray-300">Color</label>
            <input
              type="text"
              id="color"
              name="color"
              value={formData.color}
              onChange={handleChange}
              className="mt-2 block w-full px-3 py-2 bg-gray-900 border border-gray-600 rounded-md"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="description" className="block text-gray-300">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-2 block w-full px-3 py-2 bg-gray-900 border border-gray-600 rounded-md"
              rows={3}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="image" className="block text-gray-300">Upload Image (optional)</label>
            <FileInput
              id="image"
              name="image"
              onChange={handleFileChange}
              className="mt-2 block w-full px-3 py-2 bg-gray-900 border border-gray-600 rounded-md"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block text-gray-300">Phone Number or What's app</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-2 block w-full px-3 py-2 bg-gray-900 border border-gray-600 rounded-md"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="address" className="block text-gray-300">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-2 block w-full px-3 py-2 bg-gray-900 border border-gray-600 rounded-md"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="gmail" className="block text-gray-300">Gmail (optional)</label>
            <input
              type="email"
              id="gmail"
              name="gmail"
              value={formData.gmail}
              onChange={handleChange}
              className="mt-2 block w-full px-3 py-2 bg-gray-900 border border-gray-600 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#4ECCA3] hover:bg-green-600 text-white py-2 rounded-md transition duration-300 ease-in-out"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default FoundItemForm;
