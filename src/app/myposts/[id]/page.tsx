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

interface PostDetailPageProps {
  params: {
    id: string;
  };
}

export default async function PostDetailPage({ params }: PostDetailPageProps) {
  const { id } = params;

  // Fetch the post data from the API
  const res = await fetch(`https://seekit-server.vercel.app/api/posts/${id}`);
  if (!res.ok) {
    // Handle errors here, like showing a custom error message
    return <div>Failed to load post data</div>;
  }

  const data = await res.json();
  const post = data.post;

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
          </div>
        </div>
      </div>
    </div>
  );
}
