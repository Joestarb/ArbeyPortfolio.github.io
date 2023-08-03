import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebookF, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black border-t-2   z-10 md:grid md:grid-cols-2  text-white p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Sección de contacto */}
        <div className="text-center md:text-left">
          <h3 className="font-bold text-2xl">Contact</h3>
          <p>Email: arbeydzib1@gmail.com</p>
          <p>Teléfono: +52(992)133540 </p>
        </div>

        {/* Enlaces */}
        <div className="text-center  md:text-left">
          <h3 className="font-bold text-2xl">Links</h3>
          <nav className=" space-y-4">
            <a href="/" className="hover:text-cyan-400">Home</a>
            <br />
            <a href="/proyects" className="hover:text-cyan-400">Proyects</a>
            <br />
            <a href="/about" className="hover:text-cyan-400">About Me</a>
            <br />
            <a href="/contact" className="hover:text-cyan-400">Contact</a>
          </nav>
        </div>

        {/* Redes sociales */}
        <div className="text-center md:text-left">
          <h3 className="font-bold text-2xl">Social media</h3>
          <div className='flex justify-center md:justify-start mt-4 space-x-4'>
            <a href="https://www.linkedin.com/in/arbey-alexis-dzib-hernandez-15956a255/" target="_blank" rel="noopener noreferrer" className='textPrimary'>
              <FaLinkedin className='text-4xl hover:scale-110 duration-500' />
            </a>
            <a href="https://www.instagram.com/its.arbey/" target="_blank" rel="noopener noreferrer" className='textPrimary'>
              <FaInstagram className='text-4xl hover:scale-110 duration-500' />
            </a>
            <a href="https://web.facebook.com/profile.php?id=100010197391139" target="_blank" rel="noopener noreferrer" className='textPrimary'>
              <FaFacebookF className='text-4xl hover:scale-110 duration-500' />
            </a>
            <a href="https://github.com/Joestarb" target="_blank" rel="noopener noreferrer" className='textPrimary'>
              <FaGithub className='text-4xl hover:scale-110 duration-500' />
            </a>
          </div>
        </div>
      </div>

      {/* Créditos */}
      <div className="text-center mt-8">
        <p>&copy; {new Date().getFullYear()} Mi Aplicación. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
