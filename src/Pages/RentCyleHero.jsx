import React from 'react';

const Rent = () => {
  return (
    <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
      
      {/* Image Column */}
      <div className="w-full h-64 lg:w-1/2 lg:h-auto">
        <img
          className="h-full w-full object-cover"
          src="https://picsum.photos/id/1018/2000"
          alt="Winding mountain road"
        />
      </div>
      {/* Close Image Column */}
      
      {/* Text Column */}
      <div className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
        {/* Text Wrapper */}
        <div className="flex flex-col p-12 md:px-16">
          <h2 className="text-xl font-medium uppercase text-green-800 lg:text-2xl">Winding Mountain Road</h2>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat.
          </p>
          {/* Button Container */}
          <div className="mt-8">
            <a
              href="#"
              className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-green-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48"
            >
              Read More
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
