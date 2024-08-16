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
        <h2 className="text-3xl font-extrabold text-center mb-10 text-gray-800" data-aos="fade-up">Client Orders</h2>

        {/* Orders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {orders.map((order, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={`${index * 1000}`}
            >
              {/* Product Image */}
              <img
                src={order.imageURL}
                alt={order.bicyclename}
                className="w-full h-48 object-cover"
              />

              {/* Order Details */}
              <div className="p-6 bg-gradient-to-r from-gray-100 to-gray-50 text-center">
                <h3 className="text-xl font-bold text-purple-700 mb-3 uppercase">
                  <span className='text-black'>Client Name :</span> {order.name}
                </h3>

                <p className="text-md font-medium text-blue-700 mb-2">
                  <span className="font-bold text-lg">Bicycle:</span> {order.bicyclename}
                </p>
                <p className="text-md font-medium text-green-700 mb-2">
                  <span className="font-bold text-lg">Type:</span> {order.bicycletype}
                </p>
                <p className="text-lg font-semibold text-red-700">
                  <span className="font-bold text-lg">Price:</span> ₹ {order.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>


{/* ///  below rent card  */}

<div className="container mx-auto p-4">
  {/* Heading */}
  <h2 className="text-3xl font-extrabold text-center mb-10 text-gray-800" data-aos="fade-up">
    Rent Orders
  </h2>

  {/* Orders Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {RENTorders.map((order, index) => (
      <div
        key={index}
        className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
        data-aos="fade-up"
        data-aos-delay={`${index * 200}`}
      >
        {/* Product Image */}
        <img
          src={order.imageURL}
          alt={order.bicyclename}
          className="w-full h-48 object-cover"
        />

        {/* Order Details */}
        <div className="p-6 bg-gradient-to-r from-gray-100 to-gray-50 text-left">
          <h3 className="text-xl font-bold text-purple-700 mb-3 uppercase">
            <span className="text-black">Renter Name:</span> {order.fullname}
          </h3>
          <h4 className="text-lg font-bold text-gray-700 mb-2">
            <span className="text-black">Address:</span> {order.Address}, {order.pincode}
          </h4>
          <h4 className="text-lg font-bold text-gray-700 mb-2">
            <span className="text-black">Contact:</span> {order.Contact}
          </h4>
          <h4 className="text-lg font-medium text-blue-700 mb-2">
            <span className="text-black">Bicycle Details:</span> {order.bicyclenameanddetail}
          </h4>
          <p className="text-md font-medium text-green-700 mb-2">
            <span className="text-black">Per Day Rent:</span> ₹ {order.onedayRent}
          </p>
          <p className="text-md font-medium text-orange-700 mb-2">
            <span className="text-black">Pickup Date:</span> {order.pickupDate}
          </p>
          <p className="text-md font-medium text-orange-700 mb-2">
            <span className="text-black">Return Date:</span> {order.ReturnDate}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>
    </>
  );
});

export default AllOrderProducts;
