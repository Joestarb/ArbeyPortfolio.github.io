  import React from "react";


  function Navbar() {
    return (
      <>
        <div className="black   fixed-navbar border-b-2   z-10 grid grid-cols-2  text-white place-content-center py-5">
          <div>
            <a className="textoCuaternario " href="/">Mi Portfolio</a>
          </div>
          <div className="textoCuaternario">
            <nav className="flex justify-evenly">
              <a
                
                href="/"
                className="hover:scale-110 duration-500 hover:text-white"
              >
                Home
              </a>
              <a
                href="/proyects"
          
                className="hover:scale-110 duration-500 hover:text-white"
              >
                Proyects
              </a>
              <a
                     href="/about"          
             
                className="hover:scale-110 duration-500 hover:text-white"
              >
                About Me
              </a>
              <a
                                
              
                className="hover:scale-110 duration-500 hover:text-white"
              >
                Contact
              </a>
            </nav>
           
          </div>
          <div className="   "></div>
        </div>
      </>
    );
  }

  export default Navbar;
