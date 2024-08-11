import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './Pages/Hero';
import Shop from './Pages/Shop';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Description from './Pages/Description';
import About from './components/About';


import  SlideNormalBike from "./Pages/SlideNormalBike"
import NewCylce from './Pages/Offertext';
import Gallery from './components/Gallery';
import Varient from './Pages/Varient';
import Blog from './Pages/blog';
import Services from './components/Services';
import RentForm from './DesignSection/Rentform';
import { AllDataProvider } from './context/MyContext';
import Popupmodelforbuy from './Pages/Popupmodelforbuy';
import SigninandsignUp from './Pages/SigninandsignUp';
import AllOrderProducts from './Pages/AllOrderProducts';



const App = () => {
  return (
    <AllDataProvider>
    <div>
      <Router basename="/EBikes">
        <Header /> 
        <MainCont />
        <Footer></Footer>
      </Router>
    </div>
    </AllDataProvider>
  );
};

const MainCont = () => {
  return (
    <>

      <main className="relative">
        <Routes>
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Description" element={<Description />} />
          <Route path="/About" element={<About/>} />
          <Route path="/Gallery" element={<Gallery/>} />
          <Route path="/Services" element={<Services/>}/> 
          <Route path='/SigninandsignUp' element={<SigninandsignUp/>}/>
          <Route path='/AllOrderProducts' element={<AllOrderProducts/>}/>
      
          <Route path="/RentForm" element={<RentForm />} />
          <Route path="/Popupmodelforbuy" element={<Popupmodelforbuy/>} />
         
         
          <Route
            path="/"
            element={
              <>
                <section >
                  <Hero />
                </section>
            <section>
              <NewCylce></NewCylce>
        </section>
            <section>
              <SlideNormalBike></SlideNormalBike>
        </section>
        <section>
        <Varient></Varient>
        </section>
        <section>
       <Blog/>
        </section>
     
                <section >
                  <Contacts />
                </section>
          
              </>
            }
          />
        </Routes>
      </main>
    </>
  );
};

export default App;