
import ProjectCard from "./ProjectCard";



const projects = [
  {
    id: 1,
    title: "Frise chronologique : Histoire de l'humanité",
    description:
      "Ce projet consistait à créer une frise chronologique interactive retraçant les événements clés de l'histoire de l'humanité. Vous avez utilisé des technologies web telles que HTML, CSS et JavaScript pour concevoir et développer cette frise. Elle permettait aux utilisateurs d'explorer différentes périodes de l'histoire en cliquant sur des points spécifiques pour afficher des informations détaillées.",
    image: "src/assets/gopast.webp",
    link: "https://moonlow31.github.io/Projet-Chrono/",
  },
  {
    id: 2,
    title: "Globe Guide",
    description:
      "Globe Guide est une application de voyage que nous avons développée pour aider les utilisateurs à découvrir de nouvelles destinations et à planifier leurs voyages. Cette application utilisait des technologies web avancées telles que React et des API de meteo,change devise et jours feriées pour offrir une interface conviviale où les utilisateurs pouvaient rechercher des destinations, explorer des attractions locales, et créer des itinéraires personnalisés pour leurs voyages.",
    image: "src/assets/globeguide.png",

    link: "https://globe-guide.netlify.app/",
  },
  {
    id: 3,
    title: "Portfolio",
    description:
      "Un projet où j'ai présenté mon parcours, mes compétences, ainsi que les projets sur lesquels j'ai travaillé. Je l'ai développé en utilisant des technologies modernes telles que React et React Router pour créer une expérience utilisateur fluide et interactive. Le portfolio est conçu pour mettre en valeur mes compétences en développement web tout en fournissant un aperçu de ma personnalité et de mon style professionnel.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGVa9ob0DIgAJO7h1SnnU6o1EXXXTPueDt2_Nm1N55RC9GGtC54Ppjl_DQ-aQ-vvV9Q5U&usqp=CAU",
    link: "https://memedjjebriportfolio.netlify.app/",
  },
  {
    id: 4,
    title: "Age Calculator",
    description:
      "Ce projet est un calculateur d'âge interactif qui permet aux utilisateurs de saisir leur date de naissance. Une fois la date entrée, un simple clic sur le bouton Calculer déclenche le calcul de l'âge en années, mois et jours qui est ensuite affiché à l'écran. L'interface est conçue pour être conviviale et fonctionne sur tous les appareils grâce à l'utilisation de HTML, CSS et JavaScript.",
    image: "src/assets/age calculator.png",
    link: "https://age-calculator-jebri-app.netlify.app/",
  },
  {
    id: 5,
    title: "Code Nature",
    description:
      "Un site dédié aux parcs nationaux de France, conçu avec React et Tailwind CSS. Explorez des paysages époustouflants et une flore exceptionnelle grâce à une navigation interactive et des itinéraires de randonnée détaillés. Sensibilisez-vous à la protection de la nature et planifiez votre prochaine aventure en découvrant nos trésors naturels pour les générations futures.",
    image: "src/assets/codenature.png",
    link: "https://code-nature.netlify.app/",
  },
];

const ProjectList = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
