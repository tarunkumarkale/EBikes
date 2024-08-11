import React, { useContext } from 'react';
import { AllDataContext } from '../context/MyContext';

const AllOrderProducts = () => {
  const { orders } = useContext(AllDataContext);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {orders.map((order, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={order.imageURL}
              alt={order.bicyclename}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{order.name}</h3>
              <p className="text-gray-700 mb-2">
                <span className="font-medium">Bicycle:</span> {order.bicyclename}
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-medium">Type:</span> {order.bicycletype}
              </p>
              <p className="text-gray-800 font-semibold">
                <span className="font-medium">Price:</span> ${order.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllOrderProducts;
