import React from 'react';

function WorkExperience() {
  return (
    <div className="work-experience">
      <div className='work-experience-item'>
        <h1>Work Experience</h1>
        <h3><strong>CrossAngle | </strong>Blockchain Partner Researcher</h3>
        <div className='work-experience-details'>
          <p>Conducted in-depth research about blockchain technologies and ecosystems by analyzing two blockchain projects for 6 months.</p>  
          <p>✔︎ Developed expertise in conducting technical and business research</p>
          <figure className='link-to-article'>
            <a href='https://xangle.io/research/detail/1630'>Article 1: Aptos 3Q23 Review</a>
          </figure>
          <figure className='link-to-article'>
            <a href='https://xangle.io/research/detail/1827'>Article 2: BASE가 그리는 미래: 금융의 탈중앙화</a>
          </figure>
          
          {/* Skill Blocks */}
          <div className="skills">
            <div className="skill-block">Blockchain Analysis</div>
            <div className="skill-block">Business Research</div>
          </div>
        </div>
      </div>

      <div className='work-experience-item'>
        <h3><strong>FourPillars</strong> <strong>|</strong> Blockchain Partner Researcher</h3>
        <div className='work-experience-details'>
          <p>Conducted internal blockchain research for 3 months, contributing to the company's understanding of blockchain technologies and their applications.</p>
          <p>✔︎ Gained proficiency in both technical and market research, improving analytical thinking and strategic problem-solving abilities.</p>

          {/* Skill Blocks */}
          <div className="skills">
            <div className="skill-block">Blockchain Technology</div>
            <div className="skill-block">Ecosystem Analysis</div>
            <div className="skill-block">Technical Writing</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
