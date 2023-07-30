import css from "../assets/css3.svg"
import git from "../assets/git.svg"
import html from "../assets/html-5.svg"
import { AiFillGithub } from 'react-icons/ai'
import js from "../assets/javascript.svg"
import { BiLogoTailwindCss } from 'react-icons/Bi'
import { SiNestjs } from 'react-icons/si'
import { BiLogoReact } from 'react-icons/Bi'
import { useEffect } from 'react';
function Skills() {
  return (
    <div className=" mt-14 bg-cover"> 
    <h1 className=" text-white text-center font-semibold  anime-icon initiallyHidden text-2xl ">Skills</h1>
    <div className=" grid   sm:grid-cols-3 md:grid-cols-6  lg:grid-cols-8"  >
    <div className="hover:scale-110 duration-500 ">
        <img className=" duration-500  initiallyHidden  Rotate anime-icon  w-20" src={html} alt="" />
      </div>
      <div className="hover:scale-110 duration-500 ">
        <img className=" duration-500  initiallyHidden Rotate anime-icon  w-20" src={css} alt="" />

      </div>
      <div className="hover:scale-110 duration-500 ">
        <img className=" duration-500  initiallyHidden Rotate anime-icon  w-20" src={js} alt="" />

      </div>

      <div className="hover:scale-110 duration-500 ">
        <BiLogoReact className=" duration-500  initiallyHidden Rotate anime-icon   text-8xl text-cyan-400" />

      </div>
      <div className="hover:scale-110 duration-500 ">
        <img className=" duration-500  initiallyHidden Rotate anime-icon  w-20" src={git} alt="" />

      </div>

      <div className="hover:scale-110 duration-500 ">
        <AiFillGithub className=" duration-500  initiallyHidden Rotate anime-icon   text-8xl   text-white" />

      </div>

      <div className="hover:scale-110 duration-500 ">
        <BiLogoTailwindCss className=' duration-500  initiallyHidden Rotate anime-icon   text-8xl text-blue-400' />

      </div>

      <div className="hover:scale-110 duration-500 ">
        <SiNestjs className=' duration-500  initiallyHidden Rotate anime-icon   text-8xl text-red-600' />

      </div>

    </div>

    </div>
  )
}

export default Skills