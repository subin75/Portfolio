import React, { useState } from 'react';
import Close from '../Icons/Close';
import Githubicon from '../Icons/Githubicon';
import Link from '../Icons/Link';
import '../scss/projectdetail.scss';
import '../scss/projectdetail2.scss';

function Projectdetail2({ onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="project-detail">
      <div className="side-icons">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onClose();;
          }}
          className="icon-with-label close-icon"
        >
          <div className="icon-wrapper"><Close /></div>
        </a>
        <a
          href="https://github.com/subin75/Marketon"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-with-label"
        >
          <div className="icon-wrapper"><Githubicon /></div>
          <span>GitHub</span>
        </a>
        <a
          href="https://marketon-nu.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-with-label"
        >
          <div className="icon-wrapper"><Link /></div>
          <span>배포 링크</span>
        </a>
      </div>

      <div className="project-title-banner2">
        Marketon - 쇼핑몰
        <li className="date">2025.05.26 - 2025.06.10&nbsp;&nbsp;|&nbsp;&nbsp;1인</li>
      </div>

      <h1 className="section-heading">📗 소개</h1>
      <p className="intro-text">
        쇼핑몰에서 다양한 상품을 탐색하고 구경할 수 있는 웹사이트, "Marketon" 입니다.
      </p>

      <section className="section">
        <h2 className="section-heading">📌 요약</h2>
        <ul className="list">
          <li><strong>주제</strong>
          <br/>다양한 상품 정보 제공
          <br/>카테고리별 분리
          <br/>장바구니 기능 제공
          </li>
          <li><strong>목표</strong>
          <br/>php를 활용해 상품을 등록하고 카테고리별로 구분하여 사용자 서비스 제공
          <br/>다양한 정보 및 장바구니 기능을 통해 사용자들의 편의성 향상</li>
          <li><strong>개발 환경</strong>
          <br/>REACT, SCSS, PHP</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-heading">✨ 주요 기능</h2>
        <div className="feature-group">
          <h3>1. php 활용</h3>
          <ul className="list">
            <li>php를 활용하여, 상품을 등록해서 다양한 상품정보 제공</li>
            <li>list 페이지 컴포넌트 내 상위, 하위, 가방, 신발 등 다양한 카테고리정보 제공</li>
          </ul>
        </div>

        <div className="feature-group">
          <h3>2. 장바구니</h3>
          <ul className="list">
            <li>php를 활용하여 사용자별 장바구니 정보 저장</li>
          </ul>
        </div>

        <div className="feature-group">
          <h3>3. 검색</h3>
          <ul className="list">
            <li>사용자가 원하는 상품을 쉽게 찾을 수 있게 제공</li>
          </ul>
        </div>

        <div className="feature-group">
          <h3>4. 좋아요</h3>
          <ul className="list">
            <li>좋아요 기능</li>
            <li>사용자 별 좋아요 누른 상품 정보 제공</li>
          </ul>
        </div>

        <div className="feature-group">
          <h3>5. 마이페이지</h3>
          <ul className="list">
            <li>주문내역</li>
            <li>최근 본 상품 목록 조회</li>
            <li>자주묻는 질문</li>
            <li>전화걸기</li>
            <li>로그아웃</li>
            <li>로그인 (sns) : 로그인 후 좋아요, 장바구니 기능 제공</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Projectdetail2;