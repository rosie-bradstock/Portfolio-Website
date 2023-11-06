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
                        <p className="text-indigo-300 text-xl">I am an enthusiastic computing student, with a keen interest in programming.</p>
                    </div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 py-10">
                <div>
                    <h1 className="sm:text-2xl text-indigo-100 py-2">Grades:</h1>
                    <h2 className="sm:text-xl text-indigo-100">A Level:</h2>
                    <ul className="py-2 text-indigo-300">
                        <li>Computer Science: A* Predicted</li>
                        <li>Maths: A Predicted</li>
                        <li>Physics: A Predicted</li>
                        <li>EPQ: A* Provisional (60/60)</li>
                    </ul>
                    <h2 className="sm:text-xl text-indigo-100">GCSE:</h2>
                    <ul className="py-2 text-indigo-300">
                        <li>English Language: 8</li>
                        <li>English Literature: 9</li>
                        <li>Maths: 8</li>
                        <li>Physics: 9</li>
                        <li>Biology: 9</li>
                        <li>Chemistry: 9</li>
                        <li>French: 8</li>
                        <li>Business: 9</li>
                        <li>History: 9</li>
                        <li>Computer Science: 9</li>
                    </ul>
                </div>
                <div>
                    <p className="text-indigo-300 text-xl">LONG TEXT GOES HERE</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About