import React, { useRef } from 'react';

const Carousel = () => {
  const carouselRef = useRef(null);

  const handlePrevClick = () => {
    carouselRef.current.scrollBy({
      left: -carouselRef.current.offsetWidth,
      behavior: 'smooth'
    });
  };

  const handleNextClick = () => {
    carouselRef.current.scrollBy({
      left: carouselRef.current.offsetWidth,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative">
      <div className="carousel max-w-xl flex" ref={carouselRef}>
        {/* Carousel items */}
        <div className="carousel-item">
          <img src="https://source.unsplash.com/random/800x600" alt="Carousel Image 1" className="w-full h-96 object-cover" />
        </div>
        <div className="carousel-item">
          <img src="https://source.unsplash.com/random/800x600?2" alt="Carousel Image 2" className="w-full h-96 object-cover" />
        </div>
        <div className="carousel-item">
          <img src="https://source.unsplash.com/random/800x600?3" alt="Carousel Image 3" className="w-full h-96 object-cover" />
        </div>
      </div>

      {/* Carousel controls */}
      <div className="absolute inset-y-0 left-0 flex items-center justify-start pl-4">
        <button className="carousel-control-prev bg-gray-800 hover:bg-gray-700 text-white rounded-full p-2 focus:outline-none" onClick={handlePrevClick}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center justify-end pr-4">
        <button className="carousel-control-next bg-gray-800 hover:bg-gray-700 text-white rounded-full p-2 focus:outline-none" onClick={handleNextClick}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
