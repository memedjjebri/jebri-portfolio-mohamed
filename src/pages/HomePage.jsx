
import moi from "../assets/moi.png.webp";
import linkedin from "..//assets/linkedin.png";
import github from "../assets/github.png";
import email from "../assets/email.png";

const HomePage = () => {
  return (
    
    <div className=" min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="sm:rounded-lg overflow-hidden shadow-xl">
          <div className=" px-4 py-5 sm:px-6">
            <h1 className="text-3xl font-bold text-gray-900">JEBRI Mohamed</h1>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <img
              src={moi}
              alt="Profile Picture"
              className="w-64 h-64 rounded-full mx-auto mb-6"
            />
            <ul className="flex justify-center space-x-6 mb-6">
              <li>
                <a
                  href="https://www.linkedin.com/in/mohamed-jebri-3a11047b/"
                  target="_blank"
                >
                  <img src={linkedin} alt="LinkedIn" className="w-12 h-12" />
                </a>
              </li>
              <li>
                <a href="https://github.com/memdjjebri" target="_blank">
                  <img src={github} alt="Github" className="w-12 h-12" />
                </a>
              </li>
              <li>
                <a href="mailto:memedjjebri@gmail.com" target="_blank">
                  <img src={email} alt="Email" className="w-12 h-12" />
                </a>
              </li>
            </ul>
            <p className="text-lg text-gray-700 mb-6">
              Un développeur web junior en formation, passionné du web et des
              technologies numériques, motivé à acquérir les compétences
              nécessaires pour concevoir, développer et maintenir des sites web
              et des applications. Actuellement en phase d'apprentissage, je me
              familiarise avec les langages de base tels que HTML, CSS et
              Javascript. Mon apprentissage est soutenu par ma capacité à
              apprendre rapidement, mon esprit d'équipe et ma motivation à
              rester à jour avec les dernières tendances.
            </p>
            <h2 className="text-xl font-bold mb-2">Compétences</h2>
            <p className="text-gray-700 mb-6">
              Une maîtrise des langages de programmation web tels que HTML, CSS
              et JavaScript, ainsi que des frameworks et bibliothèques associés
              comme React ou Vue.js. Une compréhension approfondie des concepts
              de développement web. Une capacité à résoudre des problèmes, à
              travailler en équipe et à m'adapter rapidement aux nouvelles
              technologies sont également mes compétences essentielles pour
              réussir dans ce domaine.
            </p>
            <div className="section mb-6">
              <h3 className="text-xl font-bold mb-2">Langues</h3>
              <div className="language-item mb-2">
                <h2>Français</h2>
                <span>Locuteur natif</span>
                <div className="bg-gray-200 h-4 w-40 mt-1 rounded-full">
                  <div className="bg-blue-500 h-full rounded-full"></div>
                </div>
              </div>
              <div className="language-item mb-2">
                <h2>Arabe</h2>
                <span>Locuteur natif</span>
                <div className="bg-gray-200 h-4 w-40 mt-1 rounded-full">
                  <div className="bg-blue-500 h-full rounded-full"></div>
                </div>
              </div>
              <div className="language-item mb-2">
                <h2>Anglais</h2>
                <span>Compétences professionnelles</span>
                <div className="bg-gray-200 h-4 w-40 mt-1 rounded-full">
                  <div className="bg-blue-500 h-full rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="section">
              <h3 className="text-xl font-bold mb-2">Centres d'intérêt</h3>
              <p className="mb-1">Sport</p>
              <p className="mb-1">Cinéma</p>
              <p className="mb-1">Voyages</p>
              <p className="mb-1">Musique</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
