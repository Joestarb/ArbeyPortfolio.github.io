import { useEffect } from 'react';
import anime from 'animejs';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
function Contacto() {
  const [state, handleSubmit] = useForm('xpzgpagps');
  const [formFilled, setFormFilled] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);

  if (state.succeeded && formSubmitted) {
    // Si el formulario se envió correctamente y se mostró la alerta, recargar la página
    setTimeout(() => {
      window.location.reload();
    }, 2000); // Recargar después de 2 segundos (puedes ajustar este tiempo)

    return <p>Thanks for joining!</p>;
  }

 
  useEffect(() => {
      
    anime({
      targets: '.translateTXT',
      translateY: 20,
      direction: 'alternate',
      loop: 1,
      opacity:[1],
      delay: function(el, i, l) {
        return i * 100;
      },
      endDelay: function(el, i, l) {
        return (l - i) * 100;
      }
    });
    anime({
      targets: '.translateTXT2',
      translateY:-20,
    
      direction: 'alternate',
      loop: 1,
      opacity:[1],
      delay: function(el, i, l) {
        return i * 100;
      },
      endDelay: function(el, i, l) {
        return (l - i) * 100;
      }
    });
    anime({
      targets: '.headerText',
      translateX: 0,
      opacity: [0, 1],
      easing: 'easeInOutQuad',
      duration: 1500,
      delay: anime.stagger(200), // Para agregar un retraso escalonado a cada elemento
    });  
    
  
    }, []);
    const handleFormSubmit = (e) => {
      // Comprobar si los campos del formulario están llenos antes de enviar
      const form = e.target;
      const inputs = form.querySelectorAll('input, textarea');
      let isFormFilled = true;
      inputs.forEach((input) => {
        if (!input.value.trim()) {
          isFormFilled = false;
        }
      });
  
      setFormFilled(isFormFilled);
  
      if (isFormFilled) {
        handleSubmit(e);
        setFormSubmitted(true);
        alert('Formulario enviado correctamente.');
      } else {
        alert('Por favor, completa todos los campos antes de enviar el formulario.');
      }
    };
  
  return (
    <>
    <Navbar/>
    <div className="max-w-md mx-auto pt-20">
      <div className=" text-4xl text-center   max-sm:mt-8  text-white">
        <div className='  relative flex headerText'>
      <p className='translateTXT translateTXT2   '>C</p>
      <p className='translateTXT translateTXT2   '>o</p>
      <p className='translateTXT translateTXT2   '>n</p>
      <p className='translateTXT translateTXT2   '>t</p>
      <p className='translateTXT translateTXT2   '>a</p>
      <p className='translateTXT translateTXT2   '>c</p>
      <p className='translateTXT translateTXT2   '> t M</p>
      <p className='translateTXT translateTXT2   '>e</p>
        </div>
    
    

      </div>
      <form
          className=" headerText aboutMebg shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleFormSubmit} // Cambiado para llamar a handleFormSubmit
        > 
      <div className="mb-4">
        <label htmlFor="name" className="block text-white text-sm font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Your Name"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Your Email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-white text-sm font-bold mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          rows="6"
          placeholder="Your Message"
        ></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          disabled={state.submitting}
          className="bg-cyan-400 hover:bg-cyan-700 text-black w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {state.submitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
    </div>
    <Footer/>
    </>
  )
}

export default Contacto