import React from 'react';


const Card = ({ imageUrl, date, category, title, description, readTime }) => (
  <div className="rounded overflow-hidden shadow-lg">
    <div className="relative">
      <a href="#">
        <img className="w-full" src={imageUrl} alt={title} />
        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
      </a>
   </div>
    <div className="px-6 py-4">
      <a href="#" className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">{title}</a>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
    <div className="px-6 py-4 flex items-center">
      <span className="py-1 text-sm font-regular text-gray-900 mr-1 flex items-center">
        <svg height="13px" width="13px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
        </svg>
        <span className="ml-1">{readTime}</span>
      </span>
    </div>
  </div>
);

const Varient2= () => {
  const cards = [
    {
      imageUrl: "https://www.shutterstock.com/image-vector/continuous-one-line-drawing-delivery-truck-2251779571",
    
    
    },
    {
      imageUrl: "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    
    },
    {
      imageUrl: "https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    
    }
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {cards.map((card, index) => (
          <Card
            key={index}
            imageUrl={card.imageUrl}
            
          />
        ))}
      </div>
    </div>
  );
};

export default Varient2;
