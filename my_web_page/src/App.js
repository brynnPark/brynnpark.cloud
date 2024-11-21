// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import MainPage from './pages/MainPage';
// import TechBlogPage from './pages/TechBlogPage';
// import TechBlogPost from './pages/TechBlogPost';
import ProjectPage from './pages/ProjectPage';
import ProjectPost from './pages/ProjectPost';
import ITeaMoa from './projects/ITeaMoa';
import PersonalPage from './projects/HostingPersonalPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* <Route path="/tech-blog" element={<TechBlogPage />} />
          <Route path="/tech-blog/:slug" element={<TechBlogPost />} /> */}
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/projects/ITeaMoa" element={<ITeaMoa />} />
          <Route path="/projects/HostingPersonalPage" element={<PersonalPage />} />
          {/* Add routes for more posts if necessary */}
          <Route path="/projects/:slug" element={<ProjectPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
