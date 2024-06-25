

import React, { useState } from 'react';

const Sidebardata = () => {
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [priceOrder, setPriceOrder] = useState('');

  const handleRatingChange = (rating) => {
    setSelectedRatings((prevRatings) =>
      prevRatings.includes(rating)
        ? prevRatings.filter((r) => r !== rating)
        : [...prevRatings, rating]
    );
  };

  const handlePriceRangeChange = (e) => {
    const name=e.target.name ;
    const  value  = e.target.value
    setPriceRange((prevRange) => 
      name === 'min' ? [value, prevRange[1]] : [prevRange[0], value]  // jab tu min prirece may value enter karega tabh vo max ko purane price me rakhega and when max ko price rakhega to min mum chnage hoga
    );
  };

  const handlePriceOrderChange = (e) => {
    setPriceOrder(e.target.value);
  };

  const handleApplyFilters = () => {
    applyFilters({ selectedRatings, priceRange, priceOrder });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Filter Products</h2>
      
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Ratings</h3>
        {[5, 4, 3].map((rating) => (
          <div key={rating} className="mb-1">
            <label>
              <input
                type="checkbox"
                value={rating}
                checked={selectedRatings.includes(rating)}
                onChange={() => handleRatingChange(rating)}
                className="mr-2"
              />
              {rating} Star{rating > 1 ? 's' : ''}
            </label>
          </div>
        ))}
      </div>
      
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Price Range</h3>
        <div className="mb-2">
          <label>
            Min: 
            <input
              type="number"
              name="min"
              value={priceRange[0]}
              onChange={handlePriceRangeChange}
              className="ml-2 border p-1"
            />
          </label>
        </div>
        <div>
          <label>
            Max: 
            <input
              type="number"
              name="max"
              value={priceRange[1]}
              onChange={handlePriceRangeChange}
              className="ml-2 border p-1"
            />
          </label>
        </div>
      </div>
      
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Sort by Price</h3>
        <div className="mb-1">
          <label>
            <input
              type="radio"
              value="increasing"
              checked={priceOrder === 'increasing'}
              onChange={handlePriceOrderChange}
              className="mr-2"
            />
            Increasing
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="decreasing"
              checked={priceOrder === 'decreasing'}
              onChange={handlePriceOrderChange}
              className="mr-2"
            />
            Decreasing
          </label>
        </div>
      </div>
      
      <button
        onClick={handleApplyFilters}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default Sidebardata;
