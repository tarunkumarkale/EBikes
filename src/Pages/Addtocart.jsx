import React, { useContext } from 'react'
import { AllDataContext } from '../context/MyContext'

const Addtocart = () => {

const {cartItems}=useContext(AllDataContext)

  










  return (
    <div className="flex flex-wrap justify-center p-6 bg-gray-100">
    {cartItems.map((item, index) => (
      <div
        key={index}
        className="max-w-xs rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 m-4 bg-white"
      >
        <div className="relative">
          <img
            className="w-full h-48 object-cover"
            src={item.imageURL}
            alt={item.Nameproduct}
          />
          <div className="absolute top-0 left-0 bg-gradient-to-r from-black to-transparent p-4">
            <span className="text-white text-lg font-semibold">
              {item.type}
            </span>
          </div>
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-gray-800">
            {item.Nameproduct}
          </div>
          <p className="text-green-500 text-2xl font-bold">
            ₹{item.price.toLocaleString()}
          </p>
          <p className="text-gray-600 mt-2">
            Tax: ₹{item.alltax.toLocaleString()}
          </p>
          {item.forRentmoney && (
            <p className="text-blue-500 mt-2">
              Rent: ₹{item.forRentmoney.toLocaleString()}
            </p>
          )}
        </div>
        <div className="px-6 pt-4 pb-2">
          {/* <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full shadow-md">
            Add to Cart
          </button> */}
        </div>
      </div>
    ))}
  </div>
  )
}

export default Addtocart
