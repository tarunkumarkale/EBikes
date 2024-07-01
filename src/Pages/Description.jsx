import {useContext,useState,useRef, useEffect } from 'react';
import { AllDataContext } from '../context/MyContext';
import { one } from '../constant/Index';
import ParentRent from '../DesignSection/ParentRent';
import { useNavigate } from 'react-router-dom';

import CardForRegular from '../DesignSection/CardForRegular';
import Cardforelectric from '../DesignSection/Cardforelectric';
import Popupmodelforbuy from './Popupmodelforbuy';

const Description = () => {
  const descriptionRef = useRef(null);
  let Desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit..."; // Your description goes here
  

  const { RentFormDataimage, RentFormDataprice, RentFormDataNAME, electricComponets } = useContext(AllDataContext);
  
  const navigate = useNavigate();



  const [renderRelatedProduct, setRenderRelatedProduct] = useState(null);
  const [buyrent, setbuyrent] = useState(null);
  const [checkNav, setcheckNav] = useState(null);

  let first = RentFormDataimage ? RentFormDataimage : one;
  let second = RentFormDataNAME ? RentFormDataNAME : 'stride';
  let third = RentFormDataprice ? RentFormDataprice : "Rs:4200";

  const scrollToTop = () => {
    if (descriptionRef.current) {
      descriptionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  console.log(electricComponets);
  
  useEffect(() => {
    if (electricComponets === "Regular") {
      setRenderRelatedProduct(<CardForRegular scrollToTop={scrollToTop} hide='hidden' />);
        setbuyrent('Buy Now')
        setcheckNav(true)
    } else if (electricComponets === "electric") {
      setRenderRelatedProduct(<Cardforelectric scrollToTop={scrollToTop} hide='hidden'  />);
      setbuyrent('Buy Now')
      setcheckNav(true)
    } else {
      setRenderRelatedProduct(<ParentRent scrollToTop={scrollToTop}  hide='hidden' />);
      setbuyrent('Rent Now')
      setcheckNav('/RentForm')
    }
  }, [electricComponets]); // Dependency array fixed to only include electricComponets






  const [isHidden, setIsHidden] = useState(true);



  const closepopup = () => {
    setIsHidden(true);
  };

  const openPopup = () => {
    setIsHidden(false);
  };
  const navigateToRENTFORM = () => {
    navigate(checkNav);
 openPopup()
  }



  return (
    <div className='bg-white' ref={descriptionRef}>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 overflow-hidden relative">
          <img src={first} alt="Product Image" className="w-[90%] h-auto md:h-screen transition-transform duration-300 transform hover:scale-110 rounded-3xl mt-2 ml-3" />
        </div>

        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-4">{second}</h2>
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg font-semibold">Rs:{third}</p>
          </div>

          <div className="flex items-center gap-9 mt-3">
            <button className="px-4 py-2 bg-blue-400 text-white hover:bg-blue-800 transition duration-300" onClick={navigateToRENTFORM}>{buyrent}</button>
            <button className="px-4 py-2 bg-black text-white hover:bg-white hover:text-black transition duration-300">Add to Cart</button>
          </div>

          <div>
            <p className='uppercase font-bold'>Total Items in Cart: <span id="total-items">0</span></p>
            <br />
            <p className='text-xl'>Brakes: The bicycle is equipped with dual disc brakes that provide superior stopping power and control, ensuring safety even in wet conditions.</p>
            <p className='text-xl'>Gears: Featuring a 21-speed Shimano gear system, this bike allows for smooth and precise shifting, making it suitable for various terrains.</p>
            <br />
            <p className='text-xl'>Tires: The bike comes with 29-inch all-terrain tires that offer excellent grip and stability, whether you're riding on pavement or dirt trails.</p>
            <br />
            <p className='text-xl'>Saddle: The ergonomic saddle is designed for comfort during long rides, with ample padding and adjustable height to fit different riders.</p>
            <br />
            <p className='text-xl'>Suspension: Equipped with a front suspension fork that absorbs shocks from rough terrain, providing a smoother and more comfortable ride.</p>
            <br />
            <p className='text-xl'>Handlebars: The bike features flat handlebars that offer a more upright riding position, reducing strain on the back and shoulders.</p>
            <br />
            <p className='text-xl'>Accessories: Comes with essential accessories like a water bottle holder, kickstand, and reflectors for added convenience and safety.</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
   

      {/* Cards of related products */}
      <div className='flex justify-center items-center'>
      <h1 className='text-center text-4xl font-extrabold underline bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text shadow-2xl'>Related Products</h1>

      </div>
      <br />
      <div className="flex flex-wrap justify-around mb-40 mx-2 mt-2">
        {renderRelatedProduct}
      </div>
<div className={isHidden?'hidden':''}>
   <Popupmodelforbuy  close={closepopup}/>
</div>
     
    </div>
  );
}

export default Description;