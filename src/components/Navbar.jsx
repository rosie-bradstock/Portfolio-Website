import React, {useState} from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaDiscord} from 'react-icons/fa'
import {HiOutlineMail} from "react-icons/hi"
import website_logo_template from "../assets/website_logo_template.png"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-indigo-950 text-indigo-100">
        <div>
          <img src={website_logo_template} alt="Logo" style={{width: "120px"}} />
        </div>

        {/* Menu */}
        <ul className="hidden md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>

        {/* Contents Icon */}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-indigo-950 flex flex-col justify-center items-center"}>
          <li className="py-6 text-4xl">Home</li>
          <li className="py-6 text-4xl">About</li>
          <li className="py-6 text-4xl">Projects</li>
          <li className="py-6 text-4xl">Contact</li>
        </ul>

        {/* Social Icons */}
        <div className="hidden 2xl:flex fixed flex-col top-[15%] right-[3%]">
        <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-950 via-blue-800 to-blue-950 opacity-75 p-8 mx-12 rounded-md blur-md transition duration-500 hover:opacity-100"></div>
          <div class="relative bg-indigo-900 p-8 mx-12 rounded-md text-center">
          <ul>
            <li className="w-[250px] h-[100px] flex justify-between items-center bg-gray-800 hover:scale-105 transition duration-200">
              <a className="flex justify-between items-center w-full text-indigo-100 text-2xl" href="https://github.com/rosie-bradstock">
                Github <FaGithub size={50} />
              </a>
            </li>
            <li className="w-[250px] h-[100px] flex justify-between items-center bg-blue-800 hover:scale-105 transition duration-200">
              <a className="flex justify-between items-center w-full text-indigo-100 text-2xl" href="https://www.linkedin.com/in/rosie-bradstock-421682283/">
                Linkedin <FaLinkedin size={50} />
              </a>
            </li>
            <li className="w-[250px] h-[100px] flex justify-between items-center bg-red-800 hover:scale-105 transition duration-200">
              <a className="flex justify-between items-center w-full text-indigo-100 text-2xl" href="mailto:rgb1909@gmail.com">
                Email <HiOutlineMail size={50} />
              </a>
            </li>
            <li className="w-[250px] h-[100px] flex justify-between items-center bg-blue-600 hover:scale-105 transition duration-200">
              <a className="flex justify-between items-center w-full text-indigo-100 text-2xl" href="https://discordapp.com/users/879088003941822465">
                Discord <FaDiscord size={50} />
              </a>
            </li>
          </ul>
          </div>
        </div>

      </div>
  )
}

export default Navbar