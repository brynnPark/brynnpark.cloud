// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import TechBlogPage from './pages/TechBlogPage';
import TechBlogPost from './pages/TechBlogPost';
import ProjectPage from './pages/ProjectPage';
import ProjectPost from './pages/ProjectPost';
import ITeaMoa from './projects/ITeaMoa'; // Ensure this path is correct
import Post1 from './projects/ITeaMoa/Post1';
import Post2 from './projects/ITeaMoa/Post2';
// Import other projects and posts similarly...
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/tech-blog" element={<TechBlogPage />} />
          <Route path="/tech-blog/:slug" element={<TechBlogPost />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/projects/ITeaMoa" element={<ITeaMoa />} />
          <Route path="/projects/ITeaMoa/post1" element={<Post1 />} /> {/* Route for Post1 */}
          <Route path="/projects/ITeaMoa/post2" element={<Post2 />} /> {/* Route for Post2 */}
          {/* Add routes for more posts if necessary */}
          <Route path="/projects/:slug" element={<ProjectPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
