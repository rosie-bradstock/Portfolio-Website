import React from 'react'

const Home = () => {
  return (
    <div name = "home" className="w-full h-screen bg-gradient-to-r from-indigo-950 to-blue-950">
    
      {/* Container */}
      <div className="flex fixed flex-col top-[15%]">
        <div className="max-w-[1000]px mx-auto px-8 py-8 flex flex-col justify-start h-full">
        <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-950 via-purple-800 to-purple-950 opacity-25 p-8 mx-12 rounded-md blur-md transition duration-500 hover:opacity-100"></div>
          <div class="relative bg-indigo-900 p-10 mx-12 rounded-md text-left">
            <p className="text-indigo-100 text-3xl sm:text-5xl font-bold">Hi, I'm Rosie</p>
            <p className="text-indigo-300 text-1xl sm:text-2xl max-w-5xl">I'm a 17 year old student currently completing my A-levels.<br>
            </br>I have a keen intrest in computer science and hope to pursue a degree and a career in the field.</p>
          </div>
        </div>
      </div>

      <div className="flex fixed flex-col top-[50%]">
        <div className="max-w-[1000]px mx-auto px-8 py-8 flex flex-col justify-start h-full">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-950 via-purple-800 to-purple-950 opacity-25 p-8 mx-12 rounded-md blur-md transition duration-500 hover:opacity-100"></div>
          <div class="relative bg-indigo-900 p-10 mx-12 rounded-md text-left">
          <p className="text-indigo-300 text-1xl sm:text-2xl max-w-5xl">
          This is a portfolio website designed to showcase my skills and computing projects.
          The creation of this website is also intended to help me improve my skills in React and Tailwind, as well as in web development and design generally.
          </p>
          </div>
        </div>
      </div>

    </div>
    
  )
}

export default Home