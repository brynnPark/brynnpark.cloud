// src/pages/TechBlogPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import Post1 from '../tech_posts/Post1';
import Post2 from '../tech_posts/Post2';
// Import more posts as needed...

const posts = [Post1, Post2]; // Combine all imported posts into an array

function TechBlogPage() {
  return (
    <div className="blog-page">
      <h1>Bohyeon Park's Tech Blog</h1>
      <div className="posts-container">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <h2>
              <Link to={`/tech-blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="post-date"><small>{post.date}</small></p>
            <div className="post-tags">
              {post.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
            <p className="post-excerpt">{post.content.substring(0, 100)}...</p> {/* Show a summary or excerpt */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechBlogPage;
