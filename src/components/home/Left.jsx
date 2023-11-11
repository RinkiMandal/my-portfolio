import React from 'react'
import { useTypewriter, Cursor, Typewriter } from "react-simple-typewriter";
import { BsCloudLightningFill, BsFacebook } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";
import { FiInstagram, FiMail, FiSend } from "react-icons/fi";
import { myyyy } from '../../assets/index'
import resume from '../../assets/RINKI MANDAL (5).pdf'

const Left = () => {

  const [text] = useTypewriter({
    words: ["FrontEnd Web Developer", "Web Developer", "Software Engineer"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });

  return (
    <div className='w-5/12 h-full bg-bodyColor shad z-10'>
        <div className='w-full h-3/5'>
        <img 
            className='h-96 w-80 ml-11 object-cover rounded-2xl'
            src={myyyy }
            alt='me'
            loading='priority'/>
        </div>
        <div className='w-full h-2/5'>
        {/* contain the intro */}
        <div className='flex flex-col items-center gap-2 py-10'>
            <h1 className='text-textColor text-4xl font-semibold'>Rinki Mandal</h1>
            <p className='text-base text-designColor tracking-wide'>{text} <Cursor cursorBlinking="false" cursorStyle="|" />
            </p>

            <div className='flex justify-center gap-2 mt-2'>
            <span className='hover:text-designColor duration-300 cursor-pointer text-xl'>
            <FaGithub />
            </span>

            <span className='hover:text-designColor duration-300 cursor-pointer text-xl'>
            <FaLinkedin />
            </span>

            <span className='hover:text-designColor duration-300 cursor-pointer text-xl'>
            <SiYoutubemusic />
            </span>

            <span className='hover:text-designColor duration-300 cursor-pointer text-xl'>
            <BsFacebook />
            </span>

            <span className='hover:text-designColor duration-300 cursor-pointer text-xl'>
            <FiInstagram />
            </span>

            <span className='hover:text-designColor duration-300 cursor-pointer text-xl'>
            <AiFillTwitterCircle />
            </span>

            <span className='hover:text-designColor duration-300 cursor-pointer text-xl'>
            <FiMail />
            </span>


            </div>

        </div>
        {/* buttons */}
        <div className="flex h-14">
          <a
            href={resume}
            target="_blank"
            className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase  gap-2 hover:text-designColor duration-300"
            rel="noreferrer"
          >
            <button className="w-full h-full flex justify-center items-center gap-2">
              Download CV <BsCloudLightningFill />
            </button>
          </a>
          <button className="w-1/2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase flex justify-center items-center gap-2 hover:text-designColor duration-300">
            Contact me <FiSend />
          </button>
        </div>

        </div>
    </div>
  )
}

export default Left