import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="black fixed-navbar border-b-2 z-10 md:grid md:grid-cols-2 text-white place-content-center py-5">
        <div className="flex max-sm:justify-center">
          <Link className="textoCuaternario" to="/">
            My Portfolio
          </Link>
        </div>
        <div className="textoCuaternario">
          <nav className="flex justify-evenly">
            <Link to="/" className="hover:scale-110 duration-500 hover:text-white">
              Home
            </Link>
            <Link to="/proyects" className="hover:scale-110 duration-500 hover:text-white">
              Proyects
            </Link>
            <Link to="/about" className="hover:scale-110 duration-500 hover:text-white">
              About Me
            </Link>
            <Link to="/Contacto" className="hover:scale-110 duration-500 hover:text-white">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
