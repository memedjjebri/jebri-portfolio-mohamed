import moi from "../assets/hero.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import email from "../assets/email.png";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiSass, SiFigma, SiGit, SiMysql } from "react-icons/si";

const HomePage = () => {
  return (
    <div className="min-h-screen p-2 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="mb-12 max-w-xl mx-auto relative overflow-hidden z-10 bg-gray-800 p-8 rounded-lg shadow-md mt-8 before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
            <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold text-center">
              <span className="text-indigo-800 md:text-6xl text-5xl block">
                Hello!
              </span>
              My Name is <span className="text-indigo-200">JEBRI Mohamed</span>
            </h1>
            <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-400 text-center">
              Fullstack Developer
            </h4>
            <div className="text-center">
              <img
                src={moi}
                alt="Profile Picture"
                className="w-64 h-96 rounded-md mx-auto mb-6"
              />
              <button className="m-12 bg-gray-900 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                Contactez-moi
              </button>
              <ul className="flex items-center justify-center mb-8 space-x-4">
                <li className="transition duration-300 ease-in-out transform hover:scale-110">
                  <a
                    href="https://www.linkedin.com/in/mohamed-jebri-3a11047b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block p-2 rounded-full hover:bg-white"
                  >
                    <img src={linkedin} alt="LinkedIn" className="w-12 h-12" />
                  </a>
                </li>
                <li className="transition duration-300 ease-in-out transform hover:scale-110">
                  <a
                    href="https://github.com/memdjjebri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block p-2 rounded-full hover:bg-white"
                  >
                    <img src={github} alt="Github" className="w-12 h-12" />
                  </a>
                </li>
                <li className="transition duration-300 ease-in-out transform hover:scale-110">
                  <a
                    href="mailto:memedjjebri@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block p-2 rounded-full hover:bg-white"
                  >
                    <img src={email} alt="Email" className="w-12 h-12" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-12 max-w-xl mx-auto relative overflow-hidden z-10 bg-gray-800 p-8 rounded-lg shadow-md mt-8 before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
            <p className="text-lg text-gray-300 mb-6">
              Développeur web junior en formation, passionné du web et des
              technologies numériques, motivé à acquérir les compétences
              nécessaires pour concevoir, développer et maintenir des sites web
              et des applications. Actuellement en phase d'apprentissage, je me
              familiarise avec les langages de base tels que HTML, CSS et
              Javascript. Mon apprentissage est soutenu par ma capacité à
              apprendre rapidement, mon esprit d'équipe et ma motivation à
              rester à jour avec les dernières tendances.
            </p>
            <h2 className="text-xl font-bold mb-2 text-white">Compétences</h2>
            <p className="text-gray-300 mb-6">
              Une maîtrise des langages de programmation web tels que HTML, CSS
              et JavaScript, ainsi que des frameworks et bibliothèques associés
              comme React ou Vue.js. Une compréhension approfondie des concepts
              de développement web. Une capacité à résoudre des problèmes, à
              travailler en équipe et à m'adapter rapidement aux nouvelles
              technologies sont également mes compétences essentielles pour
              réussir dans ce domaine.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-6 text-white">
              <FaHtml5
                size={35}
                className="hover:text-red-500 transition duration-300 ease-in-out"
              />
              <FaCss3Alt
                size={35}
                className="hover:text-blue-500 transition duration-300 ease-in-out"
              />
              <SiTailwindcss
                size={35}
                className="hover:text-teal-500 transition duration-300 ease-in-out"
              />
              <SiSass
                size={35}
                className="hover:text-pink-500 transition duration-300 ease-in-out"
              />
              <FaJs
                size={35}
                className="hover:text-yellow-500 transition duration-300 ease-in-out"
              />
              <FaReact
                size={35}
                className="hover:text-blue-300 transition duration-300 ease-in-out"
              />
              <SiFigma
                size={35}
                className="hover:text-purple-500 transition duration-300 ease-in-out"
              />
              <FaGithub
                size={35}
                className="hover:text-gray-500 transition duration-300 ease-in-out"
              />
              <SiGit
                size={35}
                className="hover:text-orange-500 transition duration-300 ease-in-out"
              />
              <SiMysql
                size={35}
                className="hover:text-blue-700 transition duration-300 ease-in-out"
              />
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 text-white">Langues</h3>
              <div className="language-item mb-4 text-gray-300">
                <h2 className="text-lg font-semibold">Français</h2>
                <span className="text-sm"></span>
                <div className="bg-gray-600 h-4 w-full mt-1 rounded-full">
                  <div className="bg-blue-500 h-full rounded-full w-full"></div>
                </div>
              </div>
              <div className="language-item mb-4 text-gray-300">
                <h2 className="text-lg font-semibold">Arabe</h2>
                <span className="text-sm"></span>
                <div className="bg-gray-600 h-4 w-full mt-1 rounded-full">
                  <div className="bg-blue-500 h-full rounded-full w-full"></div>
                </div>
              </div>
              <div className="language-item mb-4 text-gray-300">
                <h2 className="text-lg font-semibold">Anglais</h2>
                <span className="text-sm"></span>
                <div className="bg-gray-600 h-4 w-full mt-1 rounded-full">
                  <div className="bg-blue-500 h-full rounded-full w-3/4"></div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">
                Centres d'intérêt
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full">
                  Sport
                </span>
                <span className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full">
                  Cinéma
                </span>
                <span className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full">
                  Voyages
                </span>
                <span className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full">
                  Musique
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
