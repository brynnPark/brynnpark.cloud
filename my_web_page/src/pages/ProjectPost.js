// src/pages/ProjectPost.js

import React from 'react';
import { useParams } from 'react-router-dom';
// import Post2 from '../../../../my-tech-blog/my_tech_blog/src/tech_posts/Post2';
import Project1 from '../projects/ITeaMoa/index';

// Import more project posts as needed

const projectPosts = [Project1]; // Combine all imported posts into an array

function ProjectPost() {
  const { slug } = useParams(); // Get the slug from the URL
  const projectPost = projectPosts.find((post) => post.slug === slug); // Find the project post by slug

  // If the post is not found, return a 404 message
  if (!projectPost) {
    return <h1>404 - Project Post Not Found</h1>;
  }

  return (
    <div className="project-post">
      <h1>{projectPost.title}</h1>
      <p><small>{projectPost.date}</small></p>
      <div>{projectPost.content}</div>
    </div>
  );
}

export default ProjectPost;
