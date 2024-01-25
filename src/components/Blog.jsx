import React from 'react'
import confused_man from "../assets/confused_man.jpg";

const Blog = () => {
  return (
    <div name = "blog" className="w-full h-dvh bg-gradient-to-r from-indigo-950 to-blue-950">
      <div className="mx-[10px] sm:mx-[100px] px-4 py-5 flex flex-col justify-start h-full">
        <h1 className="text-xl sm:text-5xl text-indigo-50 py-10 hover:animate-bounce">Rosie Bradstock Blog</h1>
        <p className = "text-md sm:text-l text-indigo-200">To be quite honest, I'm not sure what the purpose of a blog is</p>
        <p className = "text-md sm:text-l text-indigo-200">I'm going to use this space to post things that are funny and don't relate to the rest of my website</p>
        <p className = "text-md sm:text-l text-indigo-200">This part is not intended to be professional in any capacity, please don't judge me</p>

      <div class="grid gap-8 lg:grid-cols-2 py-10">

          <article className="p-5 bg-white rounded-lg border border-gray-200 shadow-md">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                  <span className="text-xs font-bold inline-flex items-center px-2 py-0.5 rounded">25th January 2024</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold text-indigo-950">My First Blog Post</h2>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">This is an example of a post that I could put in my blog. I don't have much right now, but hopefully this will change in the future.</p>
          </article> 

          <article className="p-5">
            <img className="shadow-lg border-double border-4 border-indigo-900 hover:animate-spin" src={confused_man} alt="Confused Man" width="500" height="500" />
            <p className = "text-sm sm:text-md text-indigo-200 py-1"><a href="https://www.freepik.com/free-photo/puzzled-young-emotional-man-posing-against-white-wall_11136291.htm#query=confused%20man&position=21&from_view=keyword&track=ais&uuid=595b84f5-4568-44ec-944b-78b6d9c04258">Image by wayhomestudio</a> on Freepik</p>
            <p className = "text-md sm:text-lg text-indigo-200 py-2">This is a picture of a confused man. He represents me as I try to figure out what this page should be for. I've also made him spin as I think it is very funny.</p>
          </article> 

        </div>

      </div>
    </div>
  )
}

export default Blog