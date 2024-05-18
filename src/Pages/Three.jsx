import React from "react";
// import { model3 } from "../constant/Index";
 import { Ebike } from "../constant/Index";

import { useNavigate } from "react-router-dom";

const Three = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen">
      <img src={Ebike} alt="E-Bike Model" className="h-screen w-screen object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black flex flex-col justify-center items-center text-center px-4 sm:px-8">
        <h2 className="text-3xl font-bold text-white leading-tight sm:text-5xl sm:leading-tight">
          Explore the <span className="text-green-600">Newest Collection!</span>
        </h2>
        <p className="mt-4 text-lg text-white leading-tight sm:text-2xl sm:leading-tight max-w-2xl">
          Discover our range of high-performance <span class="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent text-2xl font-extrabold"> e-bikes </span>
 for every adventure.
        </p>
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            className="bg-yellow-500 text-black py-2 px-6 rounded-full text-lg sm:text-xl hover:bg-yellow-600 transition duration-300"
            onClick={() => navigate("/Shop")}
          >
            Shop Now
          </button>
       
        </div>
      </div>
    </div>
  );
};

export default Three;
