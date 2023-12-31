import Skills from './Skills';
import anime from 'animejs';
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useEffect, useState} from 'react';
function AboutMe() {
  const [isTyping, setIsTyping] = useState(true);
  const textArray = [
    "Hello, it's me.",
    "My name is Arbey Dzib.",
    "I'm a Software Development student.",
    "Welcome to my portfolio.",
  ];
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {


    anime({
      targets: '.anime-icon', // Targets all elements with the class "anime-icon"
      scale: [0, 1], // Animates the scale from 0 to 1
      opacity: [0, .9],
      duration: 1000, // Duration of the animation in milliseconds
      easing: 'easeInOutQuad', // Easing function for the animation  
   

    });

  

  }, []);
  return (
    <>
<Navbar/>
      <section className="black grid place-content-center mt-16 ">
      <h1 className=" text-white text-center font-semibold anime-icon contentAbt initiallyHidden text-2xl">About Me</h1>

<div className="grid  aboutMebg contentAbt  mx-12 rounded-lg">
  <div>
    <h1 className=" text-white  font-semibold p-7 text-justify initiallyHidden anime-icon    text-sm">
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

</div>
<Skills/>
      </section>
     
     <Footer />
    </>
  )
}

export default AboutMe