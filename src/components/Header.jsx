import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AllDataContext } from "../context/MyContext";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {forlogologin}=useContext(AllDataContext)


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="border-gray-200 dark:bg-gray-900 headBackground">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="self-center text-3xl font-semibold whitespace-nowrap text-white heading poetsen-one-regular">
            Bike
          </span>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>

            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {isOpen ? (
            <div className="right-0 mt-2 w-[100%] h-auto bg-white rounded-lg shadow-lg">
              <div className="py-2">
                <Link
                  to="#"
                  className="block px-4 py-2 text-gray-800 hover:text-green-700 hover:bg-gray-200 text-center headingLink poetsen-one-regular2"
                >
                  Home
                </Link>
                <Link
                  to="/About"
                  className="block px-4 py-2 text-gray-800 hover:text-green-700 hover:bg-gray-200 text-center headingLink poetsen-one-regular2"
                >
                  About
                </Link>
                <Link
                  to=""
                  className="block px-4 py-2 text-gray-800 hover:text-green-700 hover:bg-gray-200 text-center headingLink poetsen-one-regular2"
                >
                  Services
                </Link>
                <Link
                  to="/Shop"
                  className="block px-4 py-2 text-gray-800 hover:text-green-700 hover:bg-gray-200 text-center headingLink poetsen-one-regular2"
                >
                  Shop
                </Link>
                <Link
                  to=""
                  className="block px-4 py-2 text-gray-800 hover:text-green-700 hover:bg-gray-200 text-center headingLink poetsen-one-regular2"
                >
                  Contacts
                </Link>
                <Link
                  to="/AllOrderProducts"
                  className="block px-4 py-2 text-gray-800 hover:text-green-700 hover:bg-gray-200 text-center headingLink poetsen-one-regular2"
                >
                  Check Orders
                </Link>
              
                <Link
  to="/SigninandsignUp"
 className="flex items-center justify-center text-green-800 bg-white rounded-full poetsen-one-regular2"
>
   {forlogologin? forlogologin: 'Sign Up' }
</Link>
           
              </div>
            </div>
          ) : (
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 headBackground md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link
                    to="/"
                    className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white headingLink poetsen-one-regular2"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/About"
                    className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white headingLink poetsen-one-regular2"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Services"
                    className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white headingLink poetsen-one-regular2"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Shop"
                    className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white headingLink poetsen-one-regular2"
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white headingLink poetsen-one-regular2"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/AllOrderProducts"
                    className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white headingLink poetsen-one-regular2"
                  >
                       Check Orders
                  </Link>
                </li>
                <li>
                  <Link
                    to="/SigninandsignUp"
                   
                  className="block py-2 px-3 text-green-800  rounded-full md:bg-transparent md:p-0  headingLink poetsen-one-regular2"
                  >
                    {forlogologin? forlogologin: 'Sign Up' }
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
