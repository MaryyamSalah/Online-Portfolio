import React from "react";
import Resume from "../assets/Resume.png";


const About = () => {
  return (
    <section className="bg-contain bg-secondery text-white px-5 py-32">
      

        <div className="about-img">
    
          <img
            src={Resume}
            alt="coding illustration"
            className="lgw-[80%] md:mx-auto"
          />
        </div>
     
    </section>
  );
};

export default About;