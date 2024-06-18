import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { useParams } from "react-router-dom";

const RentForm = () => {
  const { cardId } = useParams();
  
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* One Day Price */}
        <div
          className="p-4  rounded-lg shadow-md bg-slate-400"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-xl font-semibold mb-2 ">One Day Price</h2>
          <p className="text-gray-600">Price: $20</p>
        </div>

        {/* Seven Day Price */}
        <div
          className="p-4  rounded-lg shadow-md bg-slate-400"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h2 className="text-xl font-semibold mb-2">Seven Day Price</h2>
          <p className="text-gray-600">Price: $100</p>
        </div>

        {/* Delay Interest */}
        <div
          className="p-4  rounded-lg shadow-md  bg-slate-400"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h2 className="text-xl font-semibold mb-2">Delay Interest</h2>
          <p className="text-gray-600">Interest: 5%</p>
        </div>
      </div>

      {/* Form */}
      <form className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-100"
              style={{ height: "3rem" }} // Adjust height to make it larger
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-100"
              style={{ height: "3rem" }} // Adjust height to make it larger
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-100"
              style={{ height: "3rem" }} // Adjust height to make it larger
            />
          </div>
          <div>
            <label htmlFor="bikeType"  className="block text-sm font-medium text-gray-700">
              Bike Details
            </label>
            <input
              type="text"
              id="bikeType"
              name="bikeType"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-100"
              style={{ height: "3rem" }} // Adjust height to make it larger
            />
          </div>
          <div>
            <label htmlFor="pickupDate" className="block text-sm font-medium text-gray-700">
              Pickup Date
            </label>
            <input
              type="date"
              id="pickupDate"
              name="pickupDate"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-100"
              style={{ height: "3rem" }} // Adjust height to make it larger
            />
          </div>
          <div>
            <label htmlFor="returnDate" className="block text-sm font-medium text-gray-700">
              Return Date
            </label>
            <input
              type="date"
              id="returnDate"
              name="returnDate"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-100"
              style={{ height: "3rem" }} // Adjust height to make it larger
            />
          </div>
        </div>
        <div className="mt-6 flex justify-center"> {/* Center the button */}
          <button
            type="submit"
            className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Rent Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default RentForm;
