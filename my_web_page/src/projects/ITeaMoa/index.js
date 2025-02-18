// src/projects/ITeaMoa/index.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './../project_page.css';

function ITeaMoa() {
  const navigate = useNavigate();

  return (
    <div className="layout">
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
          <h3>프로젝트 보고서</h3>
          <p>프로젝트를 마무리하며 정리하기 위해 작성한 보고서입니다.</p>
          <figure className="link-to-post">
            <Link to="https://bird-bread-db0.notion.site/16badaa8031380c3a46be171fbe9b796?pvs=4">
              <span className="icon">🗂️</span> 프로젝트 마무리 보고서
            </Link>
          </figure>
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
            <Link to="https://bird-bread-db0.notion.site/Infra-System-Architecture-AWS-33c10dbc233448f6ae6ca95a42b506ff?pvs=4">
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
              <span className="icon">🗂️</span> 8. 프로젝트 개발 - 백엔드 API 구현 (Authentication & Authorization)
            </Link>
          </figure>
          <figure className="link-to-post">
            <Link to="https://bird-bread-db0.notion.site/Infra-Deployment-EKS-Fargate-Ingress-ALB-13cadaa8031380a196b7c337f8377604?pvs=4">
              <span className="icon">🗂️</span> 9. 프로젝트 개발 - eks 구축 
            </Link>
          </figure>
          <figure className="link-to-post">
            <Link to="https://bird-bread-db0.notion.site/DevOps-CI-CD-Codepipeline-Codebuild-11fadaa80313806aa7bad364c319e4fa?pvs=4">
              <span className="icon">🗂️</span> 10. 프로젝트 개발 - Backend CI/CD 구축 (Codepipeline, Codebuild)
            </Link>
          </figure>
          <figure className="link-to-post">
            <Link to="https://bird-bread-db0.notion.site/Frontend-CI-CD-19eadaa803138084a310d9632bdc7fca?pvs=4">
              <span className="icon">🗂️</span> 11. 프로젝트 개발 - Frontend CI/CD 구축 (Github Actions, Terraform)
            </Link>
          </figure>
          <br/>
          <h3>참고</h3>
          <p>프로젝트를 진행하며 마주한 문제점과 해결방안을 정리해둔 페이지입니다.</p>
          <figure className="link-to-post">
            <Link to="https://bird-bread-db0.notion.site/Bugfix-Error-Logs-168adaa8031380499c0efdc00b5097ed?pvs=4">
              <span className="icon">🗂️</span> Bugfix Note
            </Link>
          </figure>
        </div>
    </div>
  );
}

export default ITeaMoa;
