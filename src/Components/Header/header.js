import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link , NavLink} from "react-router-dom";
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
      <nav className="flex hidden md:block ">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link-active text-cyan-500 px-8" : "link px-8")}
      >
        About
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) => (isActive ? "link-active text-cyan-500 px-8" : "link px-8")}
      >
        Project
      </NavLink>
      <NavLink
        to="/education"
        className={({ isActive }) => (isActive ? "link-active text-cyan-500 px-8" : "link px-8")}
      >
        Education
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "link-active text-cyan-500 px-8" : "link px-8")}
      >
        Contact
      </NavLink>
      <NavLink
        to="/resume"
        className={({ isActive }) => (isActive ? "link-active text-cyan-500 px-8" : "link px-8")}
      >
        Resume
      </NavLink>
      </nav>

      {/* Mobile Nav */}
      <nav
        className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0 "}
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

        
          <li className="py-2">
          <Link to ="/resume" onClick={() => setToggle(false)}>Resume</Link>
        </li>
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