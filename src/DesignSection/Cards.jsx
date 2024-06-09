

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ipsum } from "../constant/Index";

const Cards = ({ isButtonClicked }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const cards = [
    { id: 1, title: 'Card 1', content: 'This is the first card.', animation: 'fade-up' },
    { id: 2, title: 'Card 2', content: 'This is the second card.', animation: 'fade-left' },
    { id: 3, title: 'Card 3', content: 'This is the third card.', animation: 'fade-right' },
    { id: 4, title: 'Card 4', content: 'This is the fourth card.', animation: 'zoom-in' },
    { id: 5, title: 'Card 5', content: 'This is the fifth card.', animation: 'zoom-out' },
    { id: 6, title: 'Card 6', content: 'This is the sixth card.', animation: 'flip-left' },
    { id: 7, title: 'Card 7', content: 'This is the seventh card.', animation: 'flip-right' },
    { id: 8, title: 'Card 8', content: 'This is the eighth card.', animation: 'slide-up' },
  ];

  return (
    <div className='w-full flex justify-around gap-14 sm:gap-32 flex-wrap bg-white'>
      {cards.map((card) => (
        <div key={card.id} className="w-[28%] sm:w-[21%] h-auto bg-white shadow-lg rounded-lg overflow-hidden" data-aos={card.animation}>
          <div className="relative group">
            <img className="w-full h-auto" src={ipsum} alt="text" />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
            <div className="absolute inset-x-0 bottom-0 bg-gray-800 opacity-0 group-hover:opacity-100 transition-transform transform translate-y-full group-hover:translate-y-0 mb-14">
              <div className="px-6 py-4 text-gray-400 flex gap-5">
                <button className="font-bold px-4 py-2 text-sm bg-white hover:bg-gray-300 hover:text-gray-500 transition duration-300 ease-in-out">
                  more info
                </button>
                <button className="font-bold px-4 py-2 text-sm text-white bg-green-600 hover:bg-black transition duration-300 ease-in-out">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center h-16'>
              <h1 className='text-black font-serif uppercase'>ipsum</h1>
              <h1 className='text-gray-400 font-serif'>Rs:3200</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;

