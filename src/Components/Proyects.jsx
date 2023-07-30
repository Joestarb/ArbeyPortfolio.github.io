import ProyectsContent from "../../ProyectsContent"
import { useEffect } from "react";
import anime from 'animejs';
function Proyects() {
  useEffect(() => {
    anime({
      targets: '.abtText',
      translateY: 0,
      opacity: [0, 1],
      easing: 'easeInOutQuad',
      duration: 2500,
      delay: anime.stagger(200), // Para agregar un retraso escalonado a cada elemento
    });
    anime({
      targets: '.abtText2',
      translateY: 100,
      opacity: [0],
      easing: 'easeInOutQuad',
      duration: 0,

    });

  }, []);
  return (
    <div className=" black max-sm:   pt-24  ">
    <h1 className=" abtText abtText2 text-white font-semibold text-5xl text-center mt-16 ">
      Past <span className="textPrimary ">Projects</span> 
    </h1>
    <div className=" grid   place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-9 m-20 mb-3 abtText abtText2 ">
        {ProyectsContent.map((project) => (
          <div className="aboutMebg  rounded-lg mb-10" key={project.id}>
            <div className="grid p-5 place-content-center">
            <img  className="w-96" src={project.productImage} alt={project.projectName} />
            </div>
            <a href={project.url}> 
            <div>
              <p className="text-white text-xl">{project.projectName}</p>
              <p className=" text-white">{project.projectDescription}</p>
            </div>
          </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Proyects