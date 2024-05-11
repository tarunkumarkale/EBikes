import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./Pages/Hero";
import Shop from "./Pages/Shop";


const App = () => {
  return (
    <>
      <Router basename="/EBikes">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/Shop" element={<Shop />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
