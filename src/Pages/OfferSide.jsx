import React, { useState } from 'react';
import { Hiland_29, Stride_2 } from '../constant/IndexOne';

const NewcycleSide = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentDiscount, setCurrentDiscount] = useState(0);
  
  const images = [
    Stride_2,
    Hiland_29,
  ];

  const discounts = [
    { first: "32% off", second: "Stride 2" },
    { first: "38% off", second: "Hiland 29" },
  ];

  const handlePrevClick = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
    setCurrentDiscount((prevDiscount) => (prevDiscount === 0 ? discounts.length - 1 : prevDiscount - 1));
  };

  const handleNextClick = () => {
    setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    setCurrentDiscount((prevDiscount) => (prevDiscount === discounts.length - 1 ? 0 : prevDiscount + 1));
  };

  return (
    <div className="relative max-w-xl mx-auto">
      <div className="relative h-96 overflow-hidden">
        <img 
          src={images[currentImage]} 
          alt={`Carousel Image ${currentImage + 1}`} 
          className="object-cover w-full h-full transition-opacity duration-500" 
        />
        <span className="absolute pb-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-semibold text-white md:text-2xl dark:text-gray-800">
          <span className='text-red-700'>{discounts[currentDiscount].first}</span> 
           {discounts[currentDiscount].second}
        </span>
      </div>

      {/* Carousel controls */}
      <div className="absolute inset-y-0 left-0 flex items-center justify-start pl-4">
        <button 
          className="carousel-control-prev bg-gray-800 hover:bg-gray-700 text-white rounded-full p-2 focus:outline-none" 
          onClick={handlePrevClick}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center justify-end pr-4">
        <button 
          className="carousel-control-next bg-gray-800 hover:bg-gray-700 text-white rounded-full p-2 focus:outline-none" 
          onClick={handleNextClick}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NewcycleSide;
