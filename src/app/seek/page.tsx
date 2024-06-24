"use client";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";

type FoundItem = {
  _id: string;
  itemName: string;
  category: string;
  color: string;
  description: string;
  time: string;
  place: string;
  phone: string;
  address: string;
  gmail: string;
  imageURL?: string;
};

const SeekPage: React.FC = () => {
  const [foundItems, setFoundItems] = useState<FoundItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchFoundItems = async () => {
      try {
        const response = await fetch(
          "https://seekit-server.vercel.app/api/found-items"
        );
        const data = await response.json();
        setFoundItems(data);
      } catch (error) {
        console.error("Error fetching found items:", error);
      }
    };

    fetchFoundItems();
  }, []);

  const filteredItems = foundItems.filter(
    (item) =>
      item.itemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.place.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white font-anton">
      <Head>
        <title>Found Items - Seekit</title>
        <meta
          name="description"
          content="Explore found items shared by the community on Seekit."
        />
        <meta property="og:title" content="Found Items - Seekit" />
        <meta
          property="og:description"
          content="Explore found items shared by the community on Seekit."
        />
        <meta
          property="og:image"
          content={
            filteredItems.length > 0
              ? filteredItems[0].imageURL
              : "/default-image.jpg"
          }
        />
        <meta property="og:url" content="https://seekit.vercel.app/seek" />
        <meta property="og:type" content="website" />
      </Head>

      <Navbar />
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-6 text-center pt-20">
          Found Items
        </h2>
        <div className="mb-6 text-center">
          <input
            type="text"
            placeholder="Find your lost items..."
            className="px-4 py-2 bg-gray-900 border border-gray-600 rounded-md w-1/2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.length > 0 ? (
            filteredItems.map((item: FoundItem) => (
              <div
                key={item._id}
                className="bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col"
              >
                {item.imageURL && (
                  <div className="mb-4 rounded-lg overflow-hidden h-64 w-full">
                    <Image
                      src={item.imageURL}
                      alt={item.itemName}
                      layout="responsive"
                      width={500} // Adjust the width according to your design
                      height={300} // Adjust the height according to your design
                      objectFit="cover"
                    />
                  </div>
                )}

                <div className="flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-2">{item.itemName}</h3>
                  <hr className="border-gray-500 mb-4" />
                  <div className="mb-4">
                    <p>
                      <span className="font-bold">Category:</span>{" "}
                      {item.category}
                    </p>
                    <p>
                      <span className="font-bold">Color:</span> {item.color}
                    </p>
                  </div>
                  <div className="mb-4 flex-grow">
                    <p>
                      <span className="font-bold">Description:</span>{" "}
                      {item.description}
                    </p>
                  </div>
                  <div className="mb-4">
                    <p>
                      <span className="font-bold">Time Found:</span>{" "}
                      {new Date(item.time).toLocaleString()}
                    </p>
                    <p>
                      <span className="font-bold">Place Found:</span>{" "}
                      {item.place}
                    </p>
                  </div>
                  <div className="mb-4">
                    <p>
                      <span className="font-bold">Contact:</span> {item.phone}
                    </p>
                    <p>
                      <span className="font-bold">Address:</span> {item.address}
                    </p>
                    <p>
                      <span className="font-bold">Email:</span> {item.gmail}
                    </p>
                  </div>
                  <a
                    href={`mailto:${item.gmail}`}
                    className="block mt-4 py-2 px-4 bg-blue-600 rounded-md text-center hover:bg-blue-700 transition-colors"
                  >
                    Contact via Email
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center w-full">
              No items found matching your search criteria.
            </p>
          )}
        </div>
      </div>
      <footer className="bg-gray-800 p-4 text-center text-gray-400 mt-8">
        <p>&copy; 2024 Seekit. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SeekPage;
