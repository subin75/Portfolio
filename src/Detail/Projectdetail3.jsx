import React, { useState } from 'react';
import Close from '../Icons/Close';
import Githubicon from '../Icons/Githubicon';
import '../scss/projectdetail.scss';
import '../scss/projectdetail3.scss';

function Projectdetail3({ onClose }) {
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
          href="https://github.com/subin75/StudyLog"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-with-label"
        >
          <div className="icon-wrapper"><Githubicon /></div>
          <span>GitHub</span>
        </a>
      </div>

      <div className="project-title-banner3">
        StudyLog - 공부앱
        <li className="date">2023.09 - 2023.12 &nbsp;&nbsp;|&nbsp;&nbsp;2인</li>
      </div>

      <h1 className="section-heading">📗 소개</h1>
      <p className="intro-text">
        공부시간을 측정하고 공유하는 앱, "StudyLog" 입니다.
      </p>

      <section className="section">
        <h2 className="section-heading">📌 요약</h2>
        <ul className="list">
          <li><strong>주제</strong>
          <br/>공부시간을 측정하고 공유
          </li>
          <li><strong>목표</strong>
          <br/>스톱워치 와 To-do List 기능을 통해 사용자들의 편의성 향상</li>
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
            <li>구글 간편로그인</li>
          </ul>
        </div>

        <div className="feature-group">
          <h3>2. To-do List</h3>
          <ul className="list">
            <li>사용자가 직접 과목명, 내용을 추가하여 공부계획 수립</li>
            <li>수정, 삭제</li>
          </ul>
        </div>

        <div className="feature-group">
          <h3>3. 스톱워치</h3>
          <ul className="list">
            <li>과목을 추가하여 과목별로 공부 시간 측정</li>
            <li>통계(스톱워치로 측정했던 시간을 토대로 일,월간 총 공부 시간과 평균공부 시간 확인)</li>
          </ul>
        </div>

        <div className="feature-group">
          <h3>4. 게시물</h3>
          <ul className="list">
            <li>업로드 (이미지 포함)</li>
            <li>좋아요</li>
            <li>댓글등록</li>
          </ul>
        </div>

        <div className="feature-group">
          <h3>5. 마이페이지</h3>
          <ul className="list">
            <li>사용자가 업로드한 게시물 확인</li>
            <li>좋아요한 목록 확인</li>
            <li>로그아웃</li>
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
            <li>회원가입 및 구글로그인</li>
            <li>게시물 업로드(수정, 삭제)</li>
            <li>좋아요 기능</li>
            <li>댓글등록</li>
            <li>Todolist 등록(수정, 삭제)</li>
            <li>프로필 사진 수정</li>
            <li>좋아요 누른 게시물 항목을 확일할 수 있음</li>
            <li>사용자가 게시물 업로드한 항목을 확인할 수 있음</li>
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

export default Projectdetail3;