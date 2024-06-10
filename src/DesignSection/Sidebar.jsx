import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`bg-gray-200 h-screen mt-16 w-64 fixed top-0 left-0 transition-transform duration-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Sidebar Content */}
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Sidebar Content</h2>
          <ul>
            <li className="mb-2"><a href="#" className="text-blue-500 hover:text-blue-700">Link 1</a></li>
            <li className="mb-2"><a href="#" className="text-blue-500 hover:text-blue-700">Link 2</a></li>
            <li className="mb-2"><a href="#" className="text-blue-500 hover:text-blue-700">Link 3</a></li>
            {/* Add more sidebar links as needed */}
          </ul>
        </div>
        {/* Close button */}
        <button className="absolute top-4 right-4" >
          <IoClose className="h-6 w-6 text-gray-600" onClick={toggleSidebar}  />
        </button>
      </div>
{/* */}
      {/* Button to toggle sidebar */}
      <button className="fixed top-4 right-1  mt-14 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full"  onClick={toggleSidebar} >
        {isSidebarOpen ? 'X ' : "Filter Product"}
      </button>
    </div>
  );
};

export default Sidebar;