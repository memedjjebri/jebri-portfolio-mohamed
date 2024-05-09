import React from "react";

const Navbar = () => {
  return (
    <nav>
      <img
        src="https://www.stickees.com/files/avatars/admin-avatars/1452-robot-male-sticker.png"
        alt=""
      />
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
