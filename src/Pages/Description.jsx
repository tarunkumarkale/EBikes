import React from 'react';
import { two } from '../constant/Index';
const Description = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-1/2 overflow-hidden">
          <div className="relative">
            <img src={two} alt="Product Image" className="w-full h-auto transition-transform duration-300 transform hover:scale-110" />
          </div>
        </div>

        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-4">Product Name</h2>

          <div className="flex justify-between items-center mb-4">
            <p className="text-lg">$100</p>
            <button className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600">Add to Cart</button>
          </div>

          <div className="flex items-center mb-4">
            <label htmlFor="quantity" className="mr-2">Quantity:</label>
            <input type="number" id="quantity" className="border px-2 py-1 w-16 text-center" defaultValue="1" />
          </div>

          <p>Total Items in Cart: <span id="total-items">0</span></p>
        </div>
      </div>
    </div>
  );
}

export default Description;
