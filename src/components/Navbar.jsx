import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-teal-700 text-white p-4 shadow-md">
      <ul className="flex space-x-6 justify-center">
        <li>
          <Link
            to="/"
            className={`hover:text-teal-200 transition-colors ${
              location.pathname === "/" ? "text-teal-200" : ""
            }`}
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={`hover:text-teal-200 transition-colors ${
              location.pathname === "/projects" ? "text-teal-200" : ""
            }`}
          >
            Projets
          </Link>
        </li>
        <li>
          <Link
            to="/ideas"
            className={`hover:text-teal-200 transition-colors ${
              location.pathname === "/ideas" ? "text-teal-200" : ""
            }`}
          >
            Idées
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
