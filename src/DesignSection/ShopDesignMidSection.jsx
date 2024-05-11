import React from "react";
import Cards from "./Cards";

const ShopDesignMidSection = () => {
  return (
    <div>
      <div className="flex w-full  h-auto">
        <div className="w-[25%] shadow-md border border-black">
          <div className="flex flex-col ml-4 ">
            <h1>Product Categories</h1>
          </div>
        </div>
        <Cards></Cards>
      </div>
    </div>
  );
};

export default ShopDesignMidSection;
