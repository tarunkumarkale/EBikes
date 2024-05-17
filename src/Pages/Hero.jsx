import React from "react";
import Carousel from "./Carousel";
import HeroDesign from "../DesignSection/HeroDesign";
import ElectricVideo from "./ElectricVideo";
import Three from "./Three";

const Hero = () => {
  let slides = [
    <HeroDesign key="1" />,
    <ElectricVideo key="2" />,
    <Three key="3" />
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






