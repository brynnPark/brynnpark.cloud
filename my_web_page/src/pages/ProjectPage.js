// src/pages/ProjectPage.js

import React from 'react';
import { Link } from 'react-router-dom';


const projects = []; // Combine all imported projects into an array

function ProjectPage() {
  return (
    <div className="projects-page">
      <h1>Projects</h1>
      {projects.map((project) => (
        <div key={project.id} className="project">
          <h2>
            <Link to={`/projects/${project.slug}`}>{project.title}</Link> {/* Link to individual project post */}
          </h2>
          <p><small>{project.date}</small></p>
          <p>{project.description}</p>
          <Link to={`/projects/${project.slug}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
}

export default ProjectPage;
