"use client";
import Navbar from '@/Components/Navbar';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileInput } from "flowbite-react";
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { onAuthStateChanged } from 'firebase/auth';
import { storage, auth } from '@/utils/firebase';

type Props = {};

const FoundItemForm: React.FC<Props> = (props: Props) => {
  const initialFormData = {
    itemName: '',
    time: '',
    place: '',
    category: '',
    color: '',
    description: '',
    imageURL: '',
    phone: '',
    address: '',
    gmail: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length > 0) {
      const imageFile = files[0];
      const storageRef = ref(storage, `images/${imageFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, imageFile);

      try {
        await uploadTask;
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

        setFormData({
          ...formData,
          imageURL: downloadURL
        });

        console.log('Image uploaded and URL fetched:', downloadURL);
      } catch (error) {
        console.error('Image upload failed:', error);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await fetch('http://localhost:5000/api/found-items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Found Item Details:', result);

      setFormData(initialFormData);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
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
        <h2 className="text-3xl font-bold mb-6 text-center pt-20">Report Found Item</h2>
        <form onSubmit={handleSubmit} className="bg-gray-700 p-6 rounded-lg shadow-lg">
          <div className="mb-6">
            <label htmlFor="itemName" className="block text-gray-300">Name of Thing</label>
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
              placeholder='give a description about founded thing to help us'
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
            <div>
              <FileInput
                id="file-upload"
                onChange={handleFileChange}
                className="mt-2 block w-full px-3 py-2 bg-gray-900 border border-gray-600 rounded-md"
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block text-gray-300">Phone Number</label>
            <input
              type="text"
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
            <label htmlFor="gmail" className="block text-gray-300">Gmail</label>
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
            className="w-full py-3 mt-4 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default FoundItemForm;
