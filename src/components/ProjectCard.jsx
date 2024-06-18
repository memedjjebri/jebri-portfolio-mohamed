

const ProjectCard = ({ project }) => {
  return (
    <div className="text-white mb-8 max-w-md mx-auto relative overflow-hidden z-10 bg-gray-800 p-8 rounded-lg shadow-md mt-8 before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-100 mb-4">{project.description}</p>
        <a href={project.link} className="text-blue-500 hover:text-blue-700">
          Voir le projet
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
