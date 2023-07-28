import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <>
      <div className="black  fixed-navbar   z-10 grid grid-cols-2  text-white place-content-center py-5">
        <div>
          <a className="textoCuaternario " href="">Mi Portfolio</a>
        </div>
        <div className="textoCuaternario">
          <nav className="flex justify-evenly">
            {/* Utilizamos el componente Link de react-scroll para crear enlaces con animación */}
            <Link
              to="home" // Nombre de la sección a la que quieres desplazarte (debe coincidir con el nombre del Element en el componente App)
              smooth={true} // Desplazamiento suave
              duration={500} // Duración de la animación en milisegundos
              className="hover:scale-110 duration-500 hover:text-white"
            >
              Home
            </Link>
            <Link
              to="proyects"
              smooth={true}
              duration={500}
              className="hover:scale-110 duration-500 hover:text-white"
            >
              Proyects
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="hover:scale-110 duration-500 hover:text-white"
            >
              Skills
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hover:scale-110 duration-500 hover:text-white"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
