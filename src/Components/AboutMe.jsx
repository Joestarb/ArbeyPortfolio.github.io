import css from "../assets/css3.svg"
import git from "../assets/git.svg"
import html from "../assets/html-5.svg"
import { AiFillGithub } from 'react-icons/ai'
import js from "../assets/javascript.svg"
import { BiLogoTailwindCss } from 'react-icons/Bi'
import { SiNestjs } from 'react-icons/si'
import { BiLogoReact } from 'react-icons/Bi'
import { useEffect } from 'react';
import anime from 'animejs';
function AboutMe() {
  useEffect(() => {

  
    anime({
      targets: '.anime-icon', // Targets all elements with the class "anime-icon"
      scale: [0, 1], // Animates the scale from 0 to 1
      opacity: [0, .9],
      duration: 1000, // Duration of the animation in milliseconds
      easing: 'easeInOutQuad', // Easing function for the animation  
    });
    anime({
      targets: '.abtText',
      translateX: 0,
      opacity: [0, 1],
      easing: 'easeInOutQuad',
      duration: 2500,
      delay: anime.stagger(200), // Para agregar un retraso escalonado a cada elemento
    });
    anime({
      targets: '.abtText2',
      translateX: -1000,
      opacity: [0],
      easing: 'easeInOutQuad',
      duration: 0,
      
    });

  }, []);
  return (
    <div className="black grid place-content-center    " id='Header'>
      <h1 className=" text-white text-center font-semibold anime-icon contentAbt initiallyHidden text-2xl">About Me</h1>
      <div className="grid grid-cols-2 place-content-center aboutMebg contentAbt  mx-12 rounded-lg">

        <div>
          <h1 className=" text-white  font-semibold p-7 text-justify initiallyHidden  abtText2 abtText text-sm">
            I'm a 19-year-old student of software development with a passion for exploring
            the world of web development. As an enthusiastic self-learner, I find joy in continuously
            expanding my knowledge and skills in the dynamic field of front-end web development.
            My journey in this domain has allowed me to craft captivating and user-friendly
            interfaces that bring ideas to life. Through my projects, I aim to create seamless user
            experiences and leverage the latest web technologies to build modern, responsive, and
            visually appealing websites. As I embark on this exciting path, I'm eagerly looking forward
            to challenging myself, collaborating with like-minded individuals, and making a meaningful
            impact in the digital world. Join me on this adventure as I strive to push the boundaries of
            creativity and innovation in the ever-evolving landscape of front-end web development
          </h1>

        </div>
        <div></div>

      </div>


      <h1 className=" text-white text-center font-semibold  anime-icon initiallyHidden text-2xl mt-12">Skills</h1>
      <div className="flex flex-wrap justify-around gap-6 anime-icon initiallyHidden">
        <img className="  hover:scale-110 duration-500 w-20" src={html} alt="" />

        <img className="  hover:scale-110 duration-500 w-20" src={css} alt="" />

        <img className="  hover:scale-110 duration-500 w-20" src={js} alt="" />

        <BiLogoReact className="  hover:scale-110 duration-500  text-8xl text-cyan-400" />

        <img className="  hover:scale-110 duration-500 w-20" src={git} alt="" />

        <AiFillGithub className="  hover:scale-110 duration-500  text-8xl   text-white" />

        <BiLogoTailwindCss className='  hover:scale-110 duration-500  text-8xl text-blue-400' />

        <SiNestjs className='  hover:scale-110 duration-500  text-8xl text-red-600' />



      </div>
    </div>
  )
}

export default AboutMe