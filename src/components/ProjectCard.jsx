import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <img src={project.image} alt={project.title} />
      <a href={project.link}>Voir le projet</a>
    </div>
  );
};

export default ProjectCard;
