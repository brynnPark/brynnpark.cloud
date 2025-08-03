// src/projects/HostingPersonalPage/index.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './../project_page.css';

function PersonalPage() {
  const navigate = useNavigate();

  return (
    <div className="layout">
      {/* Go Back Button */}
      <button className="go-back-button" onClick={() => navigate('/')}>
        <i className="fas fa-angle-double-left"></i> Back
      </button>

      {/* Project Title */}
      <div className="project-title-container">
        <h2 className="project-title">Hosting Personal Page in S3</h2>
      </div>

      <blockquote>
        <h3><strong> S3로 정적웹사이트 호스팅 (S3 Static Website Hosting) </strong></h3>
          개인페이지 및 기술 블로그를 AWS S3를 이용해서 호스팅하는 개인 프로젝트
          <br/><br/>
          <p><strong><pink-cl>사용한 기술 및 AWS 서비스 목록</pink-cl></strong> : </p>
          <strong>
          <li>AWS CloudFront</li>
          <li>AWS S3</li>
          <li>AWS Route53</li>
          <li>AWS Certificate Manager</li>
          <li>CI / CD 구축 (Github Actions) </li>
          <li>IaC 사용 (Terraform) </li>
          <li>React framework </li>
          </strong>
          <br/>
          <h3><pink-cl>What I Learned</pink-cl></h3>
          <li><strong>DNS 구성 방법</strong></li>
          <li><strong>Terraform 및 GithubActions 사용법</strong></li>
          <li><strong>CI / CD 작동 방법</strong></li>
          <li><strong>위 AWS 서비스에 대한 사용 방법</strong></li>
        </blockquote>


      <div className="custom-body">
          <h2>프로젝트 진행 과정</h2>
          <p>아래와 같은 과정으로 프로젝트를 진행했으며, 각 과정을 정리했습니다.</p>
          <br/>
          <figure className="link-to-post">
            <Link to="https://bird-bread-db0.notion.site/1-React-145adaa80313806e8d14c682ecb3c221?pvs=4">
              <span className="icon">🗂️</span> 1. 프론트엔드 프로젝트 생성 및 페이지 구축 (React)
            </Link>
          </figure>
          <figure className="link-to-post">
            <Link to="https://bird-bread-db0.notion.site/Terraform-GithubActions-145adaa80313808bbf2cf39d25f549b1?pvs=4">
              <span className="icon">🗂️</span> 2. CI/CD 자동화 구축 (Terraform, GithubActions)
            </Link>
          </figure>
          <figure className="link-to-post">
            <Link to="https://bird-bread-db0.notion.site/3-Https-DNS-CloudFront-Route53-Certificate-Manager-145adaa8031380f6b105ee2f9fe1bcee?pvs=4">
              <span className="icon">🗂️</span> 3. Https 설정 및 DNS 연결 (CloudFront, Route53, ACM)
            </Link>
          </figure>
          <br/>
        </div>
    </div>
  );
}

export default PersonalPage;
