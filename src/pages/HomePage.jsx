import React from "react";
import moi from "../assets/moi.png.webp";
import linkedin from "..//assets/linkedin.png";
import github from "../assets/github.png";
import email from "../assets/email.png";


const HomePage = () => {
  return (
    <div>
      <h1>JEBRI Mohamed </h1>
      <img src={moi} alt="Profile Picture" class="profile-picture" />
      <ul className="team-icon">
        <li>
          <a
            href="https://www.linkedin.com/in/mohamed-jebri-3a11047b/"
            target="blank"
          >
            <img src={linkedin} alt="LinkedIn" />
          </a>{" "}
        </li>
        <li>
          <a href="https://github.com/memdjjebri" target="blank">
            <img src={github} alt="Github" />
          </a>
        </li>
        <li>
          <a href="mailto:memedjjebri@gmail.com" target="blank">
            <img src={email} alt="Email" />
          </a>{" "}
        </li>
      </ul>
      <h2>Developpeur Web et Web et Web mobile </h2>
      <p>
        Un développeur web junior en formation, passionné du web et des
        technologies numériques, motivé à acquérir les compétences nécessaires
        pour concevoir, développer et maintenir des sites web et des
        applications. Actuellement en phase d'apprentissage, je me familiarise
        avec les langages de base tels que HTML, CSS et Javascript. Mon
        apprentissage est soutenu par ma capacité à apprendre rapidement, mon
        esprit d'équipe et ma motivation à rester à jour avec les dernières
        tendances
      </p>
      <h2>Competences</h2>
      <p>
        Une maîtrise des langages de programmation web tels que HTML, CSS et
        JavaScript, ainsi que des frameworks et bibliothèques associés comme
        React ou Vue.js. Une compréhension approfondie des concepts de
        développement web.Une capacité à résoudre des problèmes, à travailler en
        équipe et à m'adapter rapidement aux nouvelles technologies sont
        également mes compétences essentielles pour réussir dans ce domaine.
      </p>

      <div className="section">
        <h3>Langues</h3>
        <div className="language-item">
          <h2>Francais</h2>
          <span>Locuteur natif</span>
          <div className="full">
            <div className="percent first"></div>
          </div>
        </div>
        <div className="language-item">
          <h2>Arabe</h2>
          <span>Locuteur natif</span>
          <div className="full">
            <div className="percent first"></div>
          </div>
        </div>
        <div className="language-item">
          <h2>Anglais</h2>
          <span>Competances professionnelles</span>
          <div className="full">
            <div className="percent second"></div>
          </div>
        </div>
      </div>
      <div className="section">
        <h2>Centre d'interet</h2>
        <p>Sport</p>
        <p>Cinéma</p>
        <p>Voyages</p>
        <p>Musique</p>
      </div>
    </div>
  );
};

export default HomePage;
