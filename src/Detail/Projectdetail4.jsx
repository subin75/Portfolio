import React, { useState } from 'react';
import Close from '../Icons/Close';
import Githubicon from '../Icons/Githubicon';
import '../scss/projectdetail.scss';
import '../scss/projectdetail4.scss';

function Projectdetail4({ onClose }) {
  const [isVisible, setIsVisible] = useState(true);

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
          href="https://github.com/subin75/University"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-with-label"
        >
          <div className="icon-wrapper"><Githubicon /></div>
          <span>GitHub</span>
        </a>
      </div>

      <div className="project-title-banner4">
        모두의 닥터(MD) - 병원앱
        <li className="date">2023.03 - 2023.6 &nbsp;&nbsp;|&nbsp;&nbsp;2인</li>
      </div>

      <h1 className="section-heading">📗 소개</h1>
      <p className="intro-text">
        병원의 맞춤형 정보를 제공하기 위한 앱, "모두의 닥터(MD)" 입니다.
      </p>

      <section className="section">
        <h2 className="section-heading">📌 요약</h2>
        <ul className="list">
          <li><strong>주제</strong>
          <br/>일정관리
          <br/>카테고리별 분리
          <br/>병원검색 기능 제공
          </li>
          <li><strong>목표</strong>
          <br/>OpenApi를 활용하여 사용자 서비스 제공
          <br/>병원과목별 카테고리로 분리하여 편의성 향상</li>
          <li><strong>개발 환경</strong>
          <br/>AndroidStudio, Kotlin, Firebase</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-heading">✨ 주요 기능</h2>
        <div className="feature-group">
          <h3>1. 로그인</h3>
          <ul className="list">
            <li>이메일 회원가입</li>
          </ul>
        </div>

        <div className="feature-group">
          <h3>2. 병원</h3>
          <ul className="list">
            <li>병원 검색</li>
            <li>진료 과목별 카테고리</li>
          </ul>
        </div>

        <div className="feature-group">
          <h3>3. 일정관리</h3>
          <ul className="list">
            <li>사용자가 직접 병원 일정을 날짜와 같이 입력하여 관리</li>
            <li>수정, 삭제</li>
          </ul>
        </div>

        <div className="feature-group">
          <h3>4. 증상기록</h3>
          <ul className="list">
            <li>사용자가 증상을 기록 할 수 있는 기능</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2 className="section-heading">🔥 작업기여도</h2>
        <div className="feature-group">
          <h3>1. 기획</h3>
          <ul className="list">
            <li>주제 정하기</li>
            <li>계획서 작성</li>
          </ul>
        </div>

        <div className="feature-group">
          <h3>2. 개발</h3>
          <ul className="list">
            <li>회원가입 및 이메일 로그인</li>
            <li>일정관리 등록(수정, 삭제)</li>
            <li>증상기록 등록</li>
            <li>로그아웃</li>
          </ul>
        </div>

        <div className="feature-group">
          <h3>3. 발표자료 작성</h3>
          <ul className="list">
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Projectdetail4;