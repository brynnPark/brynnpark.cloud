import React from 'react';

function Leadership() {
  return (
    <div className="leadership">
      <h1>Leadership & Extra-Curricular Activities</h1>

      <div className="activity">
        <h3>
          <strong>Decipher | Operation Lead & Senior Researcher</strong> 
          <span className="activity-period">(2023.09 ⎯ 2024.12)</span>
        </h3>
        <div className="activity-details">
          <p><span className="sub-highlight-text">Blockchain Academic group based at Seoul National University</span></p>
          <p>Managed the operations of an academic group, improving member participation and satisfaction through proactive leadership and effective communication.</p>
          
          {/* Skill Blocks */}
          <div className="skills">
            <div className="skill-block">Leadership</div>
            <div className="skill-block">Team Collaboration</div>
            <div className="skill-block">Decision-Making</div>
            <div className="skill-block">Blockchain Research</div>
          </div>
        </div>
      </div>

      <div className="activity">
        <h3>
          <strong>4th Protocol Camp | Participant</strong> 
          <span className="activity-period">(2023.04 ⎯ 2024.06)</span>
        </h3>
        <div className="activity-details">
          <p><span className="sub-highlight-text">Blockchain Bootcamp Sponsored by Hashed X Hanwha Dream Plus</span></p>
          <p>Developed the blockchain project "Linkrypto," winning 1st Prize, while conducting technical research, developing backend APIs, and facilitating team communication. Engaged with entrepreneurs and mentors who shared insights and provided valuable feedback during the intensive, daily in-person bootcamp.</p>
          
          {/* Skill Blocks */}
          <div className="skills">
            <div className="skill-block">Blockchain Technology</div>
            <div className="skill-block">Bootcamp Training</div>
            <div className="skill-block">Team Communication</div>
          </div>
        </div>
      </div>

      <div className="activity">
        <h3>
          <strong>WISET Global Mentoring: Megazone Cloud Global | Mentee</strong> 
          <span className="activity-period">(2022.11 ⎯ 2022.12)</span>
        </h3>
        <div className="activity-details">
          <p><span className="sub-highlight-text">Global Mentoring Program held by WISET X Megazone Cloud Global</span></p>
          <p>Gained valuable insights into corporate project execution, team communication, and conflict resolution through a global mentoring program with industry professionals.</p>
          
          {/* Skill Blocks */}
          <div className="skills">
            <div className="skill-block">Cloud Computing</div>
            <div className="skill-block">Mentoring</div>
            <div className="skill-block">Business Knowledge</div>
          </div>
        </div>
      </div>

      <div className="activity">
        <h3>
          <strong>Samsung Junior SW Cup | Mentor</strong> 
          <span className="activity-period">(2022.07 ⎯ 2022.08)</span>
        </h3>
        <div className="activity-details">
          <p><span className="sub-highlight-text">Guided middle school teams through software development projects</span></p>
          <p>Managed the operations of a student team as a university mentor, collaborating with a Samsung engineer to guide the team to win a special prize.</p>
          
          {/* Skill Blocks */}
          <div className="skills">
            <div className="skill-block">Software Development</div>
            <div className="skill-block">Mentorship</div>
            <div className="skill-block">Youth Education</div>
            <div className="skill-block">Educational Guidance</div>
          </div>
        </div>
      </div>

      <div className="activity">
        <h3>
          <strong>Samsung Dream Class | Mentor</strong> 
          <span className="activity-period">(2021.09 ⎯ 2023.03)</span>
        </h3>
        <div className="activity-details">
          <p><span className="sub-highlight-text">Managed learning for middle school students with limited educational resources</span></p>
          <p>Mentored 10 students over 1.5 years,  offering personalized 30-minute sessions and weekly 1-hour group mentoring to enhance learning for students.  </p>
          
          {/* Skill Blocks */}
          <div className="skills">
            <div className="skill-block">Educational Management</div>
            <div className="skill-block">Mentoring</div>
            <div className="skill-block">Community Outreach</div>
            <div className="skill-block">Leadership</div>
            <div className="skill-block">Time Management</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leadership;
