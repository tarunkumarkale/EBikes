import React from "react";
import { model3 } from "../constant/Index";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const HeroDesign = () => {
  const GoToShop = useNavigate();

  return (
    <div className="relative w-full h-screen">
      <img src={model3} alt="E-Bike Model" className="h-screen w-screen object-fill" />
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center px-4 sm:px-8">
        <h2 className="text-3xl font-bold text-white leading-tight sm:text-6xl sm:leading-tight">
          Discover the <span className="text-red-500">Latest Arrivals!</span>
        </h2>
        <p className="mt-4 text-xl text-white leading-tight sm:text-4xl sm:leading-tight">
        Check out our latest bikes Shop
        </p>
        <div className="flex justify-center items-center mt-8">
          <button
            className="bg-red-500 text-white py-2 px-6 rounded-full text-lg sm:text-xl hover:bg-red-600 transition duration-300"
            onClick={() => GoToShop("/Shop")}
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroDesign;
