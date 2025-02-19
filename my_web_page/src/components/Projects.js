// src/components/Projects.js

import React from 'react';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <figure className="link-to-page">
        <Link to="/projects/iteamoa">
          <span className="icon">💼</span> : ITeaMoa : Cloud Native Project
        </Link>
      </figure>
      <figure className="link-to-page">
        <Link to="/projects/hosting-personal-page">
          <span className="icon">🌐</span> Hosting Personal Page in S3
        </Link>
      </figure>
      <figure className="link-to-page">
        <Link to="/projects/CarrotDB">
          <span className="icon">🥕</span> Carrot : DB Project
        </Link>
      </figure>
      <figure className="link-to-page">
        <Link to="/projects/Linkrypto">
          <span className="icon">⛓️</span> Linkrypto : Blockchain Project
        </Link>
      </figure>
    </div>
  );
}

export default Projects;
