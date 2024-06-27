"use client"
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
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

async function fetchPost(postId: string): Promise<Post | null> {
  try {
    const response = await fetch(`https://seekit-server.vercel.app/api/posts/${postId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch post');
    }
    const data = await response.json();
    return data.post;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export default function PostDetailPage() {
  const { postId } = useParams(); // Extract postId from URL
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPostData = async () => {
      if (postId) {
        setLoading(true);
        const postData = await fetchPost(postId as string);
        setPost(postData);
        setLoading(false);
      }
    };

    fetchPostData();
  }, [postId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>; // Handle post not found state
  }

  return (
    <div className="min-h-screen bg-[#232931] text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8 pt-20">
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg p-6 shadow-lg">
          <div className="text-center">
            <Image
              src={post.imageURL}
              alt="Item"
              className="w-full h-60 object-cover rounded-3xl"
              width={500}
              height={300}
            />
            <h1 className="text-3xl font-bold my-4">{post.itemName}</h1>
          </div>
          <div className="mt-4 space-y-2">
            <p><strong>Time:</strong> {post.time}</p>
            <p><strong>Place:</strong> {post.place}</p>
            <p><strong>Category:</strong> {post.category}</p>
            <p><strong>Color:</strong> {post.color}</p>
            <p><strong>Description:</strong> {post.description}</p>
            <p><strong>Phone:</strong> {post.phone}</p>
            <p><strong>Address:</strong> {post.address}</p>
            <p><strong>Gmail:</strong> {post.gmail}</p>
            <p><strong>Posted by:</strong> {post.founderEmail}</p>
            {post.reunited && (
              <p className="text-green-500"><strong>Status:</strong> Reunited</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
