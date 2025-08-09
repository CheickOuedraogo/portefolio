import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projects.json";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const updatedProjects = await Promise.all(
          projectsData.map(async (project) => {
            const response = await fetch(
              `/src/projects/${project.markdownFile}`
            );
            if (!response.ok) {
              throw new Error(
                `Failed to load ${project.markdownFile}: ${response.statusText}`
              );
            }
            const markdownContent = await response.text();
            if (
              markdownContent.includes('<script type="module"') ||
              markdownContent.includes("</html>")
            ) {
              console.warn(
                `Contenu inattendu dans ${project.markdownFile}. Utilisation du texte brut.`
              );
              return {
                ...project,
                markdownContent: `# ${project.title}\nErreur de chargement du contenu.`,
              };
            }
            return { ...project, markdownContent };
          })
        );
        setProjects(updatedProjects);
      } catch (error) {
        console.error("Error loading projects:", error);
      }
    };
    loadProjects();
  }, []);

  return (
    <section className="max-w-4xl mx-auto my-8 p-6 text-gray-800">
      <h2 className="text-3xl font-semibold mb-4 text-teal-800">Mes Projets</h2>
      {projects.length > 0 ? (
        projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))
      ) : (
        <p>
          Aucun projet chargé. Vérifiez les fichiers Markdown ou la console.
        </p>
      )}
    </section>
  );
};

export default Projects;
