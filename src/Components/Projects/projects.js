import React from "react";
import firstImg from "../assets/therapiest.jpg";
import secondImg from "../assets/redux.jpg";
import thirdImg from "../assets/movie.jpg"


const Projects = () => {
    const projects = [
        {
          img: firstImg,
          title: "Online Therapy",
          desc: " This Project will allow users to schedule an appointment with a therapist and take therapy sessions online through chat,video,and voice calls.Therapists and people who need to talk to therapists but they don't have time or ability  to visit their clinic, or people who have restricted families and don't allow them to visit therapies.  Built with React js, Firebase,Test jest and Tailwind CSS. ",
          live: "https://63d2a15534670f07714bccc0--twmb.netlify.app/",
          code: "https://github.com/Roubaaa/TWMB",
        },
        {
          img: secondImg,
          title: "Redux-Toolkit",
          desc: "This project, build a small blog app. It will fetch posts and comments from an API. I've created  with Redux Toolkit (RTK) and style it with Tailwid CSS.",
          live: "http://redux-toolkit-blogs.netlify.app",
          code: "https://github.com/MaryyamSalah/Redux-toolkit",
        },
        
        {
          img: thirdImg,
          title: "Movie API",
          desc: "This is a movie database project, where it shows movies, their casts, ratings, trailers, related movies, genres, and so on.This project used The Movie DB API: https://api.themoviedb.org/3 .Build with javaScript and Tailwind CSS ",
          live: "http://movies-api-fetch.netlify.app",
          code: "https://github.com/hudahamid/movie-project",
        },
      ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[140px] border-cyan-700 pb-2">
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
              <img className="" src={project.img} alt={project.title} />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
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