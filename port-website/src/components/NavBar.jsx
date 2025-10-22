import React from "react";
import { Mail } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-white text-black rounded-full flex items-center justify-between px-6 py-3 shadow-lg w-[70%] max-w-4xl z-50">
      {/* Left Icon / Logo */}
      <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer">
        <Mail size={20} />
      </div>

      {/* Navigation Links (centered) */}
      <ul className="flex-1 flex justify-center space-x-8 text-sm font-medium tracking-wide">
        <li className="hover:text-gray-500 cursor-pointer">Home</li>
        <li className="hover:text-gray-500 cursor-pointer">About</li>
        <li className="hover:text-gray-500 cursor-pointer">Projects</li>
        <li className="hover:text-gray-500 cursor-pointer">Timeline</li>
        <li className="hover:text-gray-500 cursor-pointer">Contact</li>
      </ul>

      {/* Email Section */}
      <div className="bg-black text-white rounded-full px-4 py-2 text-sm font-medium cursor-pointer hover:opacity-80 transition-colors">
        ihyaet@gmail.com
      </div>
    </nav>
  );
};

export default NavBar;
f