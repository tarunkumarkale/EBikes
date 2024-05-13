// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Header from "./components/Header";
// import Hero from "./Pages/Hero";
// import Shop from "./Pages/Shop";





// import React from 'react'
// import Contacts from "./components/Contacts";

// const App = () => {
//   return (
//     <div>
//          <Router basename="/EBikes">
//          <Header></Header>
//          <MainCont></MainCont>

//          </Router>
//     </div>
//   )
// }











// const MainCont = () => {
//   return (
//     <>
//       <main className="relative">
//          <Routes>
//            <Route path="/Shop" element={<Shop />} />
       
//            <Route path="/" element={
//              <>
//                <section className="xl:padding-l wide:padding-r padding-b">
//                  <Hero />
//                </section>
            
             
          
            
//                <section className="padding-x sm:py-32 py-16 w-full">
//                  <Contacts />
//               </section>
          
//              </>
//            } />
//          </Routes>
//        </main>
//     </>
//   );
// };

// export default MainCont;




import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './Pages/Hero';
import Shop from './Pages/Shop';
import Contacts from './components/Contacts';

const App = () => {
  return (
    <div>
      <Router basename="/EBikes">
        <Header />
        <MainCont />
      </Router>
    </div>
  );
};

const MainCont = () => {
  return (
    <>
      <main className="relative">
        <Routes>
          <Route path="/Shop" element={<Shop />} />
          <Route
            path="/"
            element={
              <>
                <section className="xl:padding-l wide:padding-r padding-b">
                  <Hero />
                </section>
                <section className="padding-x sm:py-32 py-16 w-full">
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
