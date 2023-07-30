import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe"
import Proyects from "./Components/Proyects";
import Contact from "./Components/Contact";
import "./index.css";

function App() {
  return (
    <div className="black" id="Header">
 <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />}/>
         <Route path="/About" element={<AboutMe />} />
         <Route path="/proyects" element={<Proyects />} />
         <Route path="/contac" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </div>
   
  );
}

export default App;
