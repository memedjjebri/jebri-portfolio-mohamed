import React from "react";
import moi from "../assets/moi.png.webp";
import linkedin from "..//assets/linkedin.png";
import github from "../assets/github.png";
import email from "../assets/email.png";

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">JEBRI Mohamed</h1>
      <img
        src={moi}
        alt="Profile Picture"
        className="w-32 h-32 rounded-full mb-4"
      />
      <ul className="flex items-center space-x-4">
        <li>
          <a
            href="https://www.linkedin.com/in/mohamed-jebri-3a11047b/"
            target="_blank"
          >
            <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
          </a>
        </li>
        <li>
          <a href="https://github.com/memdjjebri" target="_blank">
            <img src={github} alt="Github" className="w-6 h-6" />
          </a>
        </li>
        <li>
          <a href="mailto:memedjjebri@gmail.com" target="_blank">
            <img src={email} alt="Email" className="w-6 h-6" />
          </a>
        </li>
      </ul>
      <h2 className="text-xl font-bold mb-2">
        Junior Developpeur Web et Web mobile
      </h2>
      <p className="text-gray-700 mb-4">
        Un développeur web junior en formation, passionné du web et des
        technologies numériques, motivé à acquérir les compétences nécessaires
        pour concevoir, développer et maintenir des sites web et des
        applications. Actuellement en phase d'apprentissage, je me familiarise
        avec les langages de base tels que HTML, CSS et Javascript. Mon
        apprentissage est soutenu par ma capacité à apprendre rapidement, mon
        esprit d'équipe et ma motivation à rester à jour avec les dernières
        tendances.
      </p>
      <h2 className="text-xl font-bold mb-2">Competences</h2>
      <p className="text-gray-700 mb-4">
        Une maîtrise des langages de programmation web tels que HTML, CSS et
        JavaScript, ainsi que des frameworks et bibliothèques associés comme
        React ou Vue.js. Une compréhension approfondie des concepts de
        développement web. Une capacité à résoudre des problèmes, à travailler
        en équipe et à m'adapter rapidement aux nouvelles technologies sont
        également mes compétences essentielles pour réussir dans ce domaine.
      </p>

      <div className="section">
        <h3 className="text-xl font-bold mb-2">Langues</h3>
        <div className="language-item mb-4">
          <h2>Francais</h2>
          <span>Locuteur natif</span>
          <div className="bg-gray-200 h-4 w-40 mt-1 rounded-full">
            <div className="bg-blue-500 h-full rounded-full"></div>
          </div>
        </div>
        <div className="language-item mb-4">
          <h2>Arabe</h2>
          <span>Locuteur natif</span>
          <div className="bg-gray-200 h-4 w-40 mt-1 rounded-full">
            <div className="bg-blue-500 h-full rounded-full"></div>
          </div>
        </div>
        <div className="language-item mb-4">
          <h2>Anglais</h2>
          <span>Competances professionnelles</span>
          <div className="bg-gray-200 h-4 w-40 mt-1 rounded-full">
            <div className="bg-blue-500 h-full rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="section">
        <h3 className="text-xl font-bold mb-2">Centre d'interet</h3>
        <p>Sport</p>
        <p>Cinéma</p>
        <p>Voyages</p>
        <p>Musique</p>
      </div>
    </div>
  );
};

export default HomePage;
