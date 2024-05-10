import React from "react";
import Header from "./Header";
import HeroDesign from "../DesignSection/HeroDesign";

const Hero = () => {
  return (
    <>
      <div className="w-[100%] h-auto">
        <Header></Header>
        <HeroDesign></HeroDesign>
      </div>
    </>
  );
};

export default Hero;
