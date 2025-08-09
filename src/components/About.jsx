import React from "react";
import info from "../data/info.json";

const About = () => (
  <section className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-lg text-gray-800">
    <h2 className="text-3xl font-semibold mb-4 text-teal-800">
      À propos de moi
    </h2>
    <p className="text-lg mb-4">{info.bio}</p>
    <h3 className="text-2xl font-medium mb-2 text-teal-700">Technologies</h3>
    <ul className="grid grid-cols-2 gap-2">
      {info.technologies.map((tech, index) => (
        <li key={index} className="text-lg">
          🛠️ {tech}
        </li>
      ))}
    </ul>
    <a
      href={info.github}
      className="text-teal-600 hover:text-teal-800 mt-4 inline-block"
    >
      Mon GitHub
    </a>
  </section>
);

export default About;
