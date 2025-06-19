import React, { useState } from 'react';
import Close from '../Icons/Close';
import Githubicon from '../Icons/Githubicon';
import Link from '../Icons/Link';
import '../scss/projectdetail.scss';

function Projectdetail({ onClose }) {
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
          href="https://github.com/subin75/Pulmuone"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-with-label"
        >
          <div className="icon-wrapper"><Githubicon /></div>
          <span>GitHub</span>
        </a>
        <a
          href="https://ytk27.github.io/Green-B-Project/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-with-label"
        >
          <div className="icon-wrapper"><Link /></div>
          <span>배포 링크</span>
        </a>
      </div>

      <div className="project-title-banner">
        풀무원 - 웹사이트 리뉴얼 
        <li className="date">2025.01.23 - 2025.02.26&nbsp;&nbsp;|&nbsp;&nbsp;4인</li>
      </div>

      <h1 className="section-heading">📗 소개</h1>
      <p className="intro-text">
        기존의 풀무원 사이트를 리디자인 및 재구성한 리뉴얼 프로젝트입니다.
      </p>

      <section className="section">
        <h2 className="section-heading">📌 요약</h2>
        <ul className="list">
          <li><strong>주제</strong>
          <br/>‘풀무원’ 브랜드 웹사이트 리뉴얼</li>
          <li><strong>목표</strong>
          <br/>통일된 컨텐츠 정리 및 전체 비율 수정 등으로 사용자 만족도 향상</li>
          <li><strong>개발 환경</strong>
          <br/>HTML, SCSS</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-heading">✨ 주요 기능</h2>
        <div className="feature-group">
          <h3>1. 이미지 슬라이드 모션 및 팝업 창</h3>
          <ul className="list">
            <li>jQuery 라이브러리를 활용하여 슬라이드 모든 모달 팝업창 제작</li>
            <li>swiper 라이브러리를 활용하여 원하는 이미지와 텍스트로 변경</li>
          </ul>
        </div>

        <div className="feature-group">
          <h3>2. 반응형 웹 제작</h3>
          <ul className="list">
            <li>모바일(400px), 태블릿(~1024px), PC(1024~1700px) 해상도 지원</li>
          </ul>
        </div>

        <div className="feature-group">
          <h3>3. 버튼 또는 이미지 클릭시 외부사이트로 연결</h3>
          <ul className="list">
            <li>버튼이나 이미지에 링크를 걸어 클릭시 그 해당 사이트로 이동하게 지원</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2 className="section-heading">🔥 작업기여도</h2>
        <div className="feature-group">
          <h3>1. 기획</h3>
          <ul className="list">
            <li>리뉴얼할 사이트 고르기</li>
            <li>퍼소나 정하기</li>
            <li>google 문서 작성</li>
          </ul>
        </div>

        <div className="feature-group">
          <h3>2. 디자인</h3>
          <ul className="list">
            <li>팀원과 소통하여 간격과 글꼴, 폰트크기을 어떻게 둘 것인지 정하기</li>
            <li>맡은 파트 디자인 작업</li>
            <li>어떤부분에서 어떠한 기능을 넣을건지 작성</li>
          </ul>
        </div>

        <div className="feature-group">
          <h3>3. 개발</h3>
          <ul className="list">
            <li>회사소개 작업</li>
            <li>회사소개 안의 CEO 인사말 과 히스토리 및 가치 작업</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Projectdetail;