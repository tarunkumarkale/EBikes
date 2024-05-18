import React from "react";
import Carousel from "./Carousel";
import HeroDesign from "../DesignSection/HeroDesign";
import ElectricVideo from "./ElectricVideo";
import Three from "./Three";
import Rent from "./RentCyleHero";
import GreenCycle from "./GreenCycle";

const Hero = () => {
  let slides = [
    <ElectricVideo key="1" />,  // video of demo
    <HeroDesign key="2" />, // normal bike
    <Three key="3" />, // electric bike
    <Rent key="4" />,  // rent bike
    <GreenCycle key="5" />  // environment
  ];

  return (
    <div className="w-full h-full">
      <div className="w-full h-full m-auto ">
        <Carousel slides={slides} />
      </div>
    </div>
  );
};

export default Hero;






