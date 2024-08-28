"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Navbar from "@/Components/Navbar";
import Head from "next/head";

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

export default function PostDetailPage() {
  const router = useRouter();
  const { postId } = router.query;
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  async function fetchPost(postId: string): Promise<Post | null> {
    try { 
      const response = await fetch(
        `https://seekit-server.vercel.app/api/posts/${postId}`
      );
      if (!response.ok) {
        console.error("Response status:", response.status);
        throw new Error("Failed to fetch post");
      }
      const data = await response.json();
      console.log(data);
      return data.post;
    } catch (error) {
      console.error("Error fetching post:", error);
      setError("An error occurred while fetching the post.");
      return null;
    }
  }

  useEffect(() => {
    const fetchPostData = async () => {
      if (postId && typeof postId === "string") {
        setLoading(true);
        const postData = await fetchPost(postId);
        if (!postData) {
          router.push("/404");
        } else {
          setPost(postData);
        }
        setLoading(false);
      }
    };

    fetchPostData();
  }, [postId, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-[#232931] text-white">
      <Head>
        <title>{post.itemName}</title>
        <meta property="og:title" content={post.itemName} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content={post.imageURL} />
        <meta
          property="og:url"
          content={`https://seekit.vercel.app/myposts/${post._id}`}
        />
        <meta property="og:type" content="article" />
      </Head>
      <Navbar />  
      <div className="container mx-auto px-4 py-8 pt-20">
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg p-6 shadow-lg">
          <div className="text-center">
            {post && (
              <>
                <Image
                  src={post.imageURL}
                  alt="Item"
                  className="w-full h-60 object-cover rounded-3xl"
                  width={500}
                  height={300}
                />
                <h1 className="text-3xl font-bold my-4">{post.itemName}</h1>
              </>
            )}
          </div>
          <div className="mt-4 space-y-2">
            {post && (
              <>
                <p>
                  <strong>Time:</strong> {post.time}
                </p>
                <p>
                  <strong>Place:</strong> {post.place}
                </p>
                <p>
                  <strong>Category:</strong> {post.category}
                </p>
                <p>
                  <strong>Color:</strong> {post.color}
                </p>
                <p>
                  <strong>Description:</strong> {post.description}
                </p>
                <p>
                  <strong>Phone:</strong> {post.phone}
                </p>
                <p>
                  <strong>Address:</strong> {post.address}
                </p>
                <p>
                  <strong>Gmail:</strong> {post.gmail}
                </p>
                <p>
                  <strong>Posted by:</strong> {post.founderEmail}
                </p>
                {post.reunited && (
                  <p className="text-green-500">
                    <strong>Status:</strong> Reunited
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
