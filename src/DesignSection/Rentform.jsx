import React, { useContext, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { AllDataContext } from "../context/MyContext";

const RentForm = () => {
  const { RentFormDataNAME, RentFormDatatype,moneydetailRent } = useContext(AllDataContext);

  useEffect(() => {
    AOS.init();
    console.log(moneydetailRent)
  }, []);

  return (
    <>
      <div className="bg-yellow-200 min-h-screen flex justify-center items-center">
        <div className="container mx-auto py-10">
          {/* <h1 className="text-3xl font-bold text-center mb-8">Rent  Bike </h1> */}
          <p className="text-center text-red-600 mb-8">Note: Rent bike service is applicable in Bhopal only. Users from other areas cannot book a rent bike.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              className="p-4 rounded-lg shadow-md bg-slate-400"
              data-aos="fade-up"
              data-aos-duration="1000"
              style={{ height: "150px" }}
            >
              <h2 className="text-xl font-semibold mb-2">One Day Price</h2>
              <p className="text-gray-600">Price: ₹{moneydetailRent}</p>
            </div>
            <div
              className="p-4 rounded-lg shadow-md bg-slate-400"
              data-aos="fade-up"
              data-aos-duration="1500"
              style={{ height: "150px" }}
            >
              <h2 className="text-xl font-semibold mb-2">Seven Day Price</h2>
              <p className="text-gray-600">Price: ₹100</p>
            </div>
            <div
              className="p-4 rounded-lg shadow-md bg-slate-400"
              data-aos="fade-up"
              data-aos-duration="2000"
              style={{ height: "150px" }}
            >
              <h2 className="text-xl font-semibold mb-2">Delay Interest</h2>
              <p className="text-gray-600">Interest: 5%</p>
            </div>
          </div>

          <form className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-yellow-100"
                  style={{ height: "2.5rem", width: "90%" }}
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
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-yellow-100"
                  style={{ height: "2.5rem", width: "90%" }}
                />
              </div>
              <div>
                <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">
                  Pincode
                </label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-yellow-100"
                  style={{ height: "2.5rem", width: "90%" }}
                />
              </div>
              <div>
                <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
                  Contact Number
                </label>
                <input
                  type="text"
                  id="contactNumber"
                  name="contactNumber"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-yellow-100"
                  style={{ height: "2.5rem", width: "90%" }}
                />
              </div>
              <div>
                <label htmlFor="bikeType" className="block text-sm font-medium text-gray-700">
                  Bike Details
                </label>
                <input
                  type="text"
                  id="bikeType"
                  name="bikeType"
                  defaultValue={`${RentFormDataNAME} and ${RentFormDatatype}`}
                  readOnly
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-yellow-100 text-red-700 uppercase"
                  style={{ height: "2.5rem", width: "90%" }}
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
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-yellow-100"
                  style={{ height: "2.5rem", width: "90%" }}
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
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-yellow-100"
                  style={{ height: "2.5rem", width: "90%" }}
                />
              </div>
            </div>
            <div className="mt-6 flex justify-center">
              <button
                type="submit"
                className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RentForm;
