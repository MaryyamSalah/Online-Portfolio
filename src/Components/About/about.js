import React from "react";
import AboutImg from "../assets/about.jpeg";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[170px] border-cyan-700 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hi, My Name Is Maryam Salah. I am a
            Frontend Developer. I build beautifull websites with React and
            Tailwind CSS.
          </p>
          <p className="pb-5">
            I am proficient in Frontend skills like HTML, CSS, JavaScript, React js, tailwind Css, firebase, GitHub, responsive design and react redux and many more.
          </p>

          <p>Combined with my recent Boot camp in front-end web development at Recoded,</p>

          <p>
          I am confident I have the skills to help any Company succeed.
          </p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default About;