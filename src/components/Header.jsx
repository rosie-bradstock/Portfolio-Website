import React, {useState} from 'react'
import { FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'

const Header = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-indigo-950 text-indigo-100">
        <div>
          <p className="text-4xl font-bold transition ease-in-out delay-100 hover:text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-green-500 to-blue-500">Rosie Bradstock</p>
        </div>

        <ul className="hidden md:flex">
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
          <li><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
        </ul>

        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-indigo-950 flex flex-col justify-center items-center"}>
          <li className="py-6 text-4xl"><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
          <li className="py-6 text-4xl"><Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link></li>
          <li className="py-6 text-4xl"><Link onClick={handleClick} to="projects" smooth={true} duration={500}>Projects</Link></li>
          <li className="py-6 text-4xl"><Link onClick={handleClick} to="experience" smooth={true} duration={500}>Experience</Link></li>
        </ul>

      </div>
  )
}

export default Header