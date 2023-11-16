import React, { useState } from 'react';

import fractal_0 from "../assets/fractal_0.png";
import fractal_1 from "../assets/fractal_1.png";
import fractal_2 from "../assets/fractal_2.png";
import fractal_3 from "../assets/fractal_3.png";
import fractal_4 from "../assets/fractal_4.png";
import fractal_5 from "../assets/fractal_5.png";
import fractal_6 from "../assets/fractal_6.png";
import fractal_7 from "../assets/fractal_7.png";
import fractal_8 from "../assets/fractal_8.png";
import fractal_9 from "../assets/fractal_9.png";
import fractal_10 from "../assets/fractal_10.png";
import fractal_11 from "../assets/fractal_11.png";
import fractal_12 from "../assets/fractal_12.png";
import fractal_13 from "../assets/fractal_13.png";
import fractal_14 from "../assets/fractal_14.png";
import fractal_15 from "../assets/fractal_15.png";

import mandelbrot from "../assets/mandelbrot.png";

import website_code from "../assets/website_code.PNG";



const chaosGameImages = [
  fractal_0,
  fractal_1,
  fractal_2,
  fractal_3,
  fractal_4,
  fractal_5,
  fractal_6,
  fractal_7,
  fractal_8,
  fractal_9,
  fractal_10,
  fractal_11,
  fractal_12,
  fractal_13,
  fractal_14,
  fractal_15,
];

function ImageChange() {
  const [imageSrc, setImageSrc] = useState(chaosGameImages[0]);
  const [imageAlt, setImageAlt] = useState('Chaos Game 1');
  const [chaosGameImageNumber, setChaosGameImageNumber] = useState(0);

  const handleImageClick = () => {
    if (chaosGameImageNumber === chaosGameImages.length - 1) {
      setChaosGameImageNumber(0);
    } else {
      setChaosGameImageNumber(chaosGameImageNumber + 1);
    }
    setImageSrc(chaosGameImages[chaosGameImageNumber]);
    setImageAlt(`Chaos Game ${chaosGameImageNumber + 1}`);
  };

  return (
    <div>
      <img className="object-cover aspect-square sm:h-[425px] sm:w-[510px] lg:h-[500px] lg:w-[650px] shadow-2xl hover:shadow-indigo-500 duration-200 border-double border-4 border-indigo-900" src={imageSrc} alt={imageAlt} width="500" height="500" onClick={handleImageClick} />
    </div>
  );
}

const Projects = () => {
  return (
    <div name = "projects" className="w-full lg:h-screen sm:h-[2000px] bg-gradient-to-r from-indigo-950 to-blue-950 py-[1250px]">
        <div className="mx-[30px] px-4 flex flex-col justify-center h-full sm:mx-[100px]">
            <div>
	            <p className="text-4xl font-bold inline border-b-4 border-indigo-500 text-indigo-100">Projects</p>
            </div>

            <div className="my-[100px] grid gap-20 grid-cols-2 sm:grid-cols-3">
              <div>
                <ImageChange />
              </div>
              <div className="col-span-2">
                <p className="text-indigo-100 font-bold sm:text-lg lg:text-2xl">Chaos Game</p>
                  <ul className="text-indigo-300 pt-10 sm:text-sm lg:text-lg list-disc">
                    <li className="py-2">Creating a fractal using a regular polygon - Click the image to show more examples</li>
                    <li className="py-2">This is my first attempt at creating a fractal, as I build up to making more complex examples in the future. I used Python, including Pygame in order to plot the points on a screen. I also included the modules math, random and os</li>
                    <li className="py-2">The code creates an array containing the coordinates of the vertices of a regular polygon, then plots points at a fraction of the distance between a previously selected and new vertex. In doing this, a fractal is created. I experimented and researched to find the best way to do this, and made the code for the generation of the shape using knowledge from one of m previous projects</li>
                    <li className="py-2">I also experimented by restricting the options for the new vertex, and thus was able to explore how fractals are generated, and deepen my knowledge of this process. In doing so I was able to create new fractals for the square and pentagon.</li>
                    <li className="py-2">I also added colour in order to make my images more visually pleasing, and did so by varying RGB colour values depending on the coordinates of a pixel in relation to the screen.</li>
                    <li className="py-2">I was able to recreate a number of well known fractals, such as the Sierpinski Triangle.</li>
                    <li className="py-2"><a className="hover:underline" href="https://github.com/rosie-bradstock/chaos-game">https://github.com/rosie-bradstock/chaos-game</a></li>
                  </ul>
              </div>

              <div>
                <img className="shadow-lg hover:shadow-indigo-500 duration-200 border-double border-4 border-indigo-900" src={mandelbrot} alt="Mandelbrot Fractal" width="500" height="500" />
              </div>
              <div className="col-span-2">
                <p className="text-indigo-100 font-bold sm:text-lg lg:text-2xl">Project 2</p>
                <ul className="text-indigo-300 pt-10 sm:text-sm lg:text-lg list-disc">
                <li className="py-2">Mandelbrot fractal created using C#</li>
                  <li className="py-2">I started out by following a tutorial to create the fractal in Python, and then planned to use my skills to convert this into C#</li>
                  <li className="py-2">This project was more difficult than anticipated, because I had the goal of creating the fractal in one day, meaning that I could not spend a significant amount of time learning C# syntax</li>
                  <li className="py-2">I ended up following a few tutorials to help me in this project - these are credited in the README page on my GitHub. I also managed to stick to my time frame of one day.</li>
                  <li className="py-2">I experimented with changing the number of iterations and the resolution, and was able to create some nice images</li>
                  <li className="py-2">I added simple gradient colouring to make the images a bit more visable</li>
                  <li className="py-2">Through this project, I now understand the mathematics behind the fractal, including the use of complex numbers and the complex plane. I also now understand and can replicate basic C# syntax</li>
                  <li className="py-2"><a className="hover:underline" href="https://github.com/rosie-bradstock/mandelbrot-fractal">https://github.com/rosie-bradstock/mandelbrot-fractal</a></li>
                </ul>
              </div>

              <div>
                <img className="shadow-lg hover:shadow-indigo-500 duration-200 border-double border-4 border-indigo-900" src={website_code} alt="Website Code" width="500" height="500" />
              </div>
              <div className="col-span-2">
                <p className="text-indigo-100 font-bold sm:text-lg lg:text-2xl">Portfolio Website</p>
                <ul className="text-indigo-300 pt-10 sm:text-sm lg:text-lg list-disc">
                  <li className="py-2">This website was made to display my best achievements and projects</li>
                  <li className="py-2">This is my first venture into web development and design, and I learned a lot about the process of creating a site, as well as other aspects such as how to buy a domain and host a site</li>
                  <li className="py-2">I used React and Tailwind - this is my first experience using both, and I am now able to express what I want out of my own knowledge, rather than looking consistantly at a tutorial, which I had to do to begin with</li>
                  <li className="py-2">I followed tutorials to get the basics of the site up, and then when my knowledge developed, changed these aspects to reflect what I wanted</li>
                  <li className="py-2">I learned skills surrounding using cmd, npm and git</li>
                  <li className="py-2">I hope to keep consistantly updating this website in the future</li>
                  <li className="py-2"><a className="hover:underline" href="https://github.com/rosie-bradstock/portfolio-website">https://github.com/rosie-bradstock/portfolio-website</a></li>

                </ul>
              </div>

            </div>
        </div>
    </div>
  )
}

export default Projects