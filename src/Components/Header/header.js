import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link , NavLink} from "react-router-dom";
import logo from "../assets/logo.jpg";



const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);
 
 
  return (
    <header className="flex justify-between px-5 py-2 bg-rose-900 text-white fixed w-full z-10">
        <div class="flex justify-between ">
        <img
            src={logo}
            alt="coding illustration"
            className="rounded-full w-12 h-12"
          />
      <a href="/" className="text-2xl font-bold text-rose-100 px-5 ">
        Maryam Salah
      </a>
</div>
      {/* Desktop Nav */}
      <nav className="flex hidden md:block my-4">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link-active text-rose-100 px-8" : "link px-8 text-black")}
      >
        About
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) => (isActive ? "link-active text-rose-100 px-8" : "link px-8 text-black")}
      >
        Project
      </NavLink>
      <NavLink
        to="/education"
        className={({ isActive }) => (isActive ? "link-active text-rose-100 px-8" : "link px-8 text-black")}
      >
        Education
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "link-active text-rose-100 px-8" : "link px-8 text-black")}
      >
        Contact
      </NavLink>
      <NavLink
        to="/resume"
        className={({ isActive }) => (isActive ? "link-active text-rose-100 px-8" : "link px-8 text-black ")}
      >
        Resume
      </NavLink>
      </nav>

      {/* Mobile Nav */}
      <nav
        className={!toggle ? "block md:hidden fixed top-10 py-2 w-1/2 h-1/2 bg-zinc-900 duration-500 left-[-100%] mt-6 " : " block md:hidden fixed top-10 py-2 w-1/2 h-screen bg-zinc-900 duration-500 left-0 mt-6"}
      >
        <ul className="flex flex-col pb-12">
        <li className="px-4 py-5 text-lg hover:text-rose-800">
          <Link to ="/" onClick={() => setToggle(false)}>About</Link>
          </li>
          <li className="px-4 py-5 text-lg hover:text-rose-800">
          <Link to ="/projects" onClick={() => setToggle(false)}>Projects</Link>
          </li>
          <li className="px-4 py-5 text-lg hover:text-rose-800">
            <Link to ="/education" onClick={() => setToggle(false)}>Education</Link>
          </li>
          <li className="px-4 py-5 text-lg hover:text-rose-800">
            <Link to ="/contact" onClick={() => setToggle(false)}>Contact</Link>
          </li>

        
          <li className="px-4 py-5 text-lg hover:text-rose-800">
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