import React from "react";
import { model } from "../constant/Index";
import { useNavigate } from "react-router-dom";


const HeroDesign = () => {
  const GoToShop=useNavigate()

  
  return (
    <>
      <div className="image-container relative w-[100%]">
        <img src={model} alt="Your Image Alt Text" className=" h-full" />
        <div className="text-overlay absolute  top-[.01%]   pt-[9%]   sm:py-[16%]  h-full  bg-black opacity-60 blur-[30%] w-[50%] md:w-[40%] leading-normal ">
          <h2 class="text-3xl font-bold text-white leading-tight sm:text-6xl sm:leading-tight dongle-regular">
            Discover the <span class="text-red-500">Latest Arrivals!</span>
          </h2>
          <p class="mt-1 text-xl text-white leading-tight sm:text-4xl sm:leading-tight dongle-regular ">
            Check out our new e-bikes, bikes, and rentals!
          </p>

          <div className="flex justify-center items-center">
            <button className="btn-60 sm:w-12  " onClick={()=>GoToShop("/Shop")}>
              <span>Explore</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroDesign;
