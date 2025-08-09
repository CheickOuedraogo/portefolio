import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Ideas = () => {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    const loadIdeas = async () => {
      try {
        const response = await fetch("/src/ideas/ideas.json");
        const data = await response.json();
        const updatedIdeas = await Promise.all(
          data.map(async (idea) => {
            const response = await fetch(`/src/ideas/${idea.markdownFile}`);
            if (!response.ok) {
              throw new Error(`Failed to load ${idea.markdownFile}`);
            }
            const markdownContent = await response.text();
            return { ...idea, markdownContent };
          })
        );
        setIdeas(updatedIdeas);
      } catch (error) {
        console.error("Error loading ideas:", error);
      }
    };
    loadIdeas();
  }, []);

  return (
    <section className="max-w-4xl mx-auto my-8 p-6 text-gray-800">
      <h2 className="text-3xl font-semibold mb-4 text-teal-800">Mes Idées</h2>
      {ideas.length > 0 ? (
        ideas.map((idea) => (
          <div key={idea.id} className="p-6 bg-white rounded-lg shadow-lg mb-4">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                div: ({ node, ...props }) => (
                  <div className="prose" {...props} />
                ),
                p: ({ node, ...props }) => (
                  <p className="text-gray-700" {...props} />
                ),
                img: ({ node, ...props }) => (
                  <img className="max-w-full h-auto" {...props} />
                ),
              }}
            >
              {idea.markdownContent}
            </ReactMarkdown>
          </div>
        ))
      ) : (
        <p>Aucune idée chargée. Vérifiez les fichiers Markdown.</p>
      )}
    </section>
  );
};

export default Ideas;
