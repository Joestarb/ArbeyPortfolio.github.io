import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

function Header() {
    return (
        <div className="grid place-items-center grid-cols-2  black " id='Header'>
            <div className=" text-white">
                <p className="  ">Hello it's me</p>
                <h1 className=" font-bold text-6xl">Arbey Dzib</h1>
                <h2 className=" font-semibold text-2xl">And i'm a <span className=" font-bold textPrimary">Front-end Developer</span></h2>
                <p className=" text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing  elit. Tempora corporis, <br /> dolore perferendis null</p>

                {/*---------------------------------- icons------------------------------------------------------------------------------------------------------------------------- */}
                <div className=' flex  justify-stretch mt-4 gap-5'>
                    <a href="">
                        <FaLinkedin className=' textPrimary hover:scale-110 duration-500     text-4xl' />
                    </a>
                    <a href="">
                        <FaInstagram className='textPrimary hover:scale-110 duration-500     text-4xl ' />
                    </a>
                    <a href="">
                        <FaFacebookF className='textPrimary hover:scale-110 duration-500     text-4xl'/>
                    </a>
                    <a href="">
                        <FaGithub className='textPrimary hover:scale-110 duration-500     text-4xl'/>
                    </a>

                </div>
                {/*---------------------------------- icons------------------------------------------------------------------------------------------------------------------------- */}

            </div>

            <div className=" photo bgPrimary grid place-content-center" style={{ borderRadius: "50%", width: "400px", height: "400px" }}>
                <img src="" alt="mi fotoxd" />
            </div>

        </div>
    )
}

export default Header