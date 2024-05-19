import React from 'react';
import { green } from '../constant/Index';

const Rent = () => {
  return (
    <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
      
      {/* Image Column */}
      <div className="w-full h-64 lg:w-1/2 lg:h-auto">
        <img
          className="h-full w-full object-cover"
          src={green}
          alt="Winding mountain road"
        />
      </div>
      {/* Close Image Column */}
      
      {/* Text Column */}
      <div className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
        {/* Text Wrapper */}
        <div className="flex flex-col p-12 md:px-16">
          <h2 className="text-xl font-medium uppercase text-green-800 lg:text-2xl">Why We?</h2>
          <p className="mt-2">
         1. Explore cycling excellence with us! 🚴‍♂️<br/>
2.We offer a complete cycling experience: bikes, accessories, repairs. ✔️ <br />
3. Because we provide e-bikes and regular bikes for rent, we are committed to promoting both your health and the health of the environment. <br/>
4.Click below to visit our About Us page and learn more! 🌟
          </p>
          {/* Button Container */}
          <div className="mt-8">
            <a
              href="#"
              className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-green-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48"
            >
              About us
            </a>
          </div>
        </div>
        {/* Close Text Wrapper */}
      </div>
      {/* Close Text Column */}

    </div>
  );
};

export default Rent;
