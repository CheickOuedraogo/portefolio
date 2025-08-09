import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const ProjectCard = ({ project }) => (
  <div className="p-6 bg-white rounded-lg shadow-lg mb-4 text-gray-800">
    <div className="flex items-center mb-4">
      <h3 className="text-2xl font-semibold">{project.title}</h3>
      <Tippy content={project.statusDescription} placement="top">
        <span className="ml-2 text-xl cursor-pointer">{project.status}</span>
      </Tippy>
    </div>
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        div: ({ node, ...props }) => <div className="prose" {...props} />,
        p: ({ node, ...props }) => <p className="text-gray-700" {...props} />,
        img: ({ node, ...props }) => (
          <img className="max-w-full h-auto" {...props} />
        ),
      }}
    >
      {project.markdownContent}
    </ReactMarkdown>
    {project.link && (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-teal-600 hover:text-teal-800 mt-2 inline-block"
      >
        Voir le projet
      </a>
    )}
  </div>
);

export default ProjectCard;
