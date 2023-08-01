import { useEffect } from 'react';
import anime from 'animejs';

function Contact() {
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
  return (
    <div className="max-w-md mx-auto pt-20">
      <div className=" text-4xl text-center   max-sm:mt-8  text-white">
        <div className='  relative flex'>
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
      <form className=" headerText aboutMebg shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-white  text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white  text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-white  text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="6"
            placeholder="Your Message"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className=" bg-cyan-400 hover:bg-cyan-700 text-black w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact