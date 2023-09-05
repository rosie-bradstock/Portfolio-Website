import React from 'react'
import template_image from "../assets/template_image.png";

const Projects = () => {
  return (
    <div name = "projects" className="w-full h-screen bg-gradient-to-r from-indigo-950 to-blue-950 py-[1250px]">
        <div className="mx-[30px] px-4 flex flex-col justify-center h-full sm:mx-[100px]">
            <div>
	            <p className="text-4xl font-bold inline border-b-4 border-indigo-500 text-indigo-100">Projects</p>
            </div>
            <div className="my-[100px] grid gap-20 grid-cols-2 sm:grid-cols-3">
              <div>
                <img className="shadow-lg hover:shadow-indigo-500 duration-200" src={template_image} alt="Project 1" width="500" height="500" />
              </div>
              <div className="col-span-2">
                <p className="text-indigo-100 font-bold sm:text-lg lg:text-2xl">Project 1</p>
                <p className="text-indigo-300 pt-10 sm:text-sm lg:text-lg">Explanation</p>
              </div>
              <div>
                <img className="shadow-lg hover:shadow-indigo-500 duration-200" src={template_image} alt="Project 2" width="500" height="500" />
              </div>
              <div className="col-span-2">
                <p className="text-indigo-100 font-bold sm:text-lg lg:text-2xl">Project 2</p>
                <p className="text-indigo-300 pt-10 sm:text-sm lg:text-lg">Explanation</p>
              </div>
              <div>
                <img className="shadow-lg hover:shadow-indigo-500 duration-200" src={template_image} alt="Project 3" width="500" height="500" />
              </div>
              <div className="col-span-2">
                <p className="text-indigo-100 font-bold sm:text-lg lg:text-2xl">Project 3</p>
                <p className="text-indigo-300 pt-10 sm:text-sm lg:text-lg">Explanation</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Projects