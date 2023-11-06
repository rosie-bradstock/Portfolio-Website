import React from 'react'
import template_image from "../assets/template_image.png";
import python_logo from "../assets/python_logo.png";
import pygame_logo from "../assets/pygame_logo.png";
import matplotlib_logo from "../assets/matplotlib_logo.png";
import react_logo from "../assets/react_logo.png";
import tailwind_logo from "../assets/tailwind_logo.png";
import javascript_logo from "../assets/javascript_logo.png";
import html_logo from "../assets/html_logo.png";

const Experience = () => {
  return (
    <div name = "experience" className="w-full h-screen bg-gradient-to-r from-indigo-950 to-blue-950">
        <div className="mx-[30px] px-4 flex flex-col justify-center h-full sm:mx-[100px]">
            <div>
	            <p className="text-4xl font-bold inline border-b-4 border-indigo-500 text-indigo-100"> Experience</p>
            </div>
            <div className='w-full grid grid-cols-5 sm:grid-cols-9 gap-4 py-8'>
              <div className="col-span-4">
                <p className="text-indigo-200 border-b-2 sm:text-sm md:text-md lg:text-xl">Data Analysis Work Experience</p>
                <ul className="text-indigo-300 pt-3 sm:text-sm lg:text-lg list-disc">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>

              <div></div>
              
              <div>
                <img className="rounded-lg border-4 border-indigo-500" src={python_logo} alt="Python Logo" width="200" height="200" />
              </div>
              <div>
                <img className="rounded-lg border-4 border-indigo-500" src={pygame_logo} alt="Pygame Logo" width="200" height="200" />
              </div>
              <div>
                <img className="rounded-lg border-4 border-indigo-500" src={matplotlib_logo} alt="Matplotlib Logo" width="200" height="200" />
              </div>
              <div>
                <img className="rounded-lg border-4 border-indigo-500" src={template_image} alt="Skill Picture" width="200" height="200" />
              </div>

              <div className="col-span-5 sm:col-span-9"></div>

              <div className="col-span-4">
                <p className="text-indigo-200 border-b-2 sm:text-sm md:text-md lg:text-xl">Teaching Assistant Work Experience</p>
                <ul className="text-indigo-300 pt-3 sm:text-sm lg:text-lg list-disc">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>

              <div></div>

              <div>
                <img className="rounded-lg border-4 border-indigo-500" src={html_logo} alt="HTML logo" width="200" height="200" />
              </div>
              <div>
                <img className="rounded-lg border-4 border-indigo-500" src={javascript_logo} alt="JavaScript Logo" width="200" height="200" />
              </div>
              <div>
                <img className="rounded-lg border-4 border-indigo-500" src={react_logo} alt="React Logo" width="200" height="200" />
              </div>
              <div>
                <img className="rounded-lg border-4 border-indigo-500" src={tailwind_logo} alt="Tailwind Logo" width="200" height="200" />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Experience