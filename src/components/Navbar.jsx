import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    
    <nav>
      <img src={logo} alt="Logo" />
      
      <ul>
        <li>
          <a href="/">Accueil</a>
        </li>
        <li>
          <a href="/projects">Projets</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
