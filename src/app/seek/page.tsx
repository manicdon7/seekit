"use client"
import Navbar from '@/Components/Navbar';
import React, { useEffect, useState } from 'react';

type Props = {};

const SeekPage: React.FC<Props> = (props: Props) => {
  const [foundItems, setFoundItems] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  const filteredItems = foundItems.filter(item => 
    item.itemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.place.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white font-anton">
      <Navbar />
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-6 text-center pt-20">Found Items</h2>
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
          {filteredItems.length > 0 ? filteredItems.map((item: any) => (
            <div key={item._id} className="bg-gray-700 p-6 rounded-lg shadow-lg">
              {item.imageURL && (
                <img src={item.imageURL} alt={item.itemName} className="mb-4 rounded-lg" />
              )}
              <h3 className="text-2xl font-bold mb-2">{item.itemName}</h3>
              <hr className="border-gray-500 mb-4" />
              <div className="mb-4">
                <p><span className="font-bold">Category:</span> {item.category}</p>
                <p><span className="font-bold">Color:</span> {item.color}</p>
              </div>
              <div className="mb-4">
                <p><span className="font-bold">Description:</span> {item.description}</p>
              </div>
              <div className="mb-4">
                <p><span className="font-bold">Time Found:</span> {new Date(item.time).toLocaleString()}</p>
                <p><span className="font-bold">Place Found:</span> {item.place}</p>
              </div>
              <div className="mb-4">
                <p><span className="font-bold">Contact:</span> {item.phone}</p>
                <p><span className="font-bold">Address:</span> {item.address}</p>
                <p><span className="font-bold">Email:</span> {item.gmail}</p>
              </div>
              <a
                href={`mailto:${item.gmail}`}
                className="block mt-4 py-2 px-4 bg-blue-600 rounded-md text-center hover:bg-blue-700 transition-colors"
              >
                Contact via Email
              </a>
            </div>
          )) : (
            <p className="text-center w-full">No items found matching your search criteria.</p>
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
