// src/projects/ITeaMoa/index.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './../project_page.css';

function PersonalPage() {
  const navigate = useNavigate();

  return (
    <div className="iteamoa">
      {/* Go Back Button */}
      <button className="go-back-button" onClick={() => navigate('/')}>
        <i className="fas fa-angle-double-left"></i> Back
      </button>

      {/* Project Title */}
      <div className="project-title-container">
        <h2 className="project-title">: ITeaMoa : Cloud Native Project</h2>
      </div>

      <blockquote>
        <h3><strong>ITeaMoa란 ?</strong></h3>
          IT 관련 프로젝트 혹은 스터디 인원을 모집하는 웹 플랫폼
          <br/><br/>
          <p><strong><pink-cl>Serverless & Cloud Native Project</pink-cl></strong>로 다음과 같은 특징을 지님 : </p>
          <strong>
          <li>Micro Service Architecture (MSA)</li>
          <li>Container Deployment (Kubernetes)</li>
          <li>CI / CD 구축 (AWS CodePipeline, Github Actions) </li>
          <li>IaC 사용 (Terraform) </li>
          <li>AWS Cloud Computing</li>
          </strong>
          <br/>
          <h3><pink-cl>My Role</pink-cl></h3>
          <li><strong>프로젝트 설계 (요구사항분석, 기능명세서 작성)</strong></li>
          <li><strong>AWS 인프라 설계 및 구축</strong></li>
          <li><strong>CI / CD 구축 및 팀원 권한 관리</strong></li>
          <li><strong>로그인 기능 구현 (Cognito 이용)</strong></li>
        </blockquote>


      <div className="custom-body">
          <h2>프로젝트 진행 과정</h2>
          <p>본격적으로 프로젝트 개발에 들어가기에 앞서 설계를 먼저 도맡아 했습니다.</p>
          <p>제 역할에 따른 프로젝트의 설계와 개발 과정을 각각 글로 작성해 정리했습니다.</p>
          <br/>
          <h3>프로젝트 설계</h3>
          <figure className="link-to-post">
            <Link to="https://bird-bread-db0.notion.site/e72c0866676f4471b62d83f1927e2bc3?pvs=4">
              <span className="icon">🗂️</span> 1. 프로젝트 설계 - 요구사항 분석: SRS, 요구사항 명세서
            </Link>
          </figure>
          <figure className="link-to-post">
            <Link to="https://bird-bread-db0.notion.site/0b6fddd3de55416a9ad95f20715cc5e2?pvs=4">
              <span className="icon">🗂️</span> 2. 프로젝트 설계 - 기능명세서 작성
            </Link>
          </figure>
          <figure className="link-to-post">
            <Link to="https://bird-bread-db0.notion.site/fbd17be452844eb38103a8168346a5eb?pvs=4">
              <span className="icon">🗂️</span> 3. 프로젝트 설계 - Information Architecture, User Flow 작성
            </Link>
          </figure>
          <figure className="link-to-post">
            <Link to="https://bird-bread-db0.notion.site/cf1ff353fe5741c7ac393c8c886cb027?pvs=4">
              <span className="icon">🗂️</span> 4. 프로젝트 설계 - AWS 아키텍처 설계
            </Link>
          </figure>
          <figure className="link-to-post">
            <Link to="https://bird-bread-db0.notion.site/ERD-39aee6884a51447a9245ad83799fb61b?pvs=4">
              <span className="icon">🗂️</span> 5. 프로젝트 설계 - DynamoDB 설계, 테이블 기술서
            </Link>
          </figure>
          <figure className="link-to-post">
            <Link to="https://bird-bread-db0.notion.site/Cost-Expectation-e73650eabcd04cc0a4dc0e7671634d08?pvs=4">
              <span className="icon">🗂️</span> 6. 프로젝트 설계 - 비용 분석
            </Link>
          </figure>
          <figure className="link-to-post">
            <Link to="https://bird-bread-db0.notion.site/125adaa8031380288412f059bf7d6f14?pvs=4">
              <span className="icon">🗂️</span> 7. 프로젝트 설계 - 인프라 구축을 위한 준비 및 공부
            </Link>
          </figure>
          <br/>
          <h3>프로젝트 개발</h3>
          <figure className="link-to-post">
            <Link to="https://bird-bread-db0.notion.site/Cognito-django-121adaa8031380079f86d7cb5717196b?pvs=4">
              <span className="icon">🗂️</span> 8. 프로젝트 개발 - 로그인 구현 w/ django, Cognito
            </Link>
          </figure>
          <figure className="link-to-post">
            <Link to="https://bird-bread-db0.notion.site/CI-CD-k8s-11fadaa80313806aa7bad364c319e4fa?pvs=4">
              <span className="icon">🗂️</span> 9. 프로젝트 개발 - Backend 컨테이너 배포 및 CI/CD 구축 w/ CodePipeline
            </Link>
          </figure>
          <figure className="link-to-post">
            <Link to="https://bird-bread-db0.notion.site/CI-CD-k8s-11fadaa80313806aa7bad364c319e4fa?pvs=4">
              <span className="icon">🗂️</span> 10. 프로젝트 개발 - eks 구축 (wip)
            </Link>
          </figure>
          <figure className="link-to-post">
            <Link to="https://bird-bread-db0.notion.site/CI-CD-k8s-11fadaa80313806aa7bad364c319e4fa?pvs=4">
              <span className="icon">🗂️</span> 11. 프로젝트 개발 - Frontend CI/CD 구축 w/ Github Actions, Terraform (wip)
            </Link>
          </figure>
        </div>
    </div>
  );
}

export default PersonalPage;
