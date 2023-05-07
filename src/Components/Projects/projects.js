import React from "react";
import firstImg from "../assets/Healing.jpg";
import secondImg from "../assets/khama.jpg";
import thirdImg from "../assets/movie.jpg"



const projects = [
  {
    img: firstImg,
    title: "Online Therapy",
    desc: " This Project will allow users to schedule an appointment with a therapist .Therapists and people who need to talk to therapists but they don't have time or ability  to visit their clinic, or people who have restricted families and don't allow them to visit therapies.  Built with React js, Firebase,Test jest and Tailwind CSS. ",
    live: "https://63d2a15534670f07714bccc0--twmb.netlify.app/",
    code: "https://github.com/Roubaaa/TWMB",
  },
  {
    img: secondImg,
    title: "Khama.net",
    desc: "This project build with HTML ,CSS and Responsive design ",
    live: "https://khama.netlify.app/",
    code: "https://github.com/MaryyamSalah/Khama-Project",
  },
  
  {
    img: thirdImg,
    title: "Movie API",
    desc: "This is a movie database project, where it shows movies, their casts, ratings, trailers, related movies, genres, and so on.This project used The Movie DB API: https://api.themoviedb.org/3 .Build with javaScript and Tailwind CSS ",
    live: "http://movies-api-fetch.netlify.app",
    code: "https://github.com/hudahamid/movie-project",
  },
];

const Projects = () => {
   

  return (
    <section className="bg-zinc-800 text-white px-5 py-32" id="projects">

      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
           <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[140px] border-rose-700 pb-2">
            Projects
          </h2>

          <p className="pb-5">
           Some of my projects. Check them out.
          </p>
        </div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img className="mx-auto w-[80] h-[64] " src={project.img} alt={project.title} />
              <div className="flex absolute left-0 right-0 top-0 bottom-0 mx-auto w-[80] h-[64]  bg-rose-900  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    className="px-5 py-2 text-black bg-rose-400 hover:bg-rose-700 hover:text-white mr-5 font-bold"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="px-5 py-2 text-black bg-rose-400 hover:bg-rose-700 hover:text-white font-bold"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;