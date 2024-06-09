


import React, { useEffect } from 'react';
import Varient2 from './Varient2';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Card = ({ imageUrl, Bike, alt }) => (
  <div className="rounded overflow-hidden shadow-lg relative" data-aos="fade-up">
    <a href="#">
      <img className="w-full h-64 object-cover" src={imageUrl} alt={alt} />
      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 hover:bg-opacity-75 transition duration-300">
        <div className="text-white text-2xl font-bold text-center">{Bike}</div>
      </div>
    </a>
  </div>
);

const Varient = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const cards = [
    {
      imageUrl: "https://images.unsplash.com/photo-1499438182938-87d87862e154?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Bike: "Regular bike",
      alt: 'regular bike'
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1618520585561-06053c97b45a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Bike: "E Bike",
      alt: 'e bike'
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1620331890593-1ff5d0b6c328?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Bike: "Rent Bike",
      alt: 'rent bike'
    }
  ];

  return (
    <div>
      <div className='flex justify-center items-center mt-11' data-aos="fade-down">
        <h1 className='text-6xl font-bold'>
          Ou<span className='text-gray-600'>r</span> Varie
          <span className='text-green-400'>n</span>
          <span className='text-red-600'>t</span>s
        </h1>
      </div>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <Card key={index} imageUrl={card.imageUrl} Bike={card.Bike} alt={card.alt} />
          ))}
        </div>
        <Varient2 />
      </div>
    </div>
  );
};

export default Varient;
