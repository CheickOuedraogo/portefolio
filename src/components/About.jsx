import React, { useEffect, useRef } from "react";
import info from "../../public/data/info.json";

const About = () => {
  const sections = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="max-w-4xl mx-auto my-8 p-6 text-gray-800">
      {/* Introduction - Mon Début */}
      <div
        ref={(el) => (sections.current[0] = el)}
        className="mb-12 opacity-0 translate-y-10 transition-all duration-1000"
      >
        <h2 className="text-4xl font-bold mb-4 text-teal-800">Mon Début</h2>
        <div className="flex items-center mb-6">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-32 h-32 rounded-full mr-6 object-cover"
          />
          <p className="text-lg">{info.bio}</p>
        </div>
        <p className="text-lg">
          Tout a commencé avec ma passion pour l'informatique, explorant le web
          et la cybersécurité dès mes premiers cours.
        </p>
      </div>

      {/* Parcours - Mes Expériences */}
      <div
        ref={(el) => (sections.current[1] = el)}
        className="mb-12 opacity-0 translate-y-10 transition-all duration-1000"
      >
        <h3 className="text-3xl font-semibold mb-4 text-teal-700">
          Mon Parcours
        </h3>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>
            Étudiant en informatique, maîtrisant HTML, CSS, JavaScript et plus.
          </li>
          <li>
            Exploration des cryptomonnaies et projets personnels en backend.
          </li>
          <li>Passe-temps : Codage et découverte de nouvelles technologies.</li>
        </ul>
      </div>

      {/* Vision - Mes Objectifs */}
      <div
        ref={(el) => (sections.current[2] = el)}
        className="opacity-0 translate-y-10 transition-all duration-1000"
      >
        <h3 className="text-3xl font-semibold mb-4 text-teal-700">
          Mes Objectifs
        </h3>
        <p className="text-lg mb-4">
          Je vise à créer des solutions innovantes, comme des sites web et des
          applications, pour aider mes clients à réussir.
        </p>
        <div className="bg-teal-50 p-6 rounded-lg">
          <h4 className="text-xl font-medium mb-2 text-teal-800">
            Me Contacter
          </h4>
          <p className="text-lg mb-2">Rejoins-moi pour collaborer :</p>
          <ul className="list-disc list-inside text-lg space-y-1">
            <li>
              Email :{" "}
              <a
                href="mailto:cheick@example.com"
                className="text-teal-600 hover:text-teal-800"
              >
                cheick@example.com
              </a>
            </li>
            <li>
              GitHub :{" "}
              <a
                href={info.github}
                className="text-teal-600 hover:text-teal-800"
              >
                Mon profil
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
