import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

import Home from './pages/Home/Home';
import Programs from "./pages/Programs/Programs";
import Gallery from "./pages/Gallery/Gallery";
import AboutUs from "./pages/AboutUs/AboutUs";
import FAQs from "./pages/FAQs/Faqs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


const App =  () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Programs" element={<Programs />}/>
        <Route path="/Gallery" element={<Gallery />}/>
        <Route path="/AboutUs" element={<AboutUs />}/>
        <Route path="/FAQs" element={<FAQs />}/>
      </Routes>
      <Footer/>
    </Router>

  );
}

export default App;
