import React from 'react'

const GreenCycle = () => {
  return (
    <div>
         <div className="flex flex-wrap">
      <div className="w-full sm:w-4/12 mb-10">
        <img
          src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          alt="Leafs"
          className="w-full h-48 object-cover sm:h-screen"
        />
      </div>
      <div className="w-full sm:w-8/12">
        <div className="container mx-auto h-full sm:p-10">
          <nav className="flex px-4 justify-between items-center">
            <div className="text-4xl font-bold">
              Plant<span className="text-green-700">.</span>
            </div>
            <div>
              <img
                src="https://image.flaticon.com/icons/svg/497/497348.svg"
                alt="Icon"
                className="w-8"
              />
            </div>
          </nav>
          <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
            <div className="w-full lg:max-w-md">
              <h1 className="text-3xl lg:text-5xl font-bold">
                Rent the best <span className="text-green-700">cycles</span> for your adventure
              </h1>
              <div className="w-20 h-2 bg-green-700 my-4"></div>
              <p className="text-lg lg:text-xl mb-6">
                High-performance cycles for rent, perfect for any journey. Eco-friendly and fun! Renting cycles reduces carbon emissions and promotes cleaner air.
              </p>
              <button className="bg-green-500 text-white text-xl lg:text-2xl font-medium px-4 py-2 rounded shadow">
                Learn More
              </button>
            </div>
          </header>
        </div>
      </div>
    </div>
    </div>
  )
}

export default GreenCycle
