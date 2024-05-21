import React, { useState } from "react";
import Cards from "./Cards";
import Pagination from "./Pagination";
import { Sidebar } from "flowbite-react";

const ShopDesignMidSection = () => {
 



  return (
    <>
    <div>
    <Sidebar/>
        <Cards/>
      </div>
   
      <Pagination />
    </>
  );
};

export default ShopDesignMidSection;
