import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { useEffect } from 'react';
import pic from '../assets/porfilepic.jpg'
import anime from 'animejs';
import Footer from "./Footer";
import Navbar from "./Navbar";

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
             
            },
           
          });
        }, []);
    return (
        <>
        <Navbar/>
        <div className="grid place-items-center grid-cols-1 md:grid-cols-2  max-sm:mt-20" id='Header'>
      
            <div className=" text-white initiallyHidden  headerText ">
                <p className="        hover:scale-110 duration-500 ">Hello it's me</p>
                <h1 className="       hover:scale-110 duration-500 font-bold text-6xl">Arbey Dzib</h1>
                <h2 className="    my-3  hover:scale-110 duration-500 font-semibold text-2xl">And i'm a <span className="   font-bold textPrimary ">Software Develoment student</span></h2>
                <p className="      hover:scale-110 duration-500 text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing  elit. Tempora corporis, <br /> dolore perferendis null</p>

                {/*---------------------------------- icons------------------------------------------------------------------------------------------------------------------------- */}
                <div className='flex justify-stretch  flex-wrap  mt-4 gap-5'>
                    <a className='neon-background    p-4    rounded-full' href="https://www.linkedin.com/in/arbey-alexis-dzib-hernandez-15956a255/">
                        <FaLinkedin className='  text-black   hover:scale-110 duration-500 text-4xl' />
                    </a>
                    <a className='neon-background    p-4    rounded-full' href="https://www.instagram.com/its.arbey/">
                        <FaInstagram className='  text-black   hover:scale-110 duration-500 text-4xl' />
                    </a>
                    <a className='neon-background    p-4    rounded-full' href="https://web.facebook.com/profile.php?id=100010197391139">
                        <FaFacebookF className='  text-black   hover:scale-110 duration-500 text-4xl' />
                    </a>
                    <a className='neon-background    p-4    rounded-full  ' href="https://github.com/Joestarb">
                        <FaGithub className='  text-black   hover:scale-110 duration-500 text-4xl' />
                    </a>
                </div>
            </div>

            <div className="initiallyHidden headerText photo  w-80 grid place-content-center ">
                <img className=' neon-background  p-2 rounded-full' src={pic} alt="mi fotoxd" />
            </div>

        </div>       
        <Footer/>
        </>
    );
}

export default Header;