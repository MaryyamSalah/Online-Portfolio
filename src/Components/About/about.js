import React from "react";
import AboutImg from "../assets/about.jpeg";


const About = () => {
  return (
    
    <section className="bg-rose-50 text-white px-5 py-32" id="about">
     
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
    
        <div className="about-info">
          <h2 className="text-4xl font-bold text-black mb-5 border-b-[5px] w-[170px] border-rose-700 pb-2">
            About Me
          </h2>

          <p className="pb-5 text-gray-900">
            Hi, My Name Is Maryam Salah. I am a
            Junior Frontend Web Developer. I build beautifull websites with React and
            Tailwind CSS.
          </p>
          <p className="pb-5 text-gray-800">
          I am an enthusiastic, self-motivated, reliable, responsible and hard-working person. I have achieved a lot of certificates in software programming and am ready to face new challenges. I have a great foundation of technical skills that I would bring to the role, along with my drive and work ethic.Well-versed in Front-end Coding to deliver the best user experience, with a strong skill in React js , HTML , CSS , JavaScript , Tailwind CSS , Test Jest , Firebase and many more.
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