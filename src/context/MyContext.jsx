import React, { createContext, useState } from "react";

export const AllDataContext = createContext(null);

export const AllDataProvider = ({ children }) => {
  const [RentFormDataimage, setRentFormDataimage] = useState(null);
  const [RentFormDataprice, setRentFormDataimageprice] = useState(null);
  const [RentFormDatatype, setRentFormDataimagetype] = useState(null);
  const [RentFormDataNAME, setRentFormDataimageNAME] = useState(null);

  const setRentData = (data) => {
    console.log(data.image)
    setRentFormDataimage(data.image);
    setRentFormDataimageNAME(data.description);
    setRentFormDataimagetype(data.type);
    setRentFormDataimageprice(data.price);
  };

  return (
    <AllDataContext.Provider value={{ setRentData, RentFormDataimage,RentFormDataNAME,RentFormDatatype,RentFormDataprice }}>
      {children}
    </AllDataContext.Provider>
  );
};
