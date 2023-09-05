import React from 'react'
import template_image from "../assets/template_image.png";

const Experience = () => {
  return (
    <div name = "experience" className="w-full h-screen bg-gradient-to-r from-indigo-950 to-blue-950">
        <div className="mx-[30px] px-4 flex flex-col justify-center h-full sm:mx-[100px]">
            <div>
	            <p className="text-4xl font-bold inline border-b-4 border-indigo-500 text-indigo-100"> Experience</p>
            </div>
            <div className='w-full grid grid-cols-5 sm:grid-cols-9 gap-4 py-8'>
              <div className="col-span-2">
                <img src={template_image} alt="Project 2" width="300" height="300" />
              </div>
              <div className="col-span-2">
                <p className="text-indigo-200 sm:text-sm md:text-md lg:text-xl">work experience text</p>
              </div>

              <div></div>
              
              <div>
                <img src={template_image} alt="Project 2" width="200" height="200" />
              </div>
              <div>
                <img src={template_image} alt="Project 2" width="200" height="200" />
              </div>
              <div>
                <img src={template_image} alt="Project 2" width="200" height="200" />
              </div>
              <div>
                <img src={template_image} alt="Project 2" width="200" height="200" />
              </div>

              <div className="col-span-5 sm:col-span-9"></div>

              <div className="col-span-2">
                <p className="text-indigo-200 sm:text-sm md:text-md lg:text-xl">work experience text</p>
              </div>
              <div className="col-span-2">
                <img src={template_image} alt="Project 2" width="300" height="300" />
              </div>

              <div></div>

              <div>
                <img src={template_image} alt="Project 2" width="200" height="200" />
              </div>
              <div>
                <img src={template_image} alt="Project 2" width="200" height="200" />
              </div>
              <div>
                <img src={template_image} alt="Project 2" width="200" height="200" />
              </div>
              <div>
                <img src={template_image} alt="Project 2" width="200" height="200" />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Experience