import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <a href={project.link} className="text-blue-500 hover:text-blue-700">
          Voir le projet
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
