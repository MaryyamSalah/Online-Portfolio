import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
// import Resume from "../assets/Resume.jpg"


const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);
 
 
  return (
    <header className="flex justify-between px-5 py-2 bg-accent text-white fixed w-full z-10">
        <div class="flex justify-between ">
        <img
            src={logo}
            alt="coding illustration"
            className="rounded-full w-12 h-12"
          />
      <a href="/" className="text-2xl font-bold text-cyan-500 px-5 ">
        Maryam Salah
      </a>
</div>
      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex">
          <li>
          <Link to ="/">About</Link>
          </li>
          <li>
          <Link to ="/projects">Projects</Link>
          </li>
          <li>
            <Link to ="/education">Education</Link>
          </li>
          <li>
            <Link to ="/contact">Contact</Link>
          </li>

        
          <button className="w-20 h-8 bg-white hover:bg-cyan-700 text-gray-800 hover:text-white text-sxl font-bold  border border-cyan-600 rounded-full shadow">
          <Link to ="/resume">Resume</Link>
        </button>
      
        
      
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav
        className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}
      >
        <ul className="flex flex-col py-12">
        <li className="py-2">
          <Link to ="/" onClick={() => setToggle(false)}>About</Link>
          </li>
          <li className="py-2">
          <Link to ="/projects" onClick={() => setToggle(false)}>Projects</Link>
          </li>
          <li className="py-2">
            <Link to ="/education" onClick={() => setToggle(false)}>Education</Link>
          </li>
          <li className="py-2">
            <Link to ="/contact" onClick={() => setToggle(false)}>Contact</Link>
          </li>

        
          <button className="w-20 h-8 bg-white hover:bg-cyan-700 text-gray-800 hover:text-white text-sxl font-bold  border border-cyan-600 rounded-full shadow">
          <Link to ="/resume" onClick={() => setToggle(false)}>Resume</Link>
        </button>
        </ul>
      </nav>

      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default Header;