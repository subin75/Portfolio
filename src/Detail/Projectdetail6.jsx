import React, { useState } from 'react';
import Close from '../Icons/Close';
import Githubicon from '../Icons/Githubicon';
import Link from '../Icons/Link';
import '../scss/projectdetail.scss';
import '../scss/projectdetail6.scss';

function Projectdetail4({ onClose }) {
  const [isVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="project-detail">
      <div className="side-icons">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onClose();
          }}
          className="icon-with-label close-icon"
        >
          <div className="icon-wrapper"><Close /></div>
        </a>
        <a
          href="https://github.com/subin75/test-movie"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-with-label"
        >
          <div className="icon-wrapper"><Githubicon /></div>
          <span>GitHub</span>
        </a>
        <a
          href="https://test-movie-rose.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-with-label"
        >
          <div className="icon-wrapper"><Link /></div>
          <span>배포 링크</span>
        </a>
      </div>

      <div className="project-title-banner6">
        YFLIX - Open Api
        <li className="date">2023.03.10 - 2023.03.17 &nbsp;&nbsp;|&nbsp;&nbsp;1인</li>
      </div>

      <h1 className="section-heading">📗 소개</h1>
      <p className="intro-text">
        Open Api를 활용한 영화정보 제공 프로젝트 입니다.
      </p>

      <section className="section">
        <h2 className="section-heading">📌 요약</h2>
        <ul className="list">
          <li><strong>주제</strong>
          <br/>Open Api를 활용해 영화정보 제공
          </li>
          <li><strong>목표</strong>
          <br/>영화, TV 관련 정보 제공 등으로 사용자에게 편의성 제공
          </li>
          <li><strong>개발 환경</strong>
          <br/>REACT, CSS</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-heading">✨ 주요 기능</h2>
        <div className="feature-group">
          <h3>1. Movie</h3>
          <ul className="list">
            <li>Movie 상세정보 제공</li>
            <li>Similar Movies 제공</li>
            <li>검색기능</li>
          </ul>
        </div>

        <div className="feature-group">
          <h3>2. TV</h3>
          <ul className="list">
            <li>TV 상세정보 제공</li>
            <li>Similar TV Shows 제공</li>
            <li>검색기능</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Projectdetail4;