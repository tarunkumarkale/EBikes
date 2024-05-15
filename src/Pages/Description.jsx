import React, { useState } from 'react';
import { one, two, x1b } from '../constant/Index';

const Description = () => {
  // Sample array of image URLs
  const imageUrls = [two, one, x1b];
  const [selectedImage, setSelectedImage] = useState(imageUrls[0]);

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="flex">
      <div className="w-1/2 overflow-hidden relative">
        {/* Main image */}
        <img src={selectedImage} alt="Product Image" className="w-full h-auto transition-transform duration-300 transform hover:scale-110" />
      </div>

      <div className="w-1/2 p-8">
        <h2 className="text-2xl font-bold mb-4">Product Name</h2>
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg">$100</p>
      
        </div>
        {/* Thumbnail navigation */}
        <div className="flex mt-2 justify-center">
          {imageUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Thumbnail ${index + 1}`}
              className="w-24 cursor-pointer mx-2 hover:opacity-75"
              onClick={() => handleThumbnailClick(url)}
            />
          ))}
        </div>
        <div className="flex  items-center mb-4 gap-5">


        <button className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600">Add to Cart</button>
        <p>Total Items in Cart: <span id="total-items">0</span></p>

        
        </div>
        <h1>hello description</h1>
      </div>
    </div>
  );
}

export default Description;
