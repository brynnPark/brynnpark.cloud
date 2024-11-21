// src/App.js

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import MainPage from './pages/MainPage';
// import ProjectPage from './pages/ProjectPage';
// import ProjectPost from './pages/ProjectPost';
import ITeaMoa from './projects/ITeaMoa/index.js';
import PersonalPage from './projects/HostingPersonalPage/index.js';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null; // This component doesn't render anything
}

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Ensures the scroll resets on route changes */}
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* <Route path="/tech-blog" element={<TechBlogPage />} />
          <Route path="/tech-blog/:slug" element={<TechBlogPost />} /> */}
          {/* <Route path="/projects" element={<ProjectPage />} /> */}
          <Route path="/projects/iteamoa" element={<ITeaMoa />} />
          <Route path="/projects/hosting-personal-page" element={<PersonalPage />} />
          {/* Add routes for more posts if necessary */}
          {/* <Route path="/projects/:slug" element={<ProjectPost />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
