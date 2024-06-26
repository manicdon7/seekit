"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { auth } from '@/utils/firebase';
import Navbar from '@/Components/Navbar';

type Post = {
  _id: string;
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

type User = {
  email: string;
  displayName: string;
  photoURL?: string | null;
};

const PostDetailsPage: React.FC = () => {
  const router = useRouter();
  const { postId } = router.query;
  const [post, setPost] = useState<Post | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await auth.currentUser;
        if (user) {
          const { email, displayName, photoURL } = user;
          setCurrentUser({
            email: email!,
            displayName: displayName!,
            photoURL: photoURL ?? null,
          });
          await fetchPostDetails(postId as string);
        } else {
          setCurrentUser(null);
          setPost(null);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
        setCurrentUser(null);
        setPost(null);
        setLoading(false);
      }
    };

    if (postId) {
      fetchData();
    }

    return () => {
      // Cleanup if needed
    };
  }, [postId]);

  const fetchPostDetails = async (postId: string) => {
    try {
      const response = await fetch(`https://seekit-server.vercel.app/api/posts/${postId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setPost(data.post);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching post details:', error);
      setPost(null);
      setLoading(false);
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

  if (!post) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 fade-in">
        <div className="text-center">
          <p className="text-4xl font-anton">Post not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#232931] text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8 pt-20">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            {currentUser?.photoURL && (
              <Image
                src={currentUser.photoURL}
                alt="Profile Picture"
                width={50}
                height={50}
                className="rounded-full"
              />
            )}
            <h1 className="text-3xl font-semibold">
              Welcome, {currentUser?.displayName}
            </h1>
          </div>
        </div>
        <div className="shadow-md rounded-lg p-6 mb-6 bg-gray-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-600 hover:scale-105 transition transform rounded-3xl p-3">
              <h2 className="text-2xl font-semibold">Post Details</h2>
              <div className="font-bold text-xl mb-2">{post.itemName}</div>
              <p className="text-gray-700 text-base">
                <strong>Time:</strong> {post.time}
              </p>
              <p className="text-gray-700 text-base">
                <strong>Place:</strong> {post.place}
              </p>
              <p className="text-gray-700 text-base">
                <strong>Category:</strong> {post.category}
              </p>
              <p className="text-gray-700 text-base">
                <strong>Color:</strong> {post.color}
              </p>
              <p className="text-gray-700 text-base">
                <strong>Description:</strong> {post.description}
              </p>
              <p className="text-gray-700 text-base">
                <strong>Phone:</strong> {post.phone}
              </p>
              <p className="text-gray-700 text-base">
                <strong>Address:</strong> {post.address}
              </p>
              <p className="text-gray-700 text-base">
                <strong>Gmail:</strong> {post.gmail}
              </p>
              <p className="text-gray-700 text-base">
                <strong>Posted by:</strong> {post.founderEmail}
              </p>
              {post.reunited && (
                <p className="text-green-500 text-base">
                  <strong>Status:</strong> Reunited
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailsPage;
