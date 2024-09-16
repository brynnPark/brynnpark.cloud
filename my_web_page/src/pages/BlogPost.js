// src/pages/BlogPost.js

import React from 'react';
import { useParams } from 'react-router-dom';
import Post1 from '../posts/Post1';
import Post2 from '../posts/Post2';
//import Post3 from '../posts/Post3'; // Import more posts as needed

const posts = [Post1, Post2]; // Combine all imported posts into an array

function BlogPost() {
  const { slug } = useParams(); // Get the slug from the URL
  const post = posts.find((post) => post.slug === slug); // Find the post by slug

  // If the post is not found, return a 404 message
  if (!post) {
    return <h1>404 - Post Not Found</h1>;
  }

  return (
    <div className="blog-post">
      <h1>{post.title}</h1>
      <p><small>{post.date}</small></p>
      <div>{post.content}</div>
    </div>
  );
}

export default BlogPost;
