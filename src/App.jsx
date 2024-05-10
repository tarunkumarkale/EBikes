import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Hero from './components/Hero';
import Header from './components/Header';


const App = () => {
  return (
     <>

<Router basename="/EBikes">
<Header></Header>
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
    </Router>












 
  
    </>
  );
};

export default App;

