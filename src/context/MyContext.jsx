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

              import { getFirestore, collection, addDoc,getDocs } from "firebase/firestore";
              import { getStorage, ref, uploadBytes ,getDownloadURL} from "firebase/storage";


           
              

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


const [forlogologin,setforlogologin]=useState(null)


const Forsigintextlogo = (name) => {
  const nameParts = name.trim().split(' ');
  const initials = nameParts.map(word => word[0].toUpperCase()).join('');
  setforlogologin(initials)
  return initials

};


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




const firestore = getFirestore(app); // Firestore instance document
const storage = getStorage(app); // image and audio and video


  // Function to create product Buyorder


const handleCreateBuyOrders = async (name, bicyclename, bicycletype, price, coverUrl) => {
  try {
    // Fetch the image from the URL and convert it into a Blob
    const response = await fetch(coverUrl);
    const blob = await response.blob();   // this is the way of convert to blob

    // Create a reference for the image in Firebase Storage
    const imageRef = ref(storage, `uploads/images/${Date.now()}-${name}.jpg`); // Use name or any other identifier

    // Upload the Blob to Firebase Storage
    const uploadResult = await uploadBytes(imageRef, blob);
    console.log("Image uploaded successfully:", uploadResult);

    // Get the download URL of the uploaded image
    const downloadURL = await getDownloadURL(uploadResult.ref);
    console.log("Download URL:", downloadURL);

    // Create a new document in the 'Buyproducts' collection in Firestore
    const newDocRef = await addDoc(collection(firestore, 'Buyproducts'), {
      name,
      bicyclename,
      price,
      bicycletype,
      imageURL: downloadURL, // Store the download URL in Firestore
    });

    console.log("Buy order created successfully:", newDocRef.id);
    return newDocRef;
  } catch (error) {
    console.error("Error creating buy order:", error.message);
    throw error;  // Optionally rethrow the error after logging
  }
};


// retrive your data
  const [orders, setOrders] = useState([]);

  const processBuyOrderData = async () => {
    try {
      const querySnapshot = await getDocs(collection(firestore, "Buyproducts"));
      const ordersData = [];

      querySnapshot.forEach((doc) => {
        ordersData.push(doc.data());
      });

      setOrders(ordersData);
    } catch (error) {
      console.error("Error processing buy order data: ", error.message);
    }
  };

  useEffect(() => {
    processBuyOrderData();
  }, []);








  
  
  return (
    <AllDataContext.Provider value={{ setRentData, RentFormDataimage,RentFormDataNAME,RentFormDatatype,RentFormDataprice,electricComponets,tax,rateingfiltar,selectRate,PriceOrder,SearchingProducts,PriceRange,ForSearching,signUpWithEmailAndPassword,signInWithEmailAndPasswordFunc,islogin,
        user ,Forsigintextlogo,forlogologin,handleCreateBuyOrders,orders}}>
      {children}
    </AllDataContext.Provider>
  );
};