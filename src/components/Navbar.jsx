import { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="mx-auto relative overflow-hidden z-10 bg-gray-800 p-8 rounded-lg shadow-md  before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
      <div className="flex justify-between items-center">
        <img src={logo} alt="Logo" className="w-24 h-24 rounded-md" />

        <div className="mx-7">
          <h4 className="text-4xl text-w text-white uppercase font-bold">
            J<span className="text-indigo-600">EB</span>RI
          </h4>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <ul className="hidden md:flex space-x-4">
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
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <ul className="flex flex-col space-y-4 mt-4">
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
      </div>
    </nav>
  );
};

export default Navbar;
