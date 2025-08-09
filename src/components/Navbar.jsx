import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-teal-700 text-white p-4 shadow-md">
    <ul className="flex space-x-6 justify-center">
      <li>
        <Link to="/" className="hover:text-teal-200 transition-colors">
          Accueil
        </Link>
      </li>
      <li>
        <Link to="/projects" className="hover:text-teal-200 transition-colors">
          Projets
        </Link>
      </li>
      <li>
        <Link to="/ideas" className="hover:text-teal-200 transition-colors">
          Idées
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
