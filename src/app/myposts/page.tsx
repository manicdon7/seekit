"use client"
import React, { useEffect, useState, useRef } from 'react';
import { auth } from '@/utils/firebase'; 
import Navbar from '@/Components/Navbar';
import Image from 'next/image';
import { FaEllipsisH, FaWhatsapp, FaTwitter, FaCopy } from 'react-icons/fa';

type Post = {
  id: string;
  itemName: string;
  time: string;
  place: string;
  category: string;
  color: string;
  description: string;
  imageURL: string;
  phone: string;
  address: string;
  gmail: string;
  founderEmail: string;
  reunited: boolean;
};

const Page: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentUser, setCurrentUser] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
        fetchUserPosts(user.email);
      } else {
        setCurrentUser(null);
        setPosts([]);
        setLoading(false);
      }
    });

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      unsubscribe();
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const fetchUserPosts = async (userEmail: string) => {
    try {
      const response = await fetch('http://localhost:5000/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userEmail }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setPosts(data.posts || []);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setLoading(false);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setOpenDropdownId(null);
    }
  };

  const toggleDropdown = (postId: string) => {
    if (openDropdownId === postId) {
      setOpenDropdownId(null);
    } else {
      setOpenDropdownId(postId);
    }
  };

  const copyPostLink = async (post: Post) => {
    try {
      const postUrl = `${window.location.origin}/posts/${post.id}`;
      console.log(postUrl);
      
      await navigator.clipboard.writeText(postUrl);
      console.log('Link copied to clipboard:', postUrl);
    } catch (error) {
      console.error('Error copying link:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 fade-in">
        <div className="text-center">
          <p className="text-4xl font-anton">Loading...</p>
        </div>
      </div>
    );
  }

  const postCount = posts.length;
  const reunitedCount = posts.filter(post => post.reunited).length;

  const postCategories = posts.reduce((acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-[#232931] text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8 pt-20">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            {currentUser.photoURL && (
              <Image
                src={currentUser.photoURL}
                alt="Profile Picture"
                width={50}
                height={50}
                className="rounded-full"
              />
            )}
            <h1 className="text-3xl font-semibold">Welcome, {currentUser.displayName}</h1>
          </div>
        </div>
        <div className="shadow-md rounded-lg p-6 mb-6 bg-gray-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className='bg-gray-600 hover:scale-105 transition transform rounded-3xl p-3'>
              <h2 className="text-2xl font-semibold">Total Posts</h2>
              <p className="text-3xl font-bold">{postCount}</p>
            </div>
            <div className='bg-gray-600 hover:scale-105 transition transform rounded-3xl p-3'>
              <h2 className="text-2xl font-semibold">Findings Reunited</h2>
              <p className="text-3xl font-bold">{reunitedCount}</p>
            </div>
            <div className='bg-gray-600 hover:scale-105 transition transform rounded-3xl p-3'>
              <h2 className="text-2xl font-semibold">Post Categories</h2>
              {Object.keys(postCategories).map(category => (
                <p key={category} className="text-xl">{category}: {postCategories[category]}</p>
              ))}
            </div>
            <div className='bg-gray-600 hover:scale-105 transition transform rounded-3xl p-3'>
              <h2 className="text-2xl font-semibold">Recent Activity</h2>
              {posts.slice(0, 3).map(post => (
                <p key={post.id} className="text-xl">{post.itemName} - {post.time}</p>
              ))}
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-semibold mb-6">Your findings:</h2>
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-20">
            {posts.map((post) => (
              <div key={post.id} className="relative max-w-sm rounded overflow-hidden shadow-2xl bg-white transition-transform transform hover:scale-105 hover:shadow-2xl">
                <div className="absolute top-2 right-2" ref={dropdownRef}>
                  <button className="relative z-10 p-3 focus:outline-none" onClick={() => toggleDropdown(post.id)}>
                    <FaEllipsisH className="text-gray-600 hover:text-gray-800" />
                  </button>
                  {openDropdownId === post.id && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                      <div className="border-t border-gray-200">
                        <div className="py-2 px-4 hover:bg-gray-200 flex items-center space-x-2 cursor-pointer" onClick={() => copyPostLink(post)}>
                          <FaCopy className="text-purple-500" />
                          <span className='text-black'>Copy Link</span>
                        </div>
                        <div className="py-2 px-4 hover:bg-gray-200 flex items-center space-x-2 cursor-pointer">
                          <FaWhatsapp className="text-green-500" />
                          <span className='text-black'>Share on WhatsApp</span>
                        </div>
                        <div className="py-2 px-4 hover:bg-gray-200 flex items-center space-x-2 cursor-pointer">
                          <FaTwitter className="text-blue-500" />
                          <span className='text-black'>Share on Twitter</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <Image className="w-full h-60 p-3 rounded-3xl object-cover" src={post.imageURL} alt="Item" width={500} height={300} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{post.itemName}</div>
                  <p className="text-gray-700 text-base"><strong>Time:</strong> {post.time}</p>
                  <p className="text-gray-700 text-base"><strong>Place:</strong> {post.place}</p>
                  <p className="text-gray-700 text-base"><strong>Category:</strong> {post.category}</p>
                  <p className="text-gray-700 text-base"><strong>Color:</strong> {post.color}</p>
                  <p className="text-gray-700 text-base"><strong>Description:</strong> {post.description}</p>
                  <p className="text-gray-700 text-base"><strong>Phone:</strong> {post.phone}</p>
                  <p className="text-gray-700 text-base"><strong>Address:</strong> {post.address}</p>
                  <p className="text-gray-700 text-base"><strong>Gmail:</strong> {post.gmail}</p>
                  <p className="text-gray-700 text-base"><strong>Posted by:</strong> {post.founderEmail}</p>
                  {post.reunited && (
                    <p className="text-green-500 text-base"><strong>Status:</strong> Reunited</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-lg">No posts found.</p>
        )}
      </div>
    </div>
  );
};

export default Page;
