import ProyectsContent from "../../ProyectsContent"
import { useEffect, useRef } from "react";
import anime from 'animejs';
import Footer from "./Footer";
import Navbar from "./Navbar";
function Proyects() {
  const divRef = useRef(null);
  useEffect(() => {
    anime({
      targets: '.abtText',
     opacity: [0, 1],
      easing: 'easeInOutQuad',
      duration: 2500,
      delay: anime.stagger(200), // Para agregar un retraso escalonado a cada elemento
    });
    anime({
      targets: '.abtText2',
       opacity: [0],
      easing: 'easeInOutQuad',
      duration: 0,

    });
    const divElement = divRef.current;

    // Configura la animación usando anime.js
    anime({
      targets: divElement,
      translateY: ['100px', '0px'], // Mueve el div desde -100px a su posición original
      duration: 3000, // Duración de la animación en milisegundos (1 segundo en este caso)
      easing: 'easeInOutQuad', // Tipo de interpolación para suavizar la animación
    });

  }, []);
  return (
    <>
    <Navbar/>
    <div   className=" black max-sm:   pt-24  "  ref={divRef}  >
    <h1 className=" abtText abtText2 text-white font-semibold text-5xl text-center mt-10 ">
      Past <span className="textPrimary ">Projects</span> 
    </h1>
    <div className=" grid   place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-9 m-20 mb-3 abtText abtText2 ">
        {ProyectsContent.map((project) => (
          <div className="aboutMebg hover:scale-110 duration-500 rounded-lg mb-10" key={project.id}>
           <a href={project.url}> 
            <div className="grid   p-5 place-content-center">
            <img  className="w-96" src={project.productImage} alt={project.projectName} />
            </div>
            
            <div>
              <p className="text-white text-xl">{project.projectName}</p>
              <p className=" text-white">{project.projectDescription}</p>
            </div>
          </a>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Proyects