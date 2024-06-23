import React, { useContext, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ForRegularBicycle from '../constant/IndexRegular';
import { useNavigate } from 'react-router-dom';
import { AllDataContext } from '../context/MyContext';


const CardForRegular = ({scrollToTop }) => {
  const navigate = useNavigate();

  const { setRentData } = useContext(AllDataContext);


  useEffect(() => {
    AOS.init({
      duration: 1800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const handleRentNow = (card) => {
    setRentData({ 
      description: card.description, 
      image: card.image, 
      type: card.type, 
      price: card.price,
      comp: card.comp ,tax:card.tax 
    });
    if (scrollToTop) {
      scrollToTop();
    }
    navigate('/Description');
  };

  return (
    <div className="w-full flex justify-around gap-14 sm:gap-32 flex-wrap bg-white mb-4">
      {ForRegularBicycle.map((card) => (
        <div key={card.id} className="w-[28%] sm:w-[21%] h-auto bg-white shadow-2xl rounded-lg overflow-hidden" data-aos="fade-up">
          <div className="relative group">
            <img className="w-full h-auto" src={card.image} alt={card.description} />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
            <div className="absolute inset-x-0 bottom-0 bg-gray-800 opacity-0 group-hover:opacity-100 transition-transform transform translate-y-full group-hover:translate-y-0 mb-14">
              <div className="px-6 py-4 text-gray-400 flex gap-8">
                <button 
                  className="font-bold px-4 py-2 text-sm bg-white hover:bg-gray-300 hover:text-gray-500 transition duration-300 ease-in-out" 
                  onClick={() => handleRentNow(card)}
                >
                  More Info
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center h-16">
              <h1 className="text-black font-serif uppercase">{card.description}</h1>
              <h1 className="text-gray-400 font-serif">Rs: {card.price}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardForRegular;
