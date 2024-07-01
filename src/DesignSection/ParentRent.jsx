import React, { useContext, useEffect, useState } from 'react';
import IndexForRent from "../constant/IndexForRent";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AllDataContext } from '../context/MyContext';
import { useNavigate } from 'react-router-dom';


const ParentRent = ({ scrollToTop }) => {
  const { selectRate, PriceRange, PriceOrder,ForSearching,setRentData} = useContext(AllDataContext)
  const navigate = useNavigate();
  const [filteredData, setFilteredData] = useState(IndexForRent);

  useEffect(() => {
    AOS.init({
      duration: 2200,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const handleRentNow = (card) => {
    setRentData({ description: card.NAME, image: card.image, type: card.type, price: card.price });
    
    navigate(`/Description`);
    if (scrollToTop) {
      scrollToTop();  // Call scrollToTop after navigation
    }
  };
 

  
  useEffect(() => {
    let filtered = IndexForRent;
  
    if (PriceRange && PriceRange.length === 2) {
      filtered = filtered.filter(
        (element) => element.price >= PriceRange[0] && element.price <= PriceRange[1]
      );
    }
  
    if (selectRate && selectRate.length > 0) {
      filtered = filtered.filter((element) => selectRate.includes(element.rateing));
    }

if(ForSearching){
  filtered = filtered.filter((element) => element.description.toLowerCase().includes(ForSearching.toLowerCase()))
 
}

    if (PriceOrder) {
      filtered.sort((a, b) => {
        
        if (PriceOrder === 'increasing') {
          console.log(a)
          console.log(b)
          return a.price - b.price;
        } else if (PriceOrder === 'decreasing') {
          return b.price - a.price;
        }
        return 0;
      });
    }




  
    setFilteredData(filtered);
  }, [selectRate, PriceRange,PriceOrder,ForSearching]);
  
  

  return (
    <>
    <div class="flex justify-center ">
        <h1 class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-black-500 to-gray-400">
         Rent-Bikes
        </h1>
    </div>
    <div className="relative w-full flex justify-around gap-8 sm:gap-32 flex-wrap bg-white mb-4">
      <div className="w-full flex justify-around gap-4 sm:gap-20 flex-wrap">
        {filteredData.map((card) => (
          <div
            key={card.id}
            className="w-[40%] sm:w-[29%]  lg:w-[24%] h-auto bg-white shadow-2xl rounded-lg overflow-hidden"
            data-aos="fade-up"
          >
            <div className="relative group">
              <img className="w-full h-auto" src={card.image} alt={card.description} />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
              <div className="absolute inset-x-0 bottom-0 bg-gray-800 opacity-0 group-hover:opacity-100 transition-transform transform translate-y-full group-hover:translate-y-0 mb-14">
                <div className="px-6 py-4 text-gray-400 flex gap-8">
                  <button
                    className="font-bold px-4 py-2 text-sm bg-white hover:bg-gray-300 hover:text-gray-500 transition duration-300 ease-in-out"
                   
                    onClick={() => {
                      handleRentNow(card);
                    }}
                  >
                    More info
                  </button>
          
                </div>
              </div>
              <div className='flex flex-col justify-center items-center h-16'>
                <h1 className='text-black font-serif uppercase'>{card.NAME}</h1>
                <h1 className='text-gray-400 font-serif'>Rs:{card.price}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ParentRent;
