import React, { useContext, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AllDataContext } from '../context/MyContext';

const AllOrderProducts = React.memo(() => {
  const { orders,RENTorders } = useContext(AllDataContext);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
    <div className="container mx-auto p-4">
  {/* Heading */}
  <h2 className="text-4xl font-extrabold text-center mb-12 text-indigo-900 tracking-wider" data-aos="fade-up">
    <span className='text-red-700'>F</span>or <span className='text-green-700'>B</span>uy
  </h2>

  {/* Orders Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
    {orders.map((order, index) => (
      <div
        key={index}
        className="bg-gradient-to-br from-purple-100 to-indigo-100 shadow-xl rounded-2xl overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
        data-aos="zoom-in"
        data-aos-delay={`${index * 200}`}
      >
        {/* Product Image */}
        <div className="relative">
          <img
            src={order.imageURL}
            alt={order.bicyclename}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg font-semibold">View Bicycle</p>
          </div>
        </div>

        {/* Order Details */}
        <div className="p-6 bg-white text-left space-y-3">
          <h3 className="text-2xl font-bold text-purple-800 uppercase">
            {order.name}
          </h3>

          <p className="text-lg font-medium text-blue-700">
            <span className="font-semibold text-gray-800">Bicycle:</span> {order.bicyclename}
          </p>
          <p className="text-lg font-medium text-green-700">
            <span className="font-semibold text-gray-800">Type:</span> {order.bicycletype}
          </p>
          <p className="text-xl font-bold text-red-600">
            ₹ {order.price}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>



{/* ///  below rent card  */}
<div className="container mx-auto p-4">
  {/* Heading */}
  <h2 className="text-4xl font-bold text-center mb-12 text-indigo-900 tracking-wide" data-aos="fade-up">
    <span className='text-red-600'>F</span>or Rent 
  </h2>

  {/* Orders Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
    {RENTorders.map((order, index) => (
      <div
        key={index}
        className="bg-gradient-to-br from-indigo-100 to-purple-100 shadow-2xl rounded-xl overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
        data-aos="zoom-in"
        data-aos-delay={`${index * 100}`}
      >
        {/* Product Image */}
        <div className="relative">
          <img
            src={order.imageURL}
            alt={order.bicyclename}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg font-semibold">View Details</p>
          </div>
        </div>

        {/* Order Details */}
        <div className="p-6 bg-white text-left space-y-3">
          <h3 className="text-2xl font-extrabold text-purple-800 uppercase">
            {order.fullname}
          </h3>
          <h4 className="text-sm font-bold text-gray-600">
            <span className="text-gray-800">Address:</span> {order.Address}, {order.pincode}
          </h4>
          <h4 className="text-sm font-bold text-gray-600">
            <span className="text-gray-800">Contact:</span> {order.Contact}
          </h4>
          <h4 className="text-sm font-semibold text-blue-700">
            <span className="text-gray-800">Bicycle:</span> {order.bicyclenameanddetail}
          </h4>
          <p className="text-lg font-bold text-green-600">
            ₹{order.onedayRent} <span className="text-gray-800">/ day</span>
          </p>
          <div className="flex justify-between text-sm font-semibold text-orange-600">
            <p><span className="text-gray-800">Pickup:</span> {order.pickupDate}</p>
            <p><span className="text-gray-800">Return:</span> {order.ReturnDate}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


    </>
  );
});

export default AllOrderProducts;
