import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Ideas = () => {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    const loadIdeas = async () => {
      try {
        const response = await fetch("/data/ideas.json");
        if (!response.ok) {
          throw new Error(
            `Failed to fetch ideas.json: ${response.status} ${response.statusText}`
          );
        }
        const text = await response.text();
        console.log("Raw response:", text); // Vérifier dans la console
        let data;
        try {
          data = JSON.parse(text);
        } catch (e) {
          throw new Error("Invalid JSON format in ideas.json");
        }
        const updatedIdeas = await Promise.all(
          data.map(async (idea) => {
            const markdownResponse = await fetch(`/ideas/${idea.markdownFile}`);
            if (!markdownResponse.ok) {
              console.warn(
                `Failed to load ${idea.markdownFile}: ${markdownResponse.statusText}`
              );
              return {
                ...idea,
                markdownContent: `# ${idea.markdownFile}\nErreur de chargement.`,
              };
            }
            const markdownContent = await markdownResponse.text();
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
        <p>Aucune idée chargée. Vérifiez la console pour plus de détails.</p>
      )}
    </section>
  );
};

export default Ideas;
