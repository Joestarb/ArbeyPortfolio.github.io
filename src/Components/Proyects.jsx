import ProyectsContent from "../../ProyectsContent"
import { useEffect } from "react";
function Proyects() {
  useEffect(() => {
    
  }, []);
  return (
    <div className="black " id="Header">
    <h1 className="text-white font-semibold text-5xl text-center mt-16">
      Past <span className="textPrimary">Projects</span> 
    </h1>
    <div className=" grid place-content-center grid-cols-3  gap-9 m-20 mb-3 ">
        {ProyectsContent.map((project) => (
          <div className="aboutMebg  rounded-lg mb-10" key={project.id}>
            <div className="grid p-5 place-content-center">
            <img  className="w-96" src={project.productImage} alt={project.projectName} />
            </div>
            <a href="https://fastidious-arithmetic-bf0793.netlify.app/">
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