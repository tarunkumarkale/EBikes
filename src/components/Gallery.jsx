import React, { useState } from 'react';
import { pro_java, wilier, BLK, x1b, X2, TRex } from '../constant/IndexOne'; // Update the imports as necessary
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Gallery = () => {
  const images = [pro_java, wilier, BLK, x1b, X2, TRex];
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openImage = (index) => {
    setCurrentImage(index);
    setIsOpen(true);
  };

  const closeImage = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="cursor-pointer" onClick={() => openImage(index)}>
            <img
              src={image}
              alt={`Gallery ${index}`}
              className={`w-full h-auto object-cover rounded ${
                index % 3 === 0 ? 'rounded-full' : index % 3 === 1 ? 'rounded-lg' : 'rounded-xl'
              }`}
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <button className="absolute top-4 right-4 text-white text-3xl" onClick={closeImage}>&times;</button>
          <div className="relative flex justify-center items-center">
            <button
              className="absolute left-0 text-black text-3xl transform -translate-y-1/2 p-4"
              onClick={prevImage}
              style={{ top: '50%' }}
            >
              <FaArrowLeft />
            </button>
            <img src={images[currentImage]} alt={`Gallery ${currentImage}`} className="max-h-screen" />
            <button
              className="absolute right-0 text-black text-3xl transform -translate-y-1/2 p-4"
              onClick={nextImage}
              style={{ top: '50%' }}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
