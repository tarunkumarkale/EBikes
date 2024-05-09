import React from "react";
import { model } from "../constant/Index";

const HeroDesign = () => {
  return (
    <>
      <div className="image-container relative w-[100%]">
        <img src={model} alt="Your Image Alt Text" className=" h-full" />
        <div className="text-overlay absolute  top-[.01%]   pt-[9%]   sm:py-[16%]  h-full  bg-black opacity-60 blur-[30%] w-[50%] md:w-[40%] leading-normal ">
          {/* <h2 className="text-2xl font-bold text-white md:text-5xl dongle-regular leading-tight   md:leading-loose ">
            Discover the <span className="text-red-500">Latest Arrivals!</span>
          </h2>
          <p className="mt-2 text-xl   text-white md:text-2xl dongle-regular  leading-tight   md:leading-loose ">
           Check out our new e-bikes, bikes and rentals!
          </p>   */}
          <h2 class="text-3xl font-bold text-white leading-tight sm:text-6xl sm:leading-tight dongle-regular">
  Discover the <span class="text-red-500">Latest Arrivals!</span>
</h2>
<p class="mt-1 text-xl text-white leading-tight sm:text-4xl sm:leading-tight dongle-regular ">
  Check out our new e-bikes, bikes, and rentals!
</p>
<div className="flex justify-center items-center"><button class="mt-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-full transition duration-300 ease-in-out z-10 ">
  Explore More
</button></div>




        </div>
      </div>
    </>
  );
};

export default HeroDesign;
