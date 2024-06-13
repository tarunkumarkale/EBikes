import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { FaBicycle, FaCalendarAlt, FaUserFriends } from 'react-icons/fa'; // Assuming you are using react-icons for icons
import { IoIosArrowForward } from 'react-icons/io'; // Importing arrow icon from react-icons

const PopUpRentBike = () => {
  const [openModal, setOpenModal] = useState(true);

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)} className="flex items-center justify-center">
        <Modal.Header>HOW IT WORKS</Modal.Header>
        <h1 className="text-2xl text-white px-12">Follow these 3 steps</h1>
        <Modal.Body>
          <div className="flex items-center justify-around space-x-4">
            <div className="text-center bg-gray-100 p-4 rounded-lg shadow-md flex-1">
              <FaBicycle className="text-4xl mx-auto mb-2" />
              <p>Select Cycle</p>
            </div>
            <IoIosArrowForward className="text-4xl text-black" />
            <div className="text-center bg-gray-100 p-4 rounded-lg shadow-md flex-1">
              <FaCalendarAlt className="text-4xl mx-auto mb-2" />
              <p>Select Product Date</p>
            </div>
            <IoIosArrowForward className="text-4xl text-black" />
            <div className="text-center bg-gray-100 p-4 rounded-lg shadow-md flex-1">
              <FaUserFriends className="text-4xl mx-auto mb-2" />
              <p>Pick Up Date</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopUpRentBike;
