import React from "react";


const About = () => {
  return (
    
    <section className="background text-white px-5 py-20" >
     
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
    
        <div>
          <h2 className="text-4xl font-bold  mb-5 border-b-[5px] w-[170px] border-rose-700 pb-2">
            About Me
          </h2>

          <p className="pb-5 ">
            Hi, My Name Is Maryam Salah. I am a
            Junior Frontend Web Developer. I build beautifull websites with React and
            Tailwind CSS.
          </p>
          <p className="pb-5 ">
          I am an enthusiastic, self-motivated, reliable, responsible and hard-working person. I have achieved a lot of certificates in software programming and am ready to face new challenges. I have a great foundation of technical skills that I would bring to the role, along with my drive and work ethic.Well-versed in Front-end Coding to deliver the best user experience, with a strong skill in React js , HTML , CSS , JavaScript , Tailwind CSS , Test Jest , Firebase and many more.
          </p>

          <p>Combined with my recent Boot camp in front-end web development at Recoded,</p>

          <p  >
          I am confident I have the skills to help any Company succeed.
          </p>
        </div>

        <div>
          <img
            src="https://i.pinimg.com/originals/f5/36/01/f53601133f236d1cb167ac19f05a3d60.gif"
            alt="coding illustration"
            className=" md:ml-auto rounded-full "
          />
        </div>
      </div>
    </section>
  );
};

export default About;