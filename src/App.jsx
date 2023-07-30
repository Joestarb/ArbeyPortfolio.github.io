import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe"
import Proyects from "./Components/Proyects";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />}/>
         <Route path="/About" element={<AboutMe />} />
         <Route path="/proyects" element={<Proyects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
