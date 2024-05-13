// import React, { useState } from "react";
// import Cards from "./Cards";
// import  Pagination  from "./Pagination";

// const ShopDesignMidSection = () => {




// const [isopen,setisopen]=useState(false)

// const fun=()=>{
//  setisopen(pre=>!pre) 
//  }





//   return (
//     <>
//     <div className="flex md:flex-row w-full h-auto">
//         <div className="w-full md:w-[25%]  shadow-lg h-full ">

// <button onClick={fun}> Products Categories</button>

// {
//   isopen &&
//     <ul className="mt-4">
//           <li className="text-gray-800">Item 1</li>
//           <li className="text-gray-800">Item 2</li>
//           <li className="text-gray-800">Item 3</li>
//           <li className="text-gray-800">Item 3</li>
//           <li className="text-gray-800">Item 3</li>
//           <li className="text-gray-800">Item 3</li>
//           <li className="text-gray-800">Item 3</li>
//           <li className="text-gray-800">Item 3</li>
//           <li className="text-gray-800">Item 3</li>
//           <li className="text-gray-800">Item 3</li>
//           <li className="text-gray-800">Item 3</li>
//           <li className="text-gray-800">Item 3</li>
//           <li className="text-gray-800">Item 3</li>
//           <li className="text-gray-800">Item 3</li>
//           <li className="text-gray-800">Item 3</li>
//         </ul>
// }

  
//         </div>
// <Cards />
//     </div>
//     <Pagination></Pagination>

// </>

//   );
// };

// export default ShopDesignMidSection;




import React, { useState } from "react";
import Cards from "./Cards";
import Pagination from "./Pagination";
import { Sidebar } from "flowbite-react";

const ShopDesignMidSection = () => {
 



  return (
    <>
    <div>
    <Sidebar/>
        <Cards  />
      </div>
   
      <Pagination />
    </>
  );
};

export default ShopDesignMidSection;
