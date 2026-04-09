import React, { useState } from 'react';
import Close from '../Icons/Close';
import Githubicon from '../Icons/Githubicon';
import '../scss/projectdetail.scss';
import '../scss/projectdetail5.scss';

function Projectdetail4({ onClose }) {
  const [isVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="project-detail">
      <div className="side-icons">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onClose();
          }}
          className="icon-with-label close-icon"
        >
          <div className="icon-wrapper"><Close /></div>
        </a>
        <a
          href="https://github.com/subin75/Portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-with-label"
        >
          <div className="icon-wrapper"><Githubicon /></div>
          <span>GitHub</span>
        </a>
      </div>

      <div className="project-title-banner5">
        포트폴리오
        <li className="date">2023.06.11 - 2023.06.18 &nbsp;&nbsp;|&nbsp;&nbsp;1인</li>
      </div>

      <h1 className="section-heading">📗 소개</h1>
      <p className="intro-text">
        저를 소개하는 "포트폴리오" 입니다.
      </p>

      <section className="section">
        <h2 className="section-heading">📌 요약</h2>
        <ul className="list">
          <li><strong>주제</strong>
          <br/>나를 소개하는 "포트폴리오"
          </li>
          <li><strong>목표</strong>
          <br/>나에 대한 정보 제공
          </li>
          <li><strong>개발 환경</strong>
          <br/>REACT, SCSS</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-heading">✨ 주요 기능</h2>
        <div className="feature-group">
          <h3>1. Aboutme</h3>
          <ul className="list">
            <li>Interview</li>
            <li>Skill</li>
          </ul>
        </div>

        <div className="feature-group">
          <h3>2. Project</h3>
          <ul className="list">
            <li>참여한 프로젝트 소개</li>
            <li>자세히 보기</li>
            <li>Github 방문가능</li>
            <li>배포 링크 제공</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Projectdetail4;