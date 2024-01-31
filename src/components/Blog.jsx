import React from 'react'
import confused_man from "../assets/confused_man.jpg";
import envelope from "../assets/envelope.png";

const Blog = () => {
  return (
    <div name = "blog" className="w-full h-dvh bg-gradient-to-r from-indigo-950 to-blue-950">
      <div className="mx-[10px] sm:mx-[100px] px-4 py-5 flex flex-col justify-start h-full">
        <h1 className="text-xl sm:text-5xl text-indigo-50 py-10 hover:animate-bounce">Rosie Bradstock Blog</h1>
        <p className = "text-md sm:text-l text-indigo-200">I'm not sure what the purpose of a blog is</p>
        <p className = "text-md sm:text-l text-indigo-200">I'm going to use this space to post things that don't relate to the rest of my website</p>
      <div class="grid gap-8 lg:grid-cols-2 py-10">

        <article className="p-5 bg-white rounded-lg border border-gray-200 shadow-md">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                  <span className="text-xs font-bold inline-flex items-center px-2 py-0.5 rounded">31st January 2024</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold text-indigo-950">Please University</h2>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">Waiting for university offers is not a nice feeling at all. Today is the deadline for UCAS applications, and I hope this means that the rest of my choices start to respond to me. I've been lucky enough to recieve some offers already, so I don't know why I'm complaining, but I think in some ways the pressure from waiting is worse than a rejection. </p>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">Once all choices are in, then I will have the horrible task of picking a firm and an insurance option. Honestly, at the moment I have no idea what to do (hello university, give me a low offer and i will pick you ;) ). I will definitely be devoting some thought to this task, as three years in a place that I don't enjoy doesn't sound particually appealing. However, I had limited availability to utilise open days and similar events last year because of my job, so I need to make sure to be careful when making my final decision, as I think my knowledge at the moment is fairly limited. </p>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">In a way then, this post is an opportunity for me to fix a spelling mistake that was somewhere else on my site without devoting a whole push to it.</p>          
          </article> 

          <article className="p-5">
            <img className="shadow-lg border-double border-4 border-indigo-900 hover:animate-ping h-100 w-100" src={envelope} alt="Confused Man" width="500" height="500" />
            <p className = "text-sm sm:text-md text-indigo-200 py-1">Image by <a href="https://pixabay.com/users/clker-free-vector-images-3736/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=34738">Clker-Free-Vector-Images</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=34738">Pixabay</a></p>
            <p className = "text-md sm:text-lg text-indigo-200 py-2">This is a picture of an envelope. This relates somehow.</p>
          </article> 

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