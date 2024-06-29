



import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ImagesElectric from '../constant/Indexelectric';
import { AllDataContext } from '../context/MyContext';

const Cardforelectric = ({ scrollToTop }) => {
  const { selectRate } = useContext(AllDataContext);
  const [rentData, setRentData] = useState(null);
  const navigate = useNavigate();
  const [filteredData, setFilteredData] = useState(ImagesElectric);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  useEffect(() => {
    if (selectRate && selectRate.length > 0) {
      setFilteredData(
        ImagesElectric.filter((element) => selectRate.includes(element.rateing))
      );
    } else {
      setFilteredData(ImagesElectric);
    }
  }, [selectRate]);

  const handleRentNow = (card) => {
    setRentData({
      description: card.description,
      image: card.image,
      type: card.type,
      price: card.price,
      comp: card.comp,
      tax: card.tax,
    });
    if (scrollToTop) {
      scrollToTop();
    }
    navigate('/Description');
  };

  const ElectricCards = () => {
    return (
      <>
        <div className="flex justify-center mt-[-10%] sm:mt-0">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-black-500 to-gray-400">
            E-Bikes
          </h1>
        </div>
        <br />
        <div className="w-full flex justify-around gap-2 sm:gap-32 md:gap-30 flex-wrap bg-white">
          {filteredData.map((card) => (
            <div
              key={card.id}
              className="w-[48%] sm:w-[40%] md:w-[23%] h-auto bg-white shadow-2xl rounded-lg overflow-hidden"
              data-aos="fade-up"
            >
              <div className="relative group">
                <img className="w-full h-auto" src={card.image} alt={card.description} />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
                <div className="absolute inset-x-0 bottom-0 bg-gray-800 opacity-0 group-hover:opacity-100 transition-transform transform translate-y-full group-hover:translate-y-0 mb-14">
                  <div className="px-6 py-4 text-gray-400 flex gap-8">
                    <button
                      className="font-bold px-4 py-2 text-sm bg-white hover:bg-gray-300 hover:text-gray-500 transition duration-300 ease-in-out"
                      onClick={() => handleRentNow(card)}
                    >
                      More Info {card.rateing}
                    </button>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center h-16">
                  <h1 className="text-black font-serif uppercase">{card.description}</h1>
                  <h1 className="text-gray-400 font-serif">Rs:{card.price}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <>
      <ElectricCards />
    </>
  );
};

export default Cardforelectric;
