
import { useState } from "react";
import { FaBicycle, FaUserFriends, FaWpforms } from 'react-icons/fa';
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';

const PopUpRentBike = ({ onClose }) => {
  const [openModal, setOpenModal] = useState(true);

  const handleClose = () => {
    setOpenModal(false);
    if (onClose) onClose(); // Call the onClose prop if provided
  };

  return (
    <>
      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
          <div className="bg-white rounded-lg shadow-lg p-4 z-10 max-w-md mx-auto">
            <div className="text-center text-2xl font-bold mb-2">HOW IT WORKS</div>
            <h1 className="text-lg text-black px-8 mb-3 text-center">Follow these 3 steps</h1>
            
            {/* Responsive Layout */}
            <div className="flex flex-col md:flex-row items-center justify-around space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <div className="text-center bg-gray-100 p-3 rounded-lg shadow-md flex-1">
                <FaBicycle className="text-3xl mx-auto mb-1" />
                <p>Select Cycle</p>
              </div>
              
              {/* Arrow Direction Change Based on Screen Size */}
              <IoIosArrowDown className="text-3xl text-black block md:hidden" />
              <IoIosArrowForward className="text-3xl text-black hidden md:block" />
              
              <div className="text-center bg-gray-100 p-3 rounded-lg shadow-md flex-1">
                <FaWpforms className="text-3xl mx-auto mb-1" />
                <p>Fill the Form</p>
              </div>
              
              {/* Arrow Direction Change Based on Screen Size */}
              <IoIosArrowDown className="text-3xl text-black block md:hidden" />
              <IoIosArrowForward className="text-3xl text-black hidden md:block" />
              
              <div className="text-center bg-gray-100 p-3 rounded-lg shadow-md flex-1">
                <FaUserFriends className="text-3xl mx-auto mb-1" />
                <p>Pick Up Date</p>
              </div>
            </div>
            
            <div className="text-center">
              <button
                onClick={handleClose}
                className="bg-blue-500 text-white py-2 px-3 rounded-lg shadow-md hover:bg-blue-600"
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
