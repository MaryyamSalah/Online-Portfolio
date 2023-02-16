import React from "react";
import project from "../assets/project.jpg";


const Projects = () => {
    const projects = [
        {
          img: project,
          title: "Healing",
          desc: " A team work project. Built with react js, firebase,test jest and tailwind Css ",
          live: "https://63d2a15534670f07714bccc0--twmb.netlify.app/",
          code: "https://github.com/Roubaaa/TWMB",
        },
        {
          img: project,
          title: "my portfolio",
          desc: "Portfolio website , Created with HTML and Tailwind Css",
          live: "https://glistening-mousse-840fe0.netlify.app/index.html",
          code: "https://github.com/MaryyamSalah/Portfolio",
        },
        {
          img: project,
          title: "css projects",
          desc: "team project , created with HTML and Css",
          live: "",
          code: "https://github.com/Banel-Mikhael/flamingo-rest",
        },
        {
          img: project,
          title: "Movie API",
          desc: "team project , created with movie API ",
          live: "",
          code: "https://github.com/daliaJR/movie-project",
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
            These are some of my best projects. I have built these with React,
             and tailwind CSS. Check them out.
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