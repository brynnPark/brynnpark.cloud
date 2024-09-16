// src/projects/ITeaMoa/index.js

import React from 'react';
import { Link } from 'react-router-dom';

function ITeaMoa() {
  return (
    <div className="project-detail">
      <h1>ITeaMoa: Cloud Native Project</h1>
      <p>Overview of the project...</p>
      <h2>Related Posts</h2>
      <ul>
        <li><Link to="/projects/ITeaMoa/post1">Post 1: Introduction to ITeaMoa</Link></li>
        <li><Link to="/projects/ITeaMoa/post2">Post 2: Building the Cloud Infrastructure</Link></li>
      </ul>
    </div>
  );
}

export default ITeaMoa;
