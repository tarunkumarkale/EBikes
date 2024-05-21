import React from 'react';
import { CiDeliveryTruck } from "react-icons/ci";
import { LiaTruckLoadingSolid } from "react-icons/lia";
import { BsBicycle } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import Gallery from '../components/Gallery';


const Card = ({ text, icon }) => (
  <div className="rounded overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
    <div className="relative">
      <div className='flex justify-center items-center'>
        {icon}
      </div>
      <div className="w-full h-40 flex items-center justify-center">
        <p className="text-center text-2xl font-bold text-gray-700">{text}</p>
      </div>
    </div>
  </div>
);

const Variant2 = () => {
    const navigate = useNavigate();
  const iconSize = 50; // Define the size of the icons

  const cards = [
    {
      text: "Free Delivery on Orders Over 10000 INR",
      icon: <CiDeliveryTruck size={iconSize} />
    },
    {
      text: "30-Day Return Policy, No Questions Asked",
      icon: <LiaTruckLoadingSolid size={iconSize} />
    },
    {
      text: "Ready to Ride Full-Function Bike",
      icon: <BsBicycle size={iconSize} />
    }
  ];

  return (

    <>
    <div className=' mt-20  flex justify-center items-center'> <button class="btn-hover-border" onClick={()=>navigate('/Gallery')}>Visit our gallery</button></div>
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {cards.map((card, index) => (
          <Card
            key={index}
            text={card.text}
            icon={card.icon}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default Variant2;
