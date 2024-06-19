import React, { createContext, useState } from "react";

export const AllDataContext = createContext(null);

export const AllDataProvider = ({ children }) => {
  const [RentFormData, setRentFormData] = useState(null);

  const setRentData = (data) => {
    setRentFormData(data);
  };

  return (
    <AllDataContext.Provider value={{ setRentData, RentFormData }}>
      {children}
    </AllDataContext.Provider>
  );
};
