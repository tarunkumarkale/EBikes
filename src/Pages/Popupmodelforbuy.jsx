import React, { useContext, useEffect, useState } from 'react';
import { AllDataContext } from '../context/MyContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Modal = ({ close }) => {
  const { RentFormDataNAME, RentFormDatatype, RentFormDataprice, tax } = useContext(AllDataContext);
  console.log(tax);
  const [total, setTotal] = useState(0); // Initialize total with a default value
  
  useEffect(() => {
   
      let parsedRentFormDataprice = parseInt(RentFormDataprice);
      let parsedTax = parseInt(tax);
      let totalwithtax = parsedRentFormDataprice + (parsedRentFormDataprice * parsedTax / 100);
      let final = parseInt(totalwithtax);
      setTotal(final);
    
  }, [tax, RentFormDataprice]);

  const notify = () => {
    toast.success('Your order  is confirmed! ', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
    });
  };

  console.log(total);
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
        <div className="bg-white rounded-lg shadow-lg p-8 z-10">
          <h2 className="text-3xl font-bold mb-4 w-full text-black py-2 px-4">Payment Form </h2>

          <input type="text" placeholder="Enter your name" className="w-full py-2 px-4 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 text-gray-700"/>

          <br />
          <br />
          <input type="tel" placeholder="Enter your mobile number" className="w-full py-2 px-4 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 text-gray-700"/>

          <br />
          <br />

          <table className="min-w-full divide-y divide-gray-200 mb-4">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-gradient-to-r from-blue-500 to-teal-500 text-white">
                  Bicycle Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-gradient-to-r from-blue-500 to-teal-500 text-white">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-gradient-to-r from-blue-500 to-teal-500 text-white">
                  Unit Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-gradient-to-r from-blue-500 to-teal-500 text-white">
                  Taxes
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-gradient-to-r from-blue-500 to-teal-500 text-white">
                  Total
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  {RentFormDataNAME}
                </td>
                <td className="px-6 py-4 whitespace-nowrap bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  {RentFormDatatype}
                </td>
                <td className="px-6 py-4 whitespace-nowrap bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  Rs: {RentFormDataprice}
                </td>
                <td className="px-6 py-4 whitespace-nowrap bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  {tax}
                </td>
                <td className="px-6 py-4 whitespace-nowrap bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  Rs: {total}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-end space-x-4">
            <button
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
              onClick={close}
            >
              Close
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={notify}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Modal;
