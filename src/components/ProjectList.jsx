import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "Frise chronologique : Histoire de l'humanité",
    description:
      "Ce projet consistait à créer une frise chronologique interactive retraçant les événements clés de l'histoire de l'humanité. Vous avez utilisé des technologies web telles que HTML, CSS et JavaScript pour concevoir et développer cette frise. Elle permettait aux utilisateurs d'explorer différentes périodes de l'histoire en cliquant sur des points spécifiques pour afficher des informations détaillées.",
    image: "https://o.quizlet.com/IsbVWm9YIvV5osWWJYN56A.jpg",

    link: "https://moonlow31.github.io/Projet-Chrono/",
  },
  {
    id: 2,
    title: "Globe Guide",
    description:
      "Globe Guide est une application de voyage que nous avons développée pour aider les utilisateurs à découvrir de nouvelles destinations et à planifier leurs voyages. Cette application utilisait des technologies web avancées telles que React et des API de meteo,change devise et jours feriées pour offrir une interface conviviale où les utilisateurs pouvaient rechercher des destinations, explorer des attractions locales, et créer des itinéraires personnalisés pour leurs voyages.",
    image:
      "https://cdn.pixabay.com/photo/2018/07/16/16/08/island-3542290_640.jpg",
    link: "https://globe-guide.netlify.app/",
  },
  {
    id: 3,
    title: "Portfolio.1",
    description:
      "Un projet où j'ai présenté mon parcours, mes compétences, ainsi que les projets sur lesquels j'ai travaillé. Je l'ai développé en utilisant des technologies modernes telles que React et React Router pour créer une expérience utilisateur fluide et interactive. Le portfolio est conçu pour mettre en valeur mes compétences en développement web tout en fournissant un aperçu de ma personnalité et de mon style professionnel.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGVa9ob0DIgAJO7h1SnnU6o1EXXXTPueDt2_Nm1N55RC9GGtC54Ppjl_DQ-aQ-vvV9Q5U&usqp=CAU",
    link: "https://new-portfolio-jebri-mohamed.netlify.app/",
  },
];

const ProjectList = () => {
  return (
    <div>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
