import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import Leadership from './components/Leadership';
import Education from './components/Education';
import Certificate from './components/Certificates';
import Languages from './components/Languages';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="section main-content">
      <Profile />
      </div>
      <div className="section">
      <Projects />
      <WorkExperience />
      </div>
      <Leadership />
      <div className="section">
      <Education />
      </div>
      <div className="section">
      <Certificate />
      </div>
      <div className="section">
      <Languages />
      </div>
    </div>
  );
}

export default App;
