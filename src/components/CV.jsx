import React from 'react'

const CV = () => {
  return (
    <div name = "cv" className="w-full h-dvh bg-gradient-to-r from-indigo-950 to-blue-950">
      <div className="mx-[30px] px-4 flex flex-col h-full py-10">
        <div className="col-span-4">
          <p className="font-serif text-indigo-100 border-b-2 border-indigo-400 sm:text-lg md:text-xl lg:text-2xl">Rosie Bradstock CV</p>
          <p className="text-indigo-200 sm:text-sm md:text-md lg:text-lg py-2">I am an 18 year old student currently completing my A levels. I am applying to university to study Computer Science</p>
          <p className="font-serif text-indigo-100 border-b-2 border-indigo-400 sm:text-lg md:text-xl lg:text-2xl">Key Skills</p>
          <div className="text-indigo-200 sm:text-sm md:text-md lg:text-lg py-2">
            <p>I have coding skills in a number of languages and strive to reach a level of fluency in as many as possible. I frequently experiment with new languages in order to become more proficient.</p>
            <ul className = "list-disc py-2">
              <li>Good level of skill in Python, as well as using modules such as Pygame, TKinter, Matplotlib and NumPy</li>
              <li>Experience in JavaScript, HTML and CSS from developing my own website (rosiebradstock.uk). Additional skill using React and Tailwind</li>
              <li>Learning C# and Rust</li>
            </ul>
            <p>I have also gained a number of softer skills due to my previous employment and enrichment opportunities. Frequent dealing with people as a Sales Assistant and as a volunteer Teaching Assistant has given me a finesse in communication, and I excel at problem solving, critical thinking and logic. I have experience using a till and scanner, and can independently deal with the majority of customer requests at my place of work.</p>
          </div>
          <p className="font-serif text-indigo-100 border-b-2 border-indigo-400 sm:text-lg md:text-xl lg:text-2xl">Education</p>
          <div className="text-indigo-200 sm:text-sm md:text-md lg:text-lg py-2">
            <ul className = "list-disc py-2">
              <li>2017 to present at Parkstone Grammar School </li>
              <li>GCSE Grade 9 in Computer Science, English Literature, Physics, Chemistry, Biology, Business and History</li>
              <li>GCSE Grade 8 in English Language, Maths and French</li>
              <li>Predicted A* in Computer Science, A in Physics and A in Mathematics for A-level</li>
              <li>Obtained a provisional 60/60 on my EPQ on Natural Language Generation</li>
            </ul>
            <p>I am a school prefect, as well as a Computing and Physics prefect These roles involve running school events, organising tours, and helping lower years, among other things. I also set up and run Senior Coding Club, where I give aspiring STEM students an opportunity to learn to code.	</p>
          </div>
          <p className="font-serif text-indigo-100 border-b-2 border-indigo-400 sm:text-lg md:text-xl lg:text-2xl">Employment History</p>
          <div className="text-indigo-200 sm:text-sm md:text-md lg:text-lg py-2">
            <p>I worked zero hours at a small sandwich shop from June 2022 until around January 2023. Here I contributed to the shop by cooking food, preparing drinks and serving customers, as well as by cleaning, closing and opening the shop and checking inventory. I decided to seek new work due to the inconsistency of the position. In April I received new employment at WHSmith’s, where I currently work as a Sales Assistant. This position involves helping customers, taking stock, using the till, putting out and organising merchandise, and assisting in other duties to aid my coworkers.</p>
          </div>
          <p className="font-serif text-indigo-100 border-b-2 border-indigo-400 sm:text-lg md:text-xl lg:text-2xl">Hobbies and Interests</p>
          <div className="text-indigo-200 sm:text-sm md:text-md lg:text-lg py-2">
            <p>I am especially interested in computers, programming and engineering and I have competed in the Poole Rotary Technology Tournament for four years, representing my school. Most recently, I won second place in this regard. I have also participated in the UKMT Mathematical Challenge twice and have won an award both times. I also participated in my school’s production of Grease, where I helped to run the lighting (follow spots) in our tech team.</p>
            <p>I have been involved consistently in volunteering throughout my life, in many different positions.</p>
            <ul className = "list-disc py-2">
              <li>3 months of volunteering for Bronze Duke of Edinburgh Award, as a sports marshal</li>
              <li>Charity work for NCS, where I raised £350 for Dementia UK, as well as participating in other fundraising activities</li>
              <li>Charity work for NCS, where I raised £350 for Dementia UK, as well as participating in other fundraising activities</li>
              <li>Partook in a year of volunteering as a Teaching Assistant at a local primary school</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CV