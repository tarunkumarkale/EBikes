// src/components/Modal.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Modal = ({ close,  Click }) => {
  const navigate = useNavigate();
console.log(close)
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
      <div className="bg-white rounded-lg shadow-lg p-8 z-10">
        <h2 className="text-xl font-bold mb-4">Bicycle Information</h2>
        <table className="min-w-full divide-y divide-gray-200 mb-4">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bicycle Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Taxes</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">bicycle.name</td>
                <td className="px-6 py-4 whitespace-nowrap">bicycle.type</td>
                <td className="px-6 py-4 whitespace-nowrap">bicycle.taxes</td>
                <td className="px-6 py-4 whitespace-nowrap">bicycle.total</td>
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
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
