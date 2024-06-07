import React from "react";
import ProjectList from "../components/ProjectList";

const ProjectsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Projets</h1>
      <ProjectList />
    </div>
  );
};

export default ProjectsPage;
