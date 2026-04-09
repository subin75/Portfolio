import React, { useState ,useRef,useEffect } from 'react';
import Email from './Icons/Email';
import GithubIcon from './Icons/Githubicon';
import Arrow from './Icons/Arrow';
import Down from './Icons/Down';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ProjectDetail from './Detail/Projectdetail';
import ProjectDetail1 from './Detail/Projectdetail1';
import ProjectDetail2 from './Detail/Projectdetail2';
import ProjectDetail3 from './Detail/Projectdetail3';
import ProjectDetail4 from './Detail/Projectdetail4';
import ProjectDetail5 from './Detail/Projectdetail5';
import ProjectDetail6 from './Detail/Projectdetail6';
import './scss/main.scss';

function Main() {
  const [pageIndex, setPageIndex] = useState(0); // 0: 교육, 1: 자격증
  const [selectedTab, setSelectedTab] = useState('FrontEnd');
  const [showDetail, setShowDetail] = useState(null);
  const [activeTab, setActiveTab] = useState('All');
  const contentRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('wannak_d1210@naver.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('이메일 복사 실패:', err);
    }
    };
    
    useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.9) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.9 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const education = [
    {
      name: '그린컴퓨터아카데미',
      period: '2025.12 - 2025.06',
      highlight: true,
    },
    {
      name: '경동대학교(4년제) - 컴퓨터공학과',
      period: '2020.03 - 2024.02',
      highlight: false,
    },
  ];

  const certifications = [
    {
      name: '-',
      issued: '-',
    },
    {
      name: '-',
      issued: '-',
    },
  ];

  const projects = [
    {
      id: 4,
      title: 'StudyLog',
      description: '공부시간을 측정하고 공유하는 앱, "StudyLog" 입니다. ',
      thumbnail: '/Img/sumnail4.svg',
      githubUrl: 'https://github.com/subin75/StudyLog',
      tags: ["KOTLIN, FIREBASE", "팀","앱"]
    },
    {
      id: 5,
      title: '모두의 닥터(MD)',
      description: '병원의 맞춤형 정보를 제공하기 위한 앱, "모두의 닥터(MD)" 입니다. ',
      thumbnail: '/Img/sumnail5.svg',
      githubUrl: 'https://github.com/subin75/University',
      tags: ["KOTLIN, FIREBASE", "팀","앱"]
    },{
      id: 1,
      title: '풀무원',
      description: '풀무원을 리뉴얼한 프로젝트 입니다.',
      thumbnail: '/Img/sumnail1.svg',
      githubUrl: 'https://github.com/subin75/Pulmuone',
      tags: ["HTML, SCSS", "팀","웹","반응형"]
    },
    {
      id: 7,
      title: 'YFLIX',
      description: 'Open Api를 활용한 영화정보 제공 프로젝트 입니다.',
      thumbnail: '/Img/sumnail7.svg',
      githubUrl: 'https://github.com/subin75/test-movie',
      tags: ["REACT, CSS", "개인","웹"]
    }, 
    {
      id: 2,
      title: 'Jeju',
      description: '제주 여행을 계획하고 다양한 장소를 탐색할 수 있는 웹사이트, "떠나봅서" 입니다.',
      thumbnail: '/Img/sumnail2.svg',
      githubUrl: 'https://github.com/subin75/Jeju',
      tags: ["REACT, SCSS", "팀","웹","반응형"]
    },
    {
      id: 3,
      title: 'Marketon',
      description: '쇼핑몰에서 다양한 상품을 탐색하고 구경할 수 있는 웹사이트, "Marketon" 입니다.',
      thumbnail: '/Img/sumnail3.svg',
      githubUrl: 'https://github.com/subin75/Marketon',
      tags: ["REACT,PHP", "개인","웹","반응형"]
    },
    {
      id: 6,
      title: '포트폴리오',
      description: '나를 소개하는 포트폴리오 입니다. ',
      thumbnail: '/Img/sumnail6.svg',
      githubUrl: 'https://github.com/subin75/Portfolio',
      tags: ["REACT", "개인","웹", "반응형"]
    }
  ];

  const handlePrev = () => {
    setPageIndex((prev) => (prev === 0 ? 1 : prev - 1));
  };

  const handleNext = () => {
    setPageIndex((prev) => (prev === 1 ? 0 : prev + 1));
  };

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  
  return (
    <div className={"intro-wrapper"}>
      <div className="main-icons">
          <button
          onClick={handleCopyEmail}
          title="이메일 복사"
          style={{ border: 'none', cursor: 'pointer',  }}
        >
          <Email />
          {copied && (
            <span style={{
              position: 'absolute',
              top: '-1.5em',
              left: '50%',
              transform: 'translateX(-50%)',
              background: '#333',
              color: '#fff',
              padding: '4px 8px',
              borderRadius: '4px',
              fontSize: '0.75em',
              whiteSpace: 'nowrap',
            }}>
              복사되었습니다!
            </span>
          )}
        </button>
          <a href="https://github.com/subin75" target="_blank" rel="noopener noreferrer">
          <GithubIcon />
          </a>
          <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer' }}>
            <Arrow />
          </div>
        </div>
        
        <section className="main-container" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Img/background2.svg)` }}>
        <h1 className={"main-title"}>
          안녕하세요 <span className="highlight">황수빈</span> 입니다
        </h1>
        <p className="main-subtitle">
          사용자의 의견을 중요하게 여기며,<br />
          포기하지 않고 끝까지 최선을 다하는 <b>책임감</b> 있는 지원자입니다.
        </p>

        <div className="main-image">
          <img src="/Img/Mainimg.svg" alt=""/>
        </div>

        <div className="down-icon">
          <a href="#aboutme">
            <Down />
          </a>
        </div>

        <div className="main-update">update. 2026.04.10</div>
      </section>

      <section id="aboutme" className="aboutme-container">
        <h2 className="about-main">About me</h2>
        <div className="aboutme-content">
          <div className="info-group">
            <div className="personal-info">
              <p><strong>이름 -</strong> 황수빈</p>
              <p><strong>생년월일 -</strong> 2001.12.16</p>
              <p><strong>Email -</strong> wannak_d1210@naver.com</p>
            </div>

            <div className="education-card">
              <h3>{pageIndex === 0 ? '교육' : '자격증'}</h3>
              <div className="education-info vertical">
                <button className="arrow-btn" onClick={handlePrev}>
                  <FaChevronLeft />
                </button>

                <div className="education-content">
                  {pageIndex === 0
                    ? education.map((edu, index) => (
                        <div key={index} className="edu-item active">
                          <p className={edu.highlight ? 'highlight' : ''}>{edu.name}</p>
                          <p className="period">{edu.period}</p>
                        </div>
                      ))
                    : certifications.map((cert, index) => (
                        <div key={index} className="edu-item active">
                          <p>{cert.name}</p>
                          <p className="period">{cert.issued}</p>
                        </div>
                      ))}
                    </div>

                <button className="arrow-btn" onClick={handleNext}>
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>

          <div className="profile-image">
            <img src="/Img/picture.jpg" alt=""/>
          </div>
        </div>
      </section>
      
      <section className="interview-container">
        <h2 className="interview-title">Interview</h2>
        <div className="interview-block">
        </div>
        
        <div className="interview-block">
          <div className="qa-box">
            <h3>Q. 일에 있어 가장 중요하게 생각하는 것이 있다면?</h3>
            <p>
              저는 일에 있어 가장 중요한 요소로 <span className="b2">협업과 책임감</span>을 생각합니다.<br />
              업무는 개인의 성과로 완성되는 것이 아니라, 팀원들과의 협력을 통해 더 나은 결과를 만들어가는 과정이라고 생각합니다.<br />
              그래서 저는 업무를 수행할 때 항상 <span className="b2">원활한 소통을 중요</span>하게 여기고, 팀원들의 의견을 존중하고 서로의 입장을 이해하려 노력합니다.<br />
              또한 맡은 역할에 대해서는 끝까지 책임을 다하고자 하며, 다양한 사용자가 편리하게 서비스를 이용할 수 있도록 사용자 관점에서 한 번 더 고민하며 임하고 있습니다.
            </p>
          </div>
        </div>
        
        <div className="interview-block">
          <div className="qa-box">
            <h3>Q. 자기개발을 위해 어떤 것들을 해왔는지?</h3>
            <p>
              개인역량을 향상시키기 위해 6개월간 학원에서 체계적인 교육 과정을 이수하며, 다양한 프로젝트를 통해 기획부터 개발까지 실무 감각을 키웠습니다.<br />
              또한 기획공모전 참여를 통해 기존 프로젝트에서는 경험 해본적 없는 <span className="b2">KPI정의와 SWOT분석, MVP기능정의, 유저테스트 등</span>을 해봄으로써 데이터와 사용자 중심으로 문제를 구조화하고 <br />
              해결하는 역량을 기를 수 있었습니다.
            </p>
          </div>
        </div>

        <div className="interview-block">
          <div className="qa-box">
            <h3>Q. 앞으로 어떤 사람이 되고싶은지?</h3>
            <p>
              저는 우선 팀원과 원활하게 협업하며 직무에 빠르게 적응해, 단기간 내 <span className="b2">조직의 한 구성원으로서 실질적인 도움이 되는 사람</span>이 되고싶습니다.<br/>
              또한 5년-10년후에도 현재에 안주하지 않고 꾸준히 개인역량을 강화해, 다양한 업무를 유연하게 수행하며 <span className="b2">회사의 성장에 기여하는 인재</span>로 성장하는 것이 목표입니다.
            </p>
          </div>
        </div>
      </section>
      
      <section className="skill-container">
        <h2 className="skill-title">Skill</h2>
        <div className="skill-content">
          <nav className="skill-nav">
            <ul>
              {['FrontEnd', 'BackEnd', 'Tools'].map((tab) => (
                <li
                  key={tab}
                  className={selectedTab === tab ? 'active' : ''}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </li>
              ))}
            </ul>
            <div className="nav-line"></div>
          </nav>
          
          <div className="skill-details">
            {selectedTab === 'FrontEnd' && (
              <>
                <div className="skill-item">
                  <img className="skill-icon" src="/Img/Html.svg" alt=""/>
                  <div className="skill-text-group">
                    <h3>HTML5</h3>
                    <p>시멘틱 태그를 활용해 구조화된 웹 페이지를 작성할 수 있으며, 폼 요소, 멀티미디어 태그 등 <br />HTML5의 기본적인 기능을 활용한 경험이 있습니다.</p>
                  </div>
                </div>

                <div className="skill-item">
                  <img className="skill-icon" src="/Img/Javascript.svg" alt=""/>
                  <div className="skill-text-group">
                    <h3>Javascript</h3>
                    <p>여러 프로젝트에서 비동기 처리, 조건문 / 삼항 연산자 / 배열 메서드, 이벤트 처리 등을 해봤습니다.</p>
                  </div>
                </div>

                <div className="skill-item">
                  <img className="skill-icon" src="/Img/React.svg" alt=""/>
                  <div className="skill-text-group">
                    <h3>React</h3>
                    <p>리액트로 여러 프로젝트를 해봤으며, ContextAPI, useState, useEffect를 <br/>활용할 수 있습니다.</p>
                  </div>
                </div>

                <div className="skill-item">
                  <img className="skill-icon" src="/Img/Axios.svg" alt=""/>
                  <div className="skill-text-group">
                    <h3>Axios</h3>
                    <p>프로젝트 만들 때 데이터 조회와 데이터 삭제하기 위해 사용해 보았습니다.</p>
                  </div>
                </div>

                <div className="skill-item">
                  <img className="skill-icon" src="/Img/Css.svg" alt=""/>
                  <div className="skill-text-group">
                    <h3>CSS</h3>
                    <p>순수 CSS만을 이용하여 레이아웃을 할 수 있습니다.</p>
                  </div>
                </div>

                <div className="skill-item">
                  <img className="skill-icon" src="/Img/Scss.svg" alt=""/>
                  <div className="skill-text-group">
                    <h3>SCSS</h3>
                    <p>순수 scss만을 이용하여 레이아웃을 할 수 있습니다.</p>
                  </div>
                </div>
              </>
            )}

            {selectedTab === 'BackEnd' && (
              <>
                <div className="skill-item">
                  <img className="skill-icon" src="/Img/Python.svg" alt=""/>
                  <div className="skill-text-group">
                    <h3>Python</h3>
                    <p>학창시절 Python을 학습하고, 과제를 통해 기본적인 문법과 제어문, 함수 작성 등을 경험했습니다.</p>
                  </div>
                </div>

                <div className="skill-item">
                  <img className="skill-icon" src="/Img/Php.svg" alt=""/>
                  <div className="skill-text-group">
                    <h3>PHP</h3>
                    <p>프로젝트에서 PHP를 활용해 비동기 통신과 조건문/배열 메서드를 이용한 데이터 처리 경험이 있습니다.</p>
                  </div>
                </div>

                <div className="skill-item">
                  <img className="skill-icon" src="/Img/Kotlin.svg" alt=""/>
                  <div className="skill-text-group">
                    <h3>Kotlin</h3>
                    <p>졸업작품 프로젝트에서 Kotlin으로 안드로이드 애플리케이션을 개발해보았습니다.</p>
                  </div>
                </div>

                <div className="skill-item">
                  <img className="skill-icon" src="/Img/Firebase.svg" alt=""/>
                  <div className="skill-text-group">
                    <h3>Firebase</h3>
                    <p>졸업작품 프로젝트에서 Firebase를 사용해보았습니다.</p>
                  </div>
                </div>

                <div className="skill-item">
                  <img className="skill-icon" src="/Img/Mongodb.svg" alt=""/>
                  <div className="skill-text-group">
                    <h3>MongoDB</h3>
                    <p>최근 프로젝트를 만들 때 사용해보았습니다.</p>
                  </div>
                </div>
              </>
            )}

            {selectedTab === 'Tools' && (
              <>
                <div className="skill-item">
                  <img className="skill-icon" src="/Img/Figma.svg" alt=""/>
                  <div className="skill-text-group">
                    <h3>Figma</h3>
                    <p>작업에 들어가기 전, 전체적인 화면 구성과 UI 설계를 위해 Figma를 사용해 디자인 시안을 제작해보았습니다.</p>
                  </div>
                </div>

                <div className="skill-item">
                  <img className="skill-icon" src="/Img/Github.svg" alt=""/>
                  <div className="skill-text-group">
                    <h3>GitHub</h3>
                    <p>외부 저장과 협업을 위해 사용하였습니다.</p>
                  </div>
                </div>

                <div className="skill-item">
                  <img className="skill-icon" src="/Img/Vercel.svg" alt=""/>
                  <div className="skill-text-group">
                    <h3>Vercel</h3>
                    <p>GitHub에 업로드한 프로젝트를 Vercel을 통해 배포한 경험이 있습니다.</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="project-container">
        <h2 className="project-title">Project</h2>
        <div className="project-content">
          <div className="project-tabs">
            <span
            className={`tab ${activeTab === 'All' ? 'active' : ''}`}
            onClick={() => setActiveTab('All')}
            >
            All
            </span>
            
            <span
            className={`tab ${activeTab === '팀' ? 'active' : ''}`}
            onClick={() => setActiveTab('팀')}
            >
            팀
            </span>
            
            <span
            className={`tab ${activeTab === '개인' ? 'active' : ''}`}
            onClick={() => setActiveTab('개인')}
            >
            개인
            </span>
          </div>
          
          <div className="project-list">
            {projects
            .filter((project) => {
              if (activeTab === 'All') return true;
              if (activeTab === '팀') {
                return !['Marketon', 'YFLIX', '포트폴리오'].includes(project.title);
              }
              if (activeTab === '개인') {
                return ['Marketon', 'YFLIX', '포트폴리오'].includes(project.title);
              }
              return true;
            })
            .map(({ id, title, description, thumbnail, githubUrl, tags }) => (
            <div key={id} className="project-card">
              <img src={thumbnail} alt={`${title} thumbnail`} />
              <div className="project-info">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="tag-buttons">
                  {tags && tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="project-hover">
              <p className="view-detail" onClick={() => setShowDetail(id)}>자세히 보기</p>
              <p className="go-github" onClick={() => window.open(githubUrl, '_blank')}>
                Git hub 바로가기
              </p>
            </div>
          </div>
        ))}
    </div>
  </div>
</section>

      {showDetail !== null && (
        <div className="popup-overlay" onClick={() => setShowDetail(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            {showDetail === 1 && <ProjectDetail onClose={() => setShowDetail(null)} />}
            {showDetail === 2 && <ProjectDetail1 onClose={() => setShowDetail(null)} />}
            {showDetail === 3 && <ProjectDetail2 onClose={() => setShowDetail(null)} />}
            {showDetail === 4 && <ProjectDetail3 onClose={() => setShowDetail(null)} />}
            {showDetail === 5 && <ProjectDetail4 onClose={() => setShowDetail(null)} />}
            {showDetail === 6 && <ProjectDetail5 onClose={() => setShowDetail(null)} />}
            {showDetail === 7 && <ProjectDetail6 onClose={() => setShowDetail(null)} />}
          </div>
        </div>
      )}
      
      <section className="thank-you-section" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Img/background2.svg)` }}>
      <div className={`thank-you-content ${visible ? 'visible' : ''}`}
      ref={contentRef}>
        <h2>Thank You</h2>
        <p>지금까지 <strong>“황수빈”</strong> 이었습니다<br />봐주셔서 감사합니다!</p>
        <a href="./이력서_황수빈.pdf" download className="download-button">
        이력서 다운로드
        </a>
      </div>
    </section>
  </div>
  );
}

export default Main;