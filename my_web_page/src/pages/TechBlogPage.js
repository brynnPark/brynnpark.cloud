// src/pages/BlogPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import Post1 from '../tech_posts/Post1';
import Post2 from '../tech_posts/Post2';
//import Post3 from '../posts/Post3'; // Import more posts as needed

const posts = [Post1, Post2]; // Combine all imported posts into an array

function BlogPage() {
  return (
    <div className="blog-page">
      <h1>Bohyeon Park's Blog</h1>
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h2>
            <Link to={`/tech-blog/${post.slug}`}>{post.title}</Link>
          </h2>
          <p><small>{post.date}</small></p>
          <p>{post.content.substring(0, 100)}...</p> {/* Show a summary or excerpt */}
          <Link to={`/tech-blog/${post.slug}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
}

export default BlogPage;
