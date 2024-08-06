import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from 'firebase/auth';            
              ///   👿  for auththetication only 

import { app } from "./Firebase";



export const AllDataContext = createContext(null);

export const AllDataProvider = ({ children }) => {

  const firebaseAuth = getAuth(app)    // this for auth only




  const [RentFormDataimage, setRentFormDataimage] = useState(null);
  const [RentFormDataprice, setRentFormDataimageprice] = useState(null);
  const [RentFormDatatype, setRentFormDataimagetype] = useState(null);
  const [RentFormDataNAME, setRentFormDataimageNAME] = useState(null);
  const [electricComponets,setelectricComponents]=useState(null)
  const [tax,settax]=useState(null)

  //  🦦 for filter data
  const [selectRate,setselectRate]=useState(null)
  const [PriceRange,setPriceRange]=useState(null)
  const [PriceOrder,setPriceOrder]=useState(null)
  const [ForSearching,setForSearching]=useState(null)

  const setRentData = (data) => {
    
    setRentFormDataimage(data.image);
    setRentFormDataimageNAME(data.description);
    setRentFormDataimagetype(data.type);
    setRentFormDataimageprice(data.price);
    setelectricComponents(data.comp)
    settax(data.tax)
  
  };


  const rateingfiltar=(filterdataget)=>{
        setselectRate(filterdataget.selectedRatings)
        setPriceRange(filterdataget.priceRange)
        setPriceOrder(filterdataget.priceOrder)
  }


const SearchingProducts=(getvaluefromuser)=>{
  setForSearching(getvaluefromuser)
}




///////////////////////////////////////////////////////////////////////////////////////

// for firebase 

// first auth 
// Sign up with email and password
const signUpWithEmailAndPassword = (email, password) => {
  return createUserWithEmailAndPassword(firebaseAuth, email, password);
};

// Sign in with email and password
const signInWithEmailAndPasswordFunc = (email, password) => {
  return signInWithEmailAndPassword(firebaseAuth, email, password);
};

const [user, setUser] = useState(null);

// Check if the user is authenticated on component mount
useEffect(() => {
  const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });

  return () => unsubscribe();
}, []);

const islogin = !!user; // Convert user object to a boolean








  
  
  return (
    <AllDataContext.Provider value={{ setRentData, RentFormDataimage,RentFormDataNAME,RentFormDatatype,RentFormDataprice,electricComponets,tax,rateingfiltar,selectRate,PriceOrder,SearchingProducts,PriceRange,ForSearching,signUpWithEmailAndPassword,signInWithEmailAndPasswordFunc,islogin,
        user }}>
      {children}
    </AllDataContext.Provider>
  );
};