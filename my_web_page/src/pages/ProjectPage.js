// src/pages/ProjectPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import Project1 from '../projects/ITeaMoa/Post1';
import Project2 from '../projects/ITeaMoa/Post2'; // Import more project posts as needed

const projects = [Project1, Project2]; // Combine all imported projects into an array

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
