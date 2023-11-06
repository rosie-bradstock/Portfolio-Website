import React from 'react'

const About = () => {
  return (
    <div name = "about" className="w-full h-screen bg-gradient-to-r from-indigo-950 to-blue-950">
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                <div className ="sm:text-right pb-8 pl-4">
                    <p className="text-4xl font-bold inline border-b-4 border-indigo-500 text-indigo-100"> About</p>
                </div>
                <div></div>
            </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-2xl font-bold text-indigo-100">
                        <p>My name is Rosie Bradstock and I am in Year 13</p>
                    </div>
                <div>
                    <p className="text-indigo-300 text-xl">
                        I am an enthusiastic computing student, with a keen interest in programming.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About