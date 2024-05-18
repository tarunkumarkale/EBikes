import React from "react";
import Carousel from "./Carousel";
import HeroDesign from "../DesignSection/HeroDesign";
import ElectricVideo from "./ElectricVideo";
import Three from "./Three";
import Rent from "./RentCyleHero";
import GreenCycle from "./GreenCycle";

const Hero = () => {
  let slides = [
    <ElectricVideo key="1" />,
    <HeroDesign key="2" />,
    <Three key="3" />,
    <Rent key="4" />,
    <GreenCycle key="5" />
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






