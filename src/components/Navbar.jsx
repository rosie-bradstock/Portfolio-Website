import React, {useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import website_logo_template from "../assets/website_logo_template.png"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-indigo-950 text-indigo-100">
        <div>
          <img src={website_logo_template} alt="Logo Image" style={{width: "120px"}} />
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
        <div className="hidden">
          
        </div>
    </div>
  )
}

export default Navbar