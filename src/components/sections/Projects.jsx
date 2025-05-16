import { RevealOnScroll } from "../RevealOnScroll";
import { ProjectsCard } from "../ProjectsCard";
import ProjectData from "../Projects.json";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ProjectData.map((project) => (
            <ProjectsCard
              key={project.id}
              title={project.title}
              link={project.link}
              image={project.image}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
