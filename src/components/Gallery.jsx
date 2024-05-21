import React, { useState } from 'react';
import { pro_java, wilier, BLK, x1b, X2, TRex } from '../constant/IndexOne'; // Update the imports as necessary

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
            <img src={image} alt={`Gallery ${index}`} className="w-full h-auto object-cover rounded" />
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <button className="absolute top-4 right-4 text-white text-3xl" onClick={closeImage}>&times;</button>
          <div className="relative">
            <img src={images[currentImage]} alt={`Gallery ${currentImage}`} className="max-h-screen" />
            <button className="absolute top-1/2 left-0 text-white text-3xl transform -translate-y-1/2" onClick={prevImage}>
              &#10094;
            </button>
            <button className="absolute top-1/2 right-0 text-white text-3xl transform -translate-y-1/2" onClick={nextImage}>
              &#10095;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
