import React, { useState } from "react";
import Cards from "./Cards";
import Pagination from "./Pagination";
import { Sidebar } from "flowbite-react";

const ShopDesignMidSection = () => {
 



  return (
    <>
    <div>
    {/* <Sidebar/> */}
        <Cards/>
      </div>
      <div className="mb-6">   <Pagination/></div>
    
   
    
    </>
  );
};

export default ShopDesignMidSection;
