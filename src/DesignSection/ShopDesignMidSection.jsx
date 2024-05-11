import React from "react";
import Cards from "./Cards";

const ShopDesignMidSection = () => {

const Pagination=()=>{
return(
  
//   <div className="flex justify-center items-center mt-6">
//   <nav aria-label="Page navigation example">
// <ul class="inline-flex -space-x-px text-sm">
//   <li>
//     <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
//   </li>
//   <li>
//     <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
//   </li>
//   <li>
//     <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
//   </li>
//   <li>
//     <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
//   </li>
// </ul>
// </nav>


//   </div>
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
    <div>
      <div className="flex w-full  h-auto">
        <div className="w-[25%]  shadow-lg">
          <div className="flex flex-col ml-4 ">
            <h1>Product Categories</h1>
          </div>
        </div>
        <Cards></Cards>
        
      </div>
    </div>

    <Pagination></Pagination>



</>

  );
};

export default ShopDesignMidSection;
