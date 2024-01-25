import React from 'react'

const About = () => {
  return (
    <div name = "about" className="w-full h-dvh bg-gradient-to-r from-indigo-950 to-blue-950 py-[100px]">
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                <div className ="sm:text-right pb-8 pl-4">
                    <p className="text-4xl font-bold inline border-b-4 border-indigo-500 text-indigo-100"> About</p>
                </div>
                <div></div>
            </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-2xl font-bold text-indigo-100">
                        <p>My name is Rosie Bradstock, I'm 18 years old and I am in Year 13</p>
                    </div>
                    <div>
                        <p className="text-indigo-200 text-xl">I am an enthusiastic computing student, with a keen interest in programming.</p>
                    </div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 py-10">
                <div>
                    <h1 className="sm:text-3xl text-indigo-100 py-2">Grades:</h1>
                    <h2 className="sm:text-2xl text-indigo-100">A Level:</h2>
                    <ul className="py-2 text-indigo-300 text-lg">
                        <li>Computer Science: A* Predicted</li>
                        <li>Maths: A Predicted</li>
                        <li>Physics: A Predicted</li>
                        <li>EPQ: A* Provisional (60/60)</li>
                    </ul>
                    <h2 className="sm:text-2xl text-indigo-100">GCSE:</h2>
                    <ul className="py-2 text-indigo-300 text-lg">
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
                <div className="text-indigo-300 text-xl">
                    <p>
                        I aspire to go to university next year, to study an undergraduate degree in computer science (if you're a university reading this, please let me in).
                        I'm currently working hard on my three A-levels, and have a particular interest in anything tech. My main passion in the field of Computer Science lies in
                        programming - I love working logically to solve problems, and aspire to reach fluency in a number of languages. I've progressed from working with simple drag and 
                        drop coding to now having the skills to express most problems through code, and am always enthusiastic to learn more about the field. This website is intended to
                        showcase my work, and allow me to gain some experience working with web development and design.
                    </p><br></br><p>
                        Thanks very much for checking it out!
                    </p>

                </div>
            </div>
        </div>
    </div>
  )
}

export default About