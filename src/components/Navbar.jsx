import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    
    <nav className="flex justify-between items-center bg-gray-800 p-4">
      <img src={logo} alt="Logo" className="w-24 h-24 rounded-md" />
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="text-white hover:text-gray-400">
            Accueil
          </a>
        </li>
        <li>
          <a href="/projects" className="text-white hover:text-gray-400">
            Projets
          </a>
        </li>
        <li>
          <a href="/contact" className="text-white hover:text-gray-400">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
