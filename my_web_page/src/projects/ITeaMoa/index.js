// src/projects/ITeaMoa/index.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './ITeaMoa.css';

function ITeaMoa() {
  const navigate = useNavigate();

  return (
    <div className="iteamoa">
      {/* Go Back Button */}
      <button className="go-back-button" onClick={() => navigate(-1)}>
        <i className="fas fa-angle-double-left"></i> Back
      </button>

      {/* Project Title */}
      <div className="project-title-container">
        <h2 className="project-title">: ITeaMoa : Cloud Native Project</h2>
      </div>

      <blockquote>
        <strong>ITeaMoa란 ?</strong>
        <ul>
          <li>IT 관련 프로젝트 혹은 스터디 인원을 모집하는 웹 플랫폼</li>
          <li>Serverless & Cloud Native Project로 아래 항목을 포함함 :
            <ul>
              <li>Micro Service Architecture</li>
              <li>Container</li>
              <li>CI/CD</li>
            </ul>
          </li>
        </ul>
      </blockquote>

      <h2>프로젝트 진행 과정</h2>
      <p>본격적으로 프로젝트 개발에 들어가기에 앞서...</p>
      
      <h3>프로젝트 설계 단계</h3>
      <figure className="link-to-post">
        <Link to="/projects/ITeaMoa/Post1">
          <span className="icon">🗂️</span> 1. 프로젝트 설계 - 요구사항 분석: SRS, 요구사항 명세서
        </Link>
      </figure>
      {/* Add other posts here */}
    </div>
  );
}

export default ITeaMoa;
