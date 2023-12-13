import React from 'react'
import python_logo from "../assets/python_logo.png";
import pygame_logo from "../assets/pygame_logo.png";
import matplotlib_logo from "../assets/matplotlib_logo.png";
import react_logo from "../assets/react_logo.png";
import tailwind_logo from "../assets/tailwind_logo.png";
import javascript_logo from "../assets/javascript_logo.png";
import html_logo from "../assets/html_logo.png";
import cs_logo from "../assets/cs_logo.png";

const Experience = () => {
  return (
    <div name = "experience" className="w-full lg:h-screen sm:h-[1500px] bg-gradient-to-r from-indigo-950 to-blue-950">
        <div className="mx-[30px] px-4 flex flex-col justify-center h-full sm:mx-[100px]">
            <div>
	            <p className="text-4xl font-bold inline border-b-4 border-indigo-500 text-indigo-100"> Experience</p>
            </div>
            <div className='w-full grid grid-cols-5 sm:grid-cols-9 gap-4 py-8'>
              <div className="col-span-4">
                <p className="text-indigo-200 border-b-2 sm:text-sm md:text-md lg:text-xl">Data Analysis Work Experience</p>
                <ul className="text-indigo-300 pt-3 sm:text-sm lg:text-lg list-disc">
                  <li>I completed a week of work experience at a therapist company</li>
                  <li>I was tasked to analyse a set of template data, to find trends that could be useful to the company</li>
                  <li>Gained experience using Numpy and Matplotlib, and learned more about Github and Jira</li>
                  <li>Presented my findings to the team, demonstrating my skills in comunicaton and research</li>
                  <li>Had a chance to speak to some full stack developers, and learn more about coding in big businesses</li>
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
                <img className="rounded-lg border-4 border-indigo-500" src={cs_logo} alt="C# Logo" width="200" height="200" />
              </div>

              <div className="col-span-5 sm:col-span-9"></div>

              <div className="col-span-4">
                <p className="text-indigo-200 border-b-2 sm:text-sm md:text-md lg:text-xl">Teaching Assistant Work Experience</p>
                <ul className="text-indigo-300 pt-3 sm:text-sm lg:text-lg list-disc">
                  <li>I volunteered weekly for a year at a local primary school</li>
                  <li>I concluded the experience with a week of work experience</li>
                  <li>Develped my skills in comunication and decision making through helping the children</li>
                  <li>Was able to work with a Year 2 class to aid their learning throughout the year</li>
                  <li>Cooperated with the teachers and TA's to best assist with class development</li>
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