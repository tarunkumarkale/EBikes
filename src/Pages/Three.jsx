import React from "react";
import { model3 } from "../constant/Index";
import { useNavigate } from "react-router-dom";

const Three = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen">
      <img src={model3} alt="E-Bike Model" className="h-screen w-screen object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black flex flex-col justify-center items-center text-center px-4 sm:px-8">
        <h2 className="text-3xl font-bold text-white leading-tight sm:text-5xl sm:leading-tight">
          Explore the <span className="text-yellow-500">Newest Collection!</span>
        </h2>
        <p className="mt-4 text-lg text-white leading-tight sm:text-2xl sm:leading-tight max-w-2xl">
          Discover our range of high-performance e-bikes, bikes, and rentals for every adventure.
        </p>
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            className="bg-yellow-500 text-black py-2 px-6 rounded-full text-lg sm:text-xl hover:bg-yellow-600 transition duration-300"
            onClick={() => navigate("/Shop")}
          >
            Shop Now
          </button>
          <button
            className="bg-transparent border border-white text-white py-2 px-6 rounded-full text-lg sm:text-xl hover:bg-white hover:text-black transition duration-300"
            onClick={() => navigate("/Contact")}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Three;
