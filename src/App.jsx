import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Ideas from "./components/Ideas";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => (
  <Router>
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/ideas" element={<Ideas />} />
          <Route path="*" element={<Navigate to="/" />} />{" "}
          {/* Redirection des routes inconnues */}
        </Routes>
      </ErrorBoundary>
    </div>
  </Router>
);

export default App;
