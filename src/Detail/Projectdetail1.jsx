import React, { useState } from 'react';
import Close from '../Icons/Close';
import Githubicon from '../Icons/Githubicon';
import Link from '../Icons/Link';
import '../scss/projectdetail.scss';
import '../scss/projectdetail1.scss';

function Projectdetail1({ onClose }) {
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
          href="https://github.com/subin75/Jeju"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-with-label"
        >
          <div className="icon-wrapper"><Githubicon /></div>
          <span>GitHub</span>
        </a>
        <a
          href="https://jeju-trip-eosin.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-with-label"
        >
          <div className="icon-wrapper"><Link /></div>
          <span>배포 링크</span>
        </a>
      </div>

      <div className="project-title-banner1">
        Jeju - 떠나봅서
        <li className="date">2025.04.14 - 2025.04.29&nbsp;&nbsp;|&nbsp;&nbsp;5인</li>
      </div>

      <h1 className="section-heading">📗 소개</h1>
      <p className="intro-text">
        제주 여행을 계획하고 다양한 장소를 탐색할 수 있는 SPA 웹사이트, "떠나봅서" 입니다.
      </p>

      <section className="section">
        <h2 className="section-heading">📌 요약</h2>
        <ul className="list">
          <li><strong>주제</strong>
          <br/>제주에 대한 정보 제공
          </li>
          <li><strong>목표</strong>
          <br/>비짓제주, 기상청 오픈 API를 활용해 실시간 정보 제공 및 개인화된 여행 서비스 제공
          <br/>다양한 정보 및 관리 기능을 통해 여행자들의 편의성 향상</li>
          <li><strong>개발 환경</strong>
          <br/>REACT, SCSS, MongoDB</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-heading">✨ 주요 기능</h2>
        <div className="feature-group">
          <h3>1. 제주비짓 API 활용</h3>
          <ul className="list">
            <li>제주비짓 오픈 API를 활용하여, 메인컨텐츠, 검색 기능, 방문자통계 컨텐츠를 제공</li>
            <li>trip 페이지 컴포넌트 내 맛집, 관광지, 포토스팟, 소품샵 등 제주 장소정보 제공</li>
          </ul>
        </div>

        <div className="feature-group">
          <h3>2. 기상청 API 활용</h3>
          <ul className="list">
            <li>기상청 API를 활용하여 오늘의 제주날씨 (Home.jsx)</li>
            <li>오늘~10일까지의 제주날씨 (PlannerDetail.jsx) 컨텐츠를 제공</li>
          </ul>
        </div>

        <div className="feature-group">
          <h3>3. 트립</h3>
          <ul className="list">
            <li>장소 좋아요 기능</li>
            <li>클릭한 장소를 기준으로 주변 관광지 추천 기능</li>
          </ul>
        </div>

        <div className="feature-group">
          <h3>4. 떠나톡 (커뮤니티)</h3>
          <ul className="list">
            <li>게시글 작성 조회, 댓글 및 좋아요 기능</li>
            <li>떠나팁 : 관리자들이 제공하는 제주 여행 관련 유용한 정보를 제공</li>
          </ul>
        </div>

        <div className="feature-group">
          <h3>5. 내 여행</h3>
          <ul className="list">
            <li>여행 일정 생성 및 수정</li>
            <li>일정별 장소 추가 및 관리</li>
            <li>여행 기간별 추천 일정 제공</li>
          </ul>
        </div>

        <div className="feature-group">
          <h3>6. 마이페이지</h3>
          <ul className="list">
            <li>여행 체크리스트 확인 및 관리</li>
            <li>내가 작성한 게시글, 댓글 목록 조회</li>
            <li>내가 좋아요한 게시글, 장소 목록 조회</li>
            <li>내 활동 한눈에 확인</li>
            <li>로그인 (sns) : 로그인 후 개인화된 여행 서비스 제공</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2 className="section-heading">🔥 작업기여도</h2>
        <div className="feature-group">
          <h3>1. 기획</h3>
          <ul className="list">
            <li>팀원과 소통하여 무슨 기능을 넣을 것인지 정하기</li>
            <li>맡은 부분 기획</li>
          </ul>
        </div>

        <div className="feature-group">
          <h3>2. 디자인</h3>
          <ul className="list">
            <li>팀원과 소통하여 간격과 글꼴, 폰트크기을 어떻게 둘 것인지 정하기</li>
            <li>맡은 파트 디자인 작업</li>
          </ul>
        </div>

        <div className="feature-group">
          <h3>3. 개발</h3>
          <ul className="list">
            <li>커뮤니티 부분 작업</li>
            <li>커뮤니티의 게시물 작성(수정,삭제 포함)작업</li>
            <li>커뮤니티의 댓글(삭제 포함)작업</li>
            <li>로그인한 사용자와 비교하여 수정, 삭제 기능이 보이게 작업</li>
            <li>커뮤니티의 갤러리작업</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Projectdetail1;