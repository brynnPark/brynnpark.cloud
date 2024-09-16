// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './pages/MainPage'; // Import the MainPage component
import BlogPage from './pages/BlogPage'; // Import the BlogPage component
import BlogPost from './pages/BlogPost'; // Import the BlogPost component
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} /> {/* Route for MainPage */}
          <Route path="/blog" element={<BlogPage />} /> {/* Route for BlogPage */}
          <Route path="/blog/:slug" element={<BlogPost />} /> {/* Route for individual blog posts */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
