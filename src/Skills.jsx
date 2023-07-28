import css from "./assets/css3.svg"
import git from "./assets/git.svg"
import github from "./assets/github.svg"
import html from "./assets/html-5.svg"
import js from "./assets/javascript.svg"
import react from "./assets/react.png"
import { BiLogoTailwindCss } from 'react-icons/Bi'
import { SiNestjs } from 'react-icons/si'
import {BiLogoReact} from 'react-icons/Bi'

function Skills() {
  return (
    <div className="colorTerciario grid place-content-center">
      <h1 className=" text-white text-center font-semibold  text-2xl">Skills</h1>

      <div className="flex flex-wrap justify-around gap-6 ">
        <img className="hover:scale-110 duration-500 w-20" src={html} alt="" />
        <img className="hover:scale-110 duration-500 w-20" src={css} alt="" />
        <img className="hover:scale-110 duration-500 w-20" src={js} alt="" />
        <BiLogoReact className="hover:scale-110 duration-500  text-8xl text-cyan-400"/>
        <img className="hover:scale-110 duration-500 w-20" src={git} alt="" />
        <img className="hover:scale-110 duration-500 w-20" src={github} alt="" />
        <BiLogoTailwindCss className='hover:scale-110 duration-500  text-8xl text-blue-400' />
        <SiNestjs className='hover:scale-110 duration-500  text-8xl text-red-600' />



      </div>
    </div>
  )
}

export default Skills