"use client"
import React, { useEffect, useState } from 'react';

type Props = {};

const SeekPage: React.FC<Props> = (props: Props) => {
  const [foundItems, setFoundItems] = useState([]);

  useEffect(() => {
    const fetchFoundItems = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/found-items');
        const data = await response.json();
        setFoundItems(data);
      } catch (error) {
        console.error('Error fetching found items:', error);
      }
    };
  
    fetchFoundItems();
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white font-anton">
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-6 text-center pt-20">Found Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foundItems.map((item: any) => (
            <div key={item._id} className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">{item.itemName}</h3>
              <hr className="border-gray-500 mb-4" />
              <p><span className="font-bold">Time Found:</span> {new Date(item.time).toLocaleString()}</p>
              <p><span className="font-bold">Place Found:</span> {item.place}</p>
              <p><span className="font-bold">Category:</span> {item.category}</p>
              <p><span className="font-bold">Color:</span> {item.color}</p>
              <p><span className="font-bold">Description:</span> {item.description}</p>
              {item.imageURL && (
                <img src={item.imageURL} alt={item.itemName} className="mt-4 rounded-lg" />
              )}
              <p><span className="font-bold">Contact:</span> {item.phone}</p>
              <p><span className="font-bold">Address:</span> {item.address}</p>
              <p><span className="font-bold">Email:</span> {item.gmail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeekPage;
