// src/projects/HostingPersonalPage/index.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './../project_page.css';


function CarrotDB() {
  const navigate = useNavigate();

  return (
    <div className="layout">
      {/* Go Back Button */}
      <button className="go-back-button" onClick={() => navigate('/')}>
        <i className="fas fa-angle-double-left"></i> Back
      </button>

      {/* Project Title */}
      <div className="project-title-container">
        <h2 className="project-title">당근마켓 Carrot DB 구축</h2>
      </div>

      <blockquote>
        <h3><strong> 데이터베이스 전공 프로젝트: 당근마켓 DB 구축 </strong></h3>
          당근마켓의 일부 기능으로 제한해 데이터베이스를 구축하는 팀 프로젝트
          <br/><br/>
          <p><strong><pink-cl>사용한 기술 목록</pink-cl></strong> : </p>
          <strong>
          <li>MySql</li>
          <li>DB 설계</li>
          <li>ERD </li>
          <li>Data Modeling (데이터 모델링)</li>
          </strong>
          <br/>

          <h3><pink-cl>What I Learned</pink-cl></h3>
          <li><strong>관계형 DB에 대한 개념 및 설계 방법</strong></li>
          <li><strong>MySql을 통한 쿼리 구현 </strong></li>
          <li><strong>데이터베이스 설계 문서 작성법 (요구사항분석, 논리 테이블 작성, ERD 설계 등) </strong></li>
        </blockquote>


      <div className="custom-body">
          <h2>프로젝트 진행 과정</h2>
          <p>한 학기(약 3개월)동안 4명의 팀원들과 진행한 프로젝트로, 최종 발표까지 진행했습니다. </p>
          <p>작성한 최종 설계 보고서에 프로젝트의 전 과정과 코드, R&R이 명시되어 있습니다. (하단에 첨부) </p>

          <figure className="link-to-post">
            <Link to={process.env.REACT_APP_PROJECT_URL}>
              <span className="icon"></span>📄 당근마켓 DB 구축 최종 보고서 (약 100페이지)
            </Link>
          </figure>
          <br/>
        </div>
    </div>
  );
}

export default CarrotDB;
