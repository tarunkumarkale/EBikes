import React, { useState } from "react";
import Cards from "./Cards";

const ShopDesignMidSection = () => {




const [isopen,setisopen]=useState(false)

const fun=()=>{
 setisopen(pre=>!pre) 
 }



const Pagination=()=>{
return(
 
<div class="flex justify-center items-center mt-16">
  <nav aria-label="Page navigation example">
    <ul class="inline-flex -space-x-px text-lg">
      <li>
        <a href="#" class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-600 bg-white border border-e-0 border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-800 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white transition-colors duration-300 ease-in-out">Previous</a>
      </li>
      <li>
        <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-600 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-800 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white transition-colors duration-300 ease-in-out">1</a>
      </li>
      <li>
        <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-600 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-800 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white transition-colors duration-300 ease-in-out">2</a>
      </li>
      <li>
        <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-600 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-800 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white transition-colors duration-300 ease-in-out">Next</a>
      </li>
    </ul>
  </nav>
</div>


)
}


  return (
    <>
    <div className="flex-col md:flex-row w-full h-auto">
        <div className="w-full md:w-[25%]  shadow-lg h-full ">

<button onClick={fun}> Products Categories</button>

{
  isopen &&
    <ul className="mt-4">
          <li className="text-gray-800">Item 1</li>
          <li className="text-gray-800">Item 2</li>
          <li className="text-gray-800">Item 3</li>
        </ul>
}

  
        </div>
<Cards  isopen={isopen}/>
    </div>
    <Pagination></Pagination>

</>

  );
};

export default ShopDesignMidSection;
