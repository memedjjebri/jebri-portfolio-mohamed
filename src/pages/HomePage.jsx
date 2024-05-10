import React from "react";
import moi from "../assets/moi.png.webp";
import linkedin from "..//assets/linkedin.png";
import github from "../assets/github.png";
import email from "../assets/email.png";



const HomePage = () => {
  return (
    <div>
      
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
      <h1>JEBRI Mohamed </h1>
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
    </div>
  );
};

export default HomePage;
