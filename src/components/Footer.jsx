import {FaGithub, FaLinkedin, FaDiscord} from 'react-icons/fa'
import {HiOutlineMail} from "react-icons/hi"

const Footer = () => {
    return (
        <div className="sticky bottom-0 w-full h-[50px] flex justify-between items-center px-4 bg-indigo-950 text-indigo-100 ">

            <div>
                <ul className="hidden md:flex justify-between">
                    <li><a className="hover:underline flex justify-between" href="https://github.com/rosie-bradstock">Github<FaGithub className="ml-3" size={30} /></a></li>
                    <li><a className="hover:underline flex justify-between" href="https://www.linkedin.com/in/rosie-bradstock-421682283/">LinkedIn<FaLinkedin className="ml-3" size={30} /></a></li>
                    <li><a className="hover:underline flex justify-between" href="mailto:rgb1909@gmail.com">Email<HiOutlineMail className="ml-3" size={30} /></a></li>
                    <li><a className="hover:underline flex justify-between" href="https://discordapp.com/users/879088003941822465">Discord<FaDiscord className="ml-3" size={30} /></a></li>
                </ul>
            </div>

            <div>
                <p className="hidden lg:flex">Made using React and Tailwind, Hosted with Github Pages</p>
            </div>
  
        </div>
    )
  }
  
  export default Footer