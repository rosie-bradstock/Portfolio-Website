import React from 'react'
import {HiCursorClick} from "react-icons/hi"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div name = "home" className="w-full h-screen bg-gradient-to-r from-indigo-950 to-blue-950">
      <div className="max-w-[1000px] mx-[100px] px-4 flex flex-col justify-center h-full">
        <h1 className="text-4xl sm:text-6xl font-bold text-indigo-50">Hi, I'm Rosie</h1>
        <h2 className="text-3xl sm:text-5xl font-bold text-indigo-300">Aspiring Software Engineer</h2>
        <p className="text-indigo-100 py-4 max-w-[700px]">I'm an 18 year old student currently completing my A-levels. This website is intended to showcase my coding projects, and to allow me to gain some experience with web development and design.</p>
        <div>
          <Link to="/cv">
            <button className="text-indigo-100 border-2 px-6 py-3 my-2 flex items-center hover:bg-indigo-400 hover:border-indigo-400">CV<HiCursorClick className="ml-3" /></button>
          </Link>
          <Link to="/ps">
            <button className="text-indigo-100 border-2 px-6 py-3 my-2 flex items-center hover:bg-indigo-400 hover:border-indigo-400">Personal Statement<HiCursorClick className="ml-3" /></button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home