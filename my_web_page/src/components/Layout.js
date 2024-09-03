import React from 'react';
import Profile from './Profile';
import TechnicalResearch from './TechnicalResearch';
import Projects from './Projects';
import WorkExperience from './WorkExperience';
import Education from './Education';

function Layout() {
  return (
    <div className="layout-container">
      {/* Top section: Profile and Technical Research side by side */}
      <div className="top-section">
        <div className="layout-left">
          <Profile />
        </div>
        <div className="layout-right">
          <TechnicalResearch />
        </div>
      </div>

      {/* Bottom section: Projects, Work Experience, and Education stacked */}
      <div className="bottom-section">
        <Projects />
        <WorkExperience />
        <Education />
      </div>
    </div>
  );
}

export default Layout;
