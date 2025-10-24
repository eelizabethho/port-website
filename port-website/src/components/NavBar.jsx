import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  
  return (
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 flex justify-center space-x-12 px-4 py-4  
                    font-normal font-pingfang rounded-full max-w-3xl mx-auto text-white text-2xl ">    
    <button>Home</button>
    <button>About</button>
    <button>Projects</button>
    <button>Skills</button>
    <button>Experience</button>
    <button>Contact</button>
</nav>
  );
}
export default NavBar;