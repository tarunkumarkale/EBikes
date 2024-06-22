import React, { createContext, useState } from "react";

export const AllDataContext = createContext(null);

export const AllDataProvider = ({ children }) => {
  const [RentFormDataimage, setRentFormDataimage] = useState(null);
  const [RentFormDataprice, setRentFormDataimageprice] = useState(null);
  const [RentFormDatatype, setRentFormDataimagetype] = useState(null);
  const [RentFormDataNAME, setRentFormDataimageNAME] = useState(null);
  const [electricComponets,setelectricComponents]=useState(null)

  const setRentData = (data) => {
    
    setRentFormDataimage(data.image);
    setRentFormDataimageNAME(data.description);
    setRentFormDataimagetype(data.type);
    setRentFormDataimageprice(data.price);
    setelectricComponents(data.comp)
  
  };

  console.log(electricComponets)
  return (
    <AllDataContext.Provider value={{ setRentData, RentFormDataimage,RentFormDataNAME,RentFormDatatype,RentFormDataprice,electricComponets}}>
      {children}
    </AllDataContext.Provider>
  );
};
