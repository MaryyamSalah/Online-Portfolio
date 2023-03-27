import React from "react";
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return <div className="py-4 text-center bg-accent text-white  "> 
   <div className="flex justify-center py-5 ">
            <a
              href="https://github.com/MaryyamSalah"
              className="pr-4 inline-block text-cyan-500 hover:text-white"
            >
              {" "}
              <AiOutlineGithub size={40} />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/maryam-salah"
              className="pr-4 inline-block text-cyan-500 hover:text-white"
            >
              {" "}
              <AiOutlineLinkedin size={40} />{" "}
            </a>
            <a
              href="https://twitter.com/maryyumma"
              className="pr-4 inline-block text-cyan-500 hover:text-white"
            >
              {" "}
              <AiOutlineTwitter size={40} />{" "}
            </a>
            
          </div>

  
  
  </div>;
};

export default Footer;