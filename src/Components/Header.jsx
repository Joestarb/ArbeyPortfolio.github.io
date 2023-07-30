import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { useEffect } from 'react';
import anime from 'animejs';

function Header() {
    useEffect(() => {
      
        anime({
            targets: '.headerText',
            translateX: 0,
            opacity: [0, 1],
            easing: 'easeInOutQuad',
            duration: 1500,
            delay: anime.stagger(200), // Para agregar un retraso escalonado a cada elemento
          });   
          anime({
            targets: '.photo', // Selecciona el elemento por su clase CSS
            
            translateX: {
              value:   0,
              duration: 800
            },
            rotate: {
              value: 360,
              duration: 1800,
              easing: 'easeInOutSine'
            },
            scale: {
              value: 1,
              duration: 1600,
              delay: 800,
              easing: 'easeInOutQuart',
              delay: 250 
            },
           
          });
        }, []);
    return (
        <div className="grid place-items-center grid-cols-2   black" id='Header'>
            <div className=" text-white initiallyHidden  headerText ">
                <p className="        hover:scale-110 duration-500 ">Hello it's me</p>
                <h1 className="       hover:scale-110 duration-500 font-bold text-6xl">Arbey Dzib</h1>
                <h2 className="    my-3  hover:scale-110 duration-500 font-semibold text-2xl">And i'm a <span className="   font-bold textPrimary">Software Develoment student</span></h2>
                <p className="      hover:scale-110 duration-500 text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing  elit. Tempora corporis, <br /> dolore perferendis null</p>

                {/*---------------------------------- icons------------------------------------------------------------------------------------------------------------------------- */}
                <div className='flex justify-stretch  mt-4 gap-5'>
                    <a href="">
                        <FaLinkedin className=' textPrimary   hover:scale-110 duration-500 text-4xl' />
                    </a>
                    <a href="">
                        <FaInstagram className=' textPrimary   hover:scale-110 duration-500 text-4xl' />
                    </a>
                    <a href="">
                        <FaFacebookF className=' textPrimary   hover:scale-110 duration-500 text-4xl' />
                    </a>
                    <a href="">
                        <FaGithub className=' textPrimary   hover:scale-110 duration-500 text-4xl' />
                    </a>
                </div>
            </div>

            <div className="initiallyHidden photo bgPrimary grid place-content-center headerText" style={{ borderRadius: "50%", width: "400px", height: "400px" }}>
                <img src="" alt="mi fotoxd" />
            </div>
        </div>
    );
}

export default Header;