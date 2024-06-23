"use client";
import React, { useEffect, useState } from 'react';
import { auth } from '@/utils/firebase'; 

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
};

const Page: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentUser, setCurrentUser] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

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

    return () => unsubscribe();
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

  const handleFetchPosts = async () => {
    try {
      if (currentUser) {
        await fetchUserPosts(currentUser.email);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  if (!currentUser) {
    return <div>Please sign in to view posts.</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome, {currentUser.displayName}</h1>
      <h2>Your Posts:</h2>
      <button onClick={handleFetchPosts}>Fetch Posts</button>
      {posts.length > 0 ? (
        <div className="card-container">
          {posts.map((post) => (
            <div key={post.id} className="card">
              <h3>{post.itemName}</h3>
              <p>Time: {post.time}</p>
              <p>Place: {post.place}</p>
              <p>Category: {post.category}</p>
              <p>Color: {post.color}</p>
              <p>Description: {post.description}</p>
              <p>Phone: {post.phone}</p>
              <p>Address: {post.address}</p>
              <p>Gmail: {post.gmail}</p>
              <p>Posted by: {post.userId}</p>
              {/* You can render the image using <img src={post.imageURL} alt="Item" /> */}
            </div>
          ))}
        </div>
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
};

export default Page;
