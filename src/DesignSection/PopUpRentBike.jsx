import { useState, useEffect } from "react";
import { FaBicycle, FaUserFriends, FaWpforms } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';

const PopUpRentBike = ({ onClose }) => {
  const [openModal, setOpenModal] = useState(true);


  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
          <div className="bg-white rounded-lg shadow-lg p-6 z-10 max-w-md mx-auto">
            <div className="text-center text-2xl font-bold mb-4">HOW IT WORKS</div>
            <h1 className="text-xl text-black px-12 mb-4 text-center">Follow these 3 steps</h1>
            <div className="flex items-center justify-around space-x-4 mb-6">
              <div className="text-center bg-gray-100 p-4 rounded-lg shadow-md flex-1">
                <FaBicycle className="text-4xl mx-auto mb-2" />
                <p>Select Cycle</p>
              </div>
              <IoIosArrowForward className="text-4xl text-black" />
              <div className="text-center bg-gray-100 p-4 rounded-lg shadow-md flex-1">
                <FaWpforms className="text-4xl mx-auto mb-2" />
                <p>Fill the Form</p>
              </div>
              <IoIosArrowForward className="text-4xl text-black" />
              <div className="text-center bg-gray-100 p-4 rounded-lg shadow-md flex-1">
                <FaUserFriends className="text-4xl mx-auto mb-2" />
                <p>Pick Up Date</p>
              </div>
            </div>
            <div className="text-center">
              <button
                onClick={handleClose}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600"
              >
                I accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUpRentBike;
