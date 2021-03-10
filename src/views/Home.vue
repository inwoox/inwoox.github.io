<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      
      <div>
          <nav class="nav fixed-top">
              <ul class="nav-menu">
                  <li @click="goPath('li1')"><a id="li1" class="nav-menu-item to-right-underline" href="#home"><font-awesome-icon :icon="['fas','home']"/> HOME</a></li>
                  <li @click="goPath('li2')"><a id="li2" class="nav-menu-item to-right-underline" href="#about"><font-awesome-icon :icon="['fas','user']"/> ABOUT</a></li>
                  <li @click="goPath('li3')"><a id="li3" class="nav-menu-item to-right-underline" href="#skill"><font-awesome-icon :icon="['fab','connectdevelop']"/> SKILL</a></li>
                  <li @click="goPath('li4')"><a id="li4" class="nav-menu-item to-right-underline" href="#career"><font-awesome-icon :icon="['far','keyboard']"/> CAREER</a></li>
                  <li @click="goPath('li5')"><a id="li5" class="nav-menu-item to-right-underline" href="#project"><font-awesome-icon :icon="['fas','project-diagram']"/> PROJECT</a></li>
                  <li @click="goPath('li6')"><a id="li6" class="nav-menu-item to-right-underline" href="#contact"><font-awesome-icon :icon="['far','address-card']"/> CONTACT</a></li>
              </ul>
          </nav>
      </div>

      <div class="section">
        <section id="home" class="container-fluid">
          <br/><br/><br/><br/><br/>
          <div class="home-text">
            <transition name="fade">
              <h1 v-if="formshow">안녕하세요, 반갑습니다 <font-awesome-icon :icon="['far','smile']"/> </h1>
            </transition>
            <p class="typing-txt"> 개발자 황인우입니다! </p> 
            <p class="typing"></p> 
          </div>
        </section>
        <section id="about" class="container-fluid">
          <div class="row">
            <div class="col">
              <br/><br/>
              <transition name="fade">
                <p class="h5 profile-text" v-if="formshow">
                  <b class="h3 under profile-text-subject">습관을 잘 만들고, 그 습관을 오래 지속할 수 있는 사람</b><br/><br/>
                  군대에서 신병교육대 조교로 활동할 때, <br/>
                  목표를 세우고, 세부 목표를 하나 하나 매일 체크하던 버릇이 생겨서인지, <br/>
                  저는 습관을 잘 만들고 꾸준하게 실천하는 사람이 되었습니다.<br/>
                  비록 늘 좋은 방향으로만 흘러가지는 않지만, <br/>
                  항상 좋은 방향으로 가기위해, 그리고 꾸준하게 노력하고 있습니다.<br/><br/><br/>
                  <b class="h3 under1 profile-text-subject">새로운 기술을 배워, 그것을 적용해보며 희열을 느끼는 사람</b><br/><br/>
                  2020년에만 약 20권이 넘는 개발 관련 서적을 샀으며, 그것을 읽고 실습해보았습니다.<br/>
                  100% 다 소화하지는 못했지만, 많은 기술들을 새로 접하고, 익히고 경험해볼 수 있었던<br/>
                  즐겁고 행복한 시간이었습니다. 새로운 강좌 컨텐츠를 만들어, <br/>
                  구독하시는 분들의 만족스런 피드백을 받는 것도 즐거운 경험입니다.<br/><br/><br/>
                  <b class="h3 under2 profile-text-subject">나이에 상관 없이, 할 수 있는 데까지 개발을 하고 싶은 사람</b><br/><br/>
                  돈보다도 '내 기술'을 가지고 싶고, 전문가, 기술자로 불리고 싶은 사람입니다. <br/>
                  정말 하고 싶은 일이 있는데, 나이가 너무 많아서 고민하고 있는 사람이 있다면,<br/>
                  저는 제가 그랬듯이, 지금 시작해도 늦지 않았다고, 인생은 매우 길다고 말해주고 싶습니다.<br/>
                  그리고 저 역시도 사회에, 주변의 시선에, 그 외의 어떤 여러가지에 얽매이지 않고,<br/>
                  어떤 형태로든 개발자의 삶을, 내가 할 수 있는 데까지 이어가고 싶습니다.
                </p>
              </transition>
            </div>
            <div class="col">
              <br/><br/>
              <img src="/img/profile1.jpg" class="profile-image">
            </div>
          </div>
        </section>
        <section id="skill" class="container">
          <div>
            <br/>
            <h2 class="skill-subject">알고 있는 것과 경험, 그리고 기술 </h2>
          </div>
          <div class="row">
            <div class="alert alert-primary skill-box">
              <p class="h3 text-left skill-title">JAVA</p><br/>
              <p class="text-left skill-text"><font-awesome-icon :icon="['fas','check']"/> Spring Framework, Spring Boot / REST API를 활용한 웹 개발 경험</p>
              <p class="text-left skill-text"><font-awesome-icon :icon="['fas','check']"/> Layered, Hexagonal Architecture 구현 경험</p>
              <p class="text-left skill-text"><font-awesome-icon :icon="['fas','check']"/> 빌드/테스트/배포 자동화 경험 </p>
              <p class="text-left skill-text"><font-awesome-icon :icon="['fas','check']"/> 스프링 클라우드 / 마이크로서비스 아키텍처 기반의 시스템 개발 경험</p>
              <p class="text-left skill-text"><font-awesome-icon :icon="['fas','check']"/> JPA / Hibernate 등 ORM 기반 개발 경험</p>
            </div>
            <div class="alert alert-success skill-box">
              <p class="h3 text-left skill-title">Javascript / HTML / CSS</p><br/>
              <p class="text-left skill-text"><font-awesome-icon :icon="['fas','check']"/> Vue.js를 사용하여 SPA 개발 경험</p>
              <p class="text-left skill-text"><font-awesome-icon :icon="['fas','check']"/> Webpack, Babel 등을 이용한 프로젝트 환경 구성 경험 </p>
              <p class="text-left skill-text"><font-awesome-icon :icon="['fas','check']"/> Bootstrap을 통한 반응형 UI 구현 경험 </p>
              <p class="text-left skill-text"><font-awesome-icon :icon="['fas','check']"/> Jquery / ES6+ 를 활용한 개발 경험</p>
              <p class="text-left skill-text"><font-awesome-icon :icon="['fas','check']"/> 기본적인 HTML / CSS / CSS 전처리기 사용 경험 </p>
            </div>
          </div>
          <div class="row">
            <div class="alert alert-warning skill-box">
              <p class="h3 text-left skill-title">운영 / 배포</p><br/>
              <p class="text-left skill-text"><font-awesome-icon :icon="['fas','check']"/> 기본적인 Linux 커맨드 사용 능력 </p>
              <p class="text-left skill-text"><font-awesome-icon :icon="['fas','check']"/> Docker, 젠킨스를 통한 CI/CD 구축 경험 </p>
              <p class="text-left skill-text"><font-awesome-icon :icon="['fas','check']"/> AWS 등 클라우드 배포 및 운영 경험 </p>
              <p class="text-left skill-text"><font-awesome-icon :icon="['fas','check']"/> Github, Bitbucket 등 git을 통한 버전 관리</p>
              <p class="text-left skill-text"><font-awesome-icon :icon="['fas','check']"/> MySQL 등 RDBMS 사용 경험 (데이터 모델링)</p>
              <p class="text-left skill-text"><font-awesome-icon :icon="['fas','check']"/> Maven / Gradle 사용 경험</p>
            </div>
            <div class="alert alert-danger skill-box">
              <p class="h3 text-left skill-title">정리</p><br/>
              <p class="text-left skill-text"><font-awesome-icon :icon="['fas','check']"/> <strong>언어:</strong> JAVA, Javascript, C#, Python </p>
              <p class="text-left skill-text"><font-awesome-icon :icon="['fas','check']"/> <strong>프레임워크 / 라이브러리:</strong> Spring, Vue.js, Bootstrap, jquery </p>
              <p class="text-left skill-text"><font-awesome-icon :icon="['fas','check']"/> <strong>데이터베이스:</strong> MySQL, PostgreSQL </p>
              <p class="text-left skill-text"><font-awesome-icon :icon="['fas','check']"/> <strong>빌드 도구:</strong> Maven , Gradle </p>
              <p class="text-left skill-text"><font-awesome-icon :icon="['fas','check']"/> <strong>운영 / 인프라:</strong> AWS, jenkins, Docker, Git </p>
            </div>
          </div>
        </section>
        <section id="career">
          <div class="row">
            <div class="col">
              <div class="career-box text-left">
                <h1 class="career-year">2012</h1>
                <p class="career-company">
                  <span class="career-company-name">KITRI </span>
                  <span class="career-company-year">2012.02 - 2012.07</span>
                </p>
                <p class="career-company-text">
                  한국정보기술연구원 정보보안 교육 수료 (침해대응전문가 2기) <br/>
                  정보보안 실무, 네트워크, 운영체제, 모의해킹, 악성코드 분석 등
                </p>
              </div>
              <div class="career-box text-left">
                <h1 class="career-year">2013</h1>
                <p class="career-company">
                  <span class="career-company-name">T 사 </span>
                  <span class="career-company-year">2013.02 - 2014.04</span>
                </p>
                <p class="career-company-text">
                  T사 솔루션 엔지니어<br/>
                  시만텍 데이터 유출 방지 솔루션 (DLP), 안티바이러스, 네트워크 장비 등 기술지원 <br/>
                </p>
              </div>
              <div class="career-box text-left">
                <h1 class="career-year">2014</h1>
                <p class="career-company">
                  <span class="career-company-name">C 사 </span>
                  <span class="career-company-year">2014.07 - 2019.01</span>
                </p>
                <p class="career-company-text">
                  C사 침해사고 대응 및 보안관제 업무<br/>
                  보안 정책 수립, 정책에 기반하여 보안과 가용성 사이에서 적절한 전략 수립<br/>
                  침해 대응 및 탐지, 보안 장비 운영, 서비스 가용성 유지<br/>
                </p>
              </div>
              <div class="career-box text-left">
                <h1 class="career-year">2019</h1>
                <p class="career-company">
                  <span class="career-company-name">C 사 </span>
                  <span class="career-company-year">2019.02 - 2020.09</span>
                </p>
                <p class="career-company-text">
                  C사 프론트엔드 개발자 <br/>
                  VueJS를 통한 웹 프론트 개발 <br/>
                  C#을 통한 관리용 데스크톱 프로그램을 제작 <br/>
                </p>
              </div>
            </div>
            <div class="col career-line">
              <div class="career-box text-left">
                <h1 class="career-year">NOW</h1>
                <p class="career-company">
                  <span class="career-company-name">I 사 </span>
                  <span class="career-company-year">2021.03 -</span>
                </p>
                <p class="career-company-text">
                  웹개발자로 근무 중..
                </p>
              </div>
              <div class="career-box text-left">
                <h1 class="career-year">Activity</h1>
                <p class="career-company">
                  <span class="career-company-name">BLOG 운영 </span>
                  <span class="career-company-year">2017.01 -</span>
                  <span><a href="https://inwoox.tistory.com/" class="career-icon"><font-awesome-icon :icon="['fas','blog']"/></a> </span>
                </p>
                <p class="career-company-text">
                  개발 관련 기술 블로그 운영<br/>
                  C#, Java, Javascript, WEB, 형상 관리, 알고리즘 문제 풀이 등<br/>

                </p>
              </div>
              <div class="career-box text-left">
                <p class="career-company">
                  <span class="career-company-name">Youtube 운영 </span>
                  <span class="career-company-year">2019.03 -</span>
                  <span><a href="https://www.youtube.com/%EC%84%B8%EC%83%81%EC%9D%98%EB%AA%A8%EB%93%A0%EC%BD%94%EB%94%A9" class="career-icon"><font-awesome-icon :icon="['fab','youtube']"/></a> </span>
                </p>
                <p class="career-company-text">
                  개발 관련 기술 YOUTUBE 운영<br/>
                  C#, Java, Javascript, WEB, 형상 관리, 알고리즘 문제 풀이 등<br/>
                </p>
              </div>
              <div class="career-box text-left">
                <p class="career-company">
                  <span class="career-company-name">Class101 온라인 클래스 운영 </span>
                  <span class="career-company-year">2020.11 -</span>
                  <span><a href="https://class101.net/products/5fad37cef17f1f000dbeb172" class="career-icon"><font-awesome-icon :icon="['fas','chalkboard-teacher']"/></a> </span>
                </p>
                <p class="career-company-text">
                  Class101 - 초급 C# 크롤링 강좌 개설 및 운영 중<br/>
                  총 35강 / 2021년 1월 런칭<br/>
                </p>
              </div>
            </div>
            <div class="col career-line">
              <div class="career-box text-left">
                <h1 class="career-year">License</h1>
                <p class="career-license">
                  <span class="career-license-name">윤리적 해커 (CEH) </span>
                  <span class="career-license-year">2012.07</span>
                </p>
                <p class="career-license">
                  <span class="career-license-name">리눅스마스터 2급 </span>
                  <span class="career-license-year">2012.09</span>
                </p>
                <p class="career-license">
                  <span class="career-license-name">사무자동화산업기사 </span>
                  <span class="career-license-year">2012.12</span>
                </p>
                <p class="career-license">
                  <span class="career-license-name">네트워크관리사 2급 </span>
                  <span class="career-license-year">2012.12</span>
                </p>
                <p class="career-license">
                  <span class="career-license-name">정보보안산업기사 </span>
                  <span class="career-license-year">2014.05</span>
                </p>
                <p class="career-license">
                  <span class="career-license-name">정보처리기사 </span>
                  <span class="career-license-year">2014.08</span>
                </p>
                <p class="career-license">
                  <span class="career-license-name">전자계산기조직응용기사 </span>
                  <span class="career-license-year">2014.11</span>
                </p>
                <p class="career-license">
                  <span class="career-license-name">ISO27001 인증심사원 </span>
                  <span class="career-license-year">2015.02</span>
                </p>
              </div>
              <br/>
              <div class="career-box text-left">
                <h1 class="career-year">Education</h1>
                <p class="career-education">
                  <span class="career-education-name">Naver edwith 웹 프로그래밍(풀스택)</span>
                  <span class="career-license-year"> 2020.03</span>
                </p>
                <p class="career-company-text">
                  웹프로그래밍 온라인 클래스 수강 <br/>
                  HTML, CSS, javascript 및 JDBC, API 설계 등<br/>
                </p>
                <p class="career-education">
                  <span class="career-education-name">Naver edwith 웹 백엔드</span>
                  <span class="career-license-year"> 2020.04</span>
                </p>
                <p class="career-company-text">
                  웹프로그래밍 온라인 클래스 수강 <br/>
                  SpringFramework, Spring JDBC, Spring MVC 등 <br/>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="project" class="container">
          <carousel class="slide-mapper" :per-page="1">
            <slide class="slide-page">
               <!-- 페이지 코드 시작 -->
              <div class="row">
                <div class="col-md-6 project-mapper">
                  <p class="project-subject-mapper">
                    <span class="project-subject-name">포트폴리오 깃허브 </span>
                    <span class="project-subject-year">2021.01</span>
                    <span class="project-description-text text-left">
                      <a href="https://github.com/inwoox/inwoox.github.io" style="font-size:2rem; color:black; margin-left:5%;"><font-awesome-icon :icon="['fab','github']"/></a>
                    </span>
                  </p>
                  <div class="col">
                    <div class="project-description-mapper">
                      <p class="project-description-text text-left">
                        <strong>제작 기간</strong> 2021.01.15 ~ 
                      </p>
                      <p class="project-description-text text-left">
                        <strong>요약</strong> 깃허브 페이지에 포트폴리오를 만들어보았습니다.<br/>
                        Vuejs 라이프 사이클 훅, Jquery를 통한 스크롤스파이 형태의 SPA 구현하였으며,<br/>
                        글자 타이핑, 페이드 효과, 마우스 오버 효과 등 여러 트랜지션 효과를 주어<br/>
                        페이지를 좀 더 세련되게 만들었고, 부트스트랩을 통해 반응형 UI 구성하였습니다.<br/>
                        Contact 페이지에는 EmailJS를 통한 이메일 발송 기능을 넣어 <br/>
                        궁금하신 사항이 있으실 경우 메일을 발송할 수 있도록 하였습니다.
                      </p>
                      <p class="project-description-text text-left">
                        <strong>경험 / 기술</strong><br/>
                        Vuejs 프레임워크를 통한 구현<br/>
                        bootstrap을 통한 UI, 반응형 UI<br/>
                        jquery를 통한 스크롤스파이<br/>
                        EmailJS를 통한 메일 발송<br/>
                        vue-carousel을 통한 슬라이드<br/>
                        페이드, 타이핑, transform 효과, 웹폰트 적용<br/>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 project-mapper">
                  <img src="img/careerimage.png" class="project-image">
                </div>

                <div class="row">
                  <div class="col project-mapper">
                    <img src="img/homeimage.png" class="project-sub-image">
                    <p class="project-description-text">트랜지션 효과를 적용한<br/>Home 페이지입니다</p>
                  </div>
                  <div class="col project-mapper">
                    <img src="img/aboutimage.png" class="project-sub-image">
                    <p class="project-description-text">저에 대한 소개 페이지입니다</p>
                  </div>
                  <div class="col project-mapper">
                    <img src="img/skillimage.png" class="project-sub-image">
                    <p class="project-description-text">스킬에 대한 소개 페이지입니다</p>
                  </div>
                  <div class="col project-mapper">
                    <img src="img/contactimage.png" class="project-sub-image">
                    <p class="project-description-text">메일 발송 기능을 가지고 있는<br/>Contact 페이지입니다</p>
                  </div>
                </div>
              </div>
              <!-- 페이지 코드 끝 -->
            </slide>
            <slide class="slide-page">
               <!-- 페이지 코드 시작 -->
              <div class="row">
                <div class="col-md-6 project-mapper">
                  <p class="project-subject-mapper">
                    <span class="project-subject-name">타코 주문 서비스 </span>
                    <span class="project-subject-year">2020.10</span>
                    <span class="project-description-text text-left">
                      <a href="https://github.com/inwoox/Spring-TacoDesign" style="font-size:2rem; color:black; margin-left:5%;"><font-awesome-icon :icon="['fab','github']"/></a>
                    </span>
                  </p>
                  <div class="col">
                    <div class="project-description-mapper">
                      <p class="project-description-text text-left">
                        <strong>제작 기간</strong> 2020.10.28 ~ 2021.11.22
                      </p>
                      <p class="project-description-text text-left">
                        <strong>요약</strong> 타코를 만들 식자재를 골라 타코를 만들고 주문하는 서비스<br/>
                        스프링 부트를 통해 구현하였으며, 템플릿 엔진은 thymeleaf를 사용하였습니다.<br/>
                        Mysql, H2 DB를 사용하였고, 데이터 퍼시스턴스는 JDBC, JPA를 사용하였고,<br/>
                        스프링 시큐리티를 통한 웹 요청 보안 처리, 구성 서버를 운영하여 구성 속성 관리<br/>
                        유레카 서비스 레지스트리나 서비스 액추에이터를 단일 서비스로 구성하면서, <br/>
                        MSA에 대해 조금 접해보는 기회가 되었습니다.
                      </p>
                      <p class="project-description-text text-left">
                        <strong>경험 / 기술</strong><br/>
                        스프링부트를 통해 구축 / 유효성 검사<br/>
                        프론트는 Thymeleaf 템플릿 엔진으로 구현<br/>
                        스프링 시큐리티를 통한 웹 요청 보안 처리<br/>
                        REST 컨트롤러 설계<br/>
                        JPA를 통한 데이터 퍼시스턴스<br/>
                        MYSQL 데이터모델링 <br/>
                        도커를 통해 카프카나 Mysql, gogs 컨테이너 실행<br/>
                        깃, 구성 서버를 통한 구성 속성 관리 (gogs를 통해 실시간 구성 속성 리프레시)<br/>
                        유레카 서비스 레지스트리, 액추에이터 엔드포인트 구성 시 MSA로 구현<br/>
                      </p>
                    </div>
                   
                  </div>
                </div>
                <div class="col-md-6 project-mapper">
                  <img src="img/taco.png" class="project-image">
                </div>

                <div class="row">
                  <div class="col project-mapper">
                    <img src="img/taco1.png" class="project-sub-image">
                    <p class="project-description-text">타코를 주문하는 페이지입니다</p>
                  </div>
                  <div class="col project-mapper">
                    <img src="img/taco2.png" class="project-sub-image">
                    <p class="project-description-text">결제를 위한 페이지입니다</p>
                  </div>
                  <div class="col project-mapper">
                    <img src="img/taco3.png" class="project-sub-image">
                    <p class="project-description-text">설명 페이지입니다</p>
                  </div>
                  <div class="col project-mapper">
                    <img src="img/taco4.png" class="project-sub-image">
                    <p class="project-description-text">주문한 이력을 보여주는 페이지입니다</p>
                  </div>
                </div>
              </div>
              <!-- 페이지 코드 끝 -->
            </slide>
            <slide class="slide-page">
               <!-- 페이지 코드 시작 -->
              <div class="row">
                <div class="col-md-6 project-mapper">
                  <p class="project-subject-mapper">
                    <span class="project-subject-name">트렐로와 유사한 작업 관리 </span>
                    <span class="project-subject-year">2020.11</span>
                    <span class="project-description-text text-left">
                      <a href="https://github.com/inwoox/Vue-Spring-TaskManager" style="font-size:2rem; color:black; margin-left:5%;"><font-awesome-icon :icon="['fab','github']"/></a>
                    </span>
                  </p>
                  <div class="col">
                    <div class="project-description-mapper">
                      <p class="project-description-text text-left">
                        <strong>제작 기간</strong> 2020.11.23 ~ 2020.12.25
                      </p>
                      <p class="project-description-text text-left">
                        <strong>요약</strong> 트렐로와 비슷한 작업 관리 서비스를 만들어보았습니다.<br/>
                        Spring-boot와 Vuejs를 통해 만들었으며, 데이터 퍼시스턴스로 Hinernate 사용<br/>
                        Maven의 플러그인을 이용하여 프론트와 백엔드를 한번에 빌드하도록 구성,<br/>
                        Spring AOP를 통해 횡단 관심사 처리, 선언적 트랜잭션 관리 <br/>
                        백엔드는 헥사고날 아키텍처, 같은 도메인에 속하는 클래스를 같은 패키지에 위치<br/>
                        JWT를 통해 클라이언트 인증을 구현하였습니다.
                      </p>
                      <p class="project-description-text text-left">
                        <strong>경험 / 기술</strong><br/>Spring JDBC / Spring MVC<br/>
                        프론트, 백엔드 데이터 검증 <br/>
                        선언적 트랜잭션 관리<br/>
                        API (Controller) 설계 (입력 값, 유효성 검증 규칙, 출력, 상태 코드, 명명 규칙)<br/>
                        헥사고날 아키텍처를 채택한 백엔드 아키텍처 구현<br/>
                        Spring Security의 필터를 커스터마이징하여 API 앞에서 요청 단위 인증<br/>
                        Spring Security, JWT를 통한 사용자 인증 처리<br/>
                        Spring AOP를 통해, 메서드 단위의 권한 부여 (횡단 관심사 처리)<br/>
                        Java EE Mail API를 이용한 메일 발송 구현<br/>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 project-mapper">
                  <img src="img/task.png" class="project-image">
                </div>

                <div class="row">
                  <div class="col project-mapper">
                    <img src="img/task1.png" class="project-sub-image">
                    <p class="project-description-text">로그인 페이지입니다</p>
                  </div>
                  <div class="col project-mapper">
                    <img src="img/task2.png" class="project-sub-image">
                    <p class="project-description-text">보드 만드는 화면입니다</p>
                  </div>
                  <div class="col project-mapper">
                    <img src="img/task3.png" class="project-sub-image">
                    <p class="project-description-text">보드 내부의 화면입니다</p>
                  </div>
                  <div class="col project-mapper">
                    <img src="img/task4.png" class="project-sub-image">
                    <p class="project-description-text">카드 만드는 화면입니다</p>
                  </div>
                </div>
              </div>
              <!-- 페이지 코드 끝 -->
            </slide>
          </carousel>
         

        </section>
        <section id="contact" class="container">
          <div>
            <br/>
            <div class="row">
              <div class="col">
                <div class="col">
                  <div class="contact-mapper">
                    <div class="text-left ml-4">
                      <h1 class="contact-name">INFO</h1>
                      <br/>
                      <label class="contact-info-email">inwoox@naver.com</label>
                      <br/>
                      <span><a href="https://www.youtube.com/%EC%84%B8%EC%83%81%EC%9D%98%EB%AA%A8%EB%93%A0%EC%BD%94%EB%94%A9" class="contact-simbol"><font-awesome-icon :icon="['fab','youtube']"/></a>   </span>
                      <span><a href="https://inwoox.tistory.com/" class="ml-3 contact-simbol"><font-awesome-icon :icon="['fas','blog']"/></a> </span>
                      <span><a href="https://github.com/inwoox" class="ml-3 contact-simbol"><font-awesome-icon :icon="['fab','github']"/></a></span>
                    </div>
                  </div>
                </div>
                <br/><br/><br/>
                <div class="col">
                  <form class="contact-mapper">
                    <h1 class="contact-name ml-4">CONTACT</h1>
                    <br/><br/>
                    <input type="text" class="form-control contact-subject ml-4" name="contact-name" placeholder="성함">
                    <br/>
                    <input type="email" class="form-control contact-email ml-4" name="contact-email" placeholder="회신 받으실 메일 주소">
                    <br/>
                    <textarea class="form-control contact-text ml-4" name="contact-message" rows="3" placeholder="내용"/>
                    <br/>
                    <input type="button" name="submit" class="btn btn-outline-success contact-send ml-4" value="메일 발송"/>
                    <br/>
                    <br/>
                  </form>
                </div>
              </div>
              <div class="col-md-6">
                <h1 class="contact-message">방문해주셔서 감사합니다!<br/>행복한 하루 되세요 ^^</h1>
                <img src="/img/15.jpeg" class="contact-image">
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>


<script>
import { Carousel, Slide } from 'vue-carousel';
import emailjs from 'emailjs-com';
import $ from 'jquery'
  export default {
    
    data() {
      return {
        formshow: false,
        
      }
    },
    components:{
      Carousel, Slide
    },
    created() {
      $(document).ready(function() {
        // emailjs 설정
        emailjs.init("user_Y4qSpAzV7mOWsYRDXqUSA");

        $('input[name=submit]').click(function(){       	 
                  
          var templateParams = {	
          //각 요소는 emailJS에서 설정한 템플릿과 동일한 명으로 작성!
            name: $('input[name=contact-name]').val(),
            email : $('input[name=contact-email]').val(),
            message : $('textarea[name=contact-message]').val()
          };
                    
          emailjs.send('inwoo', 'template_inwoo', templateParams)
          //emailjs.send('service ID', 'template ID', 보낼 내용이 담긴 객체)
          .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            $('input[name=contact-name]').val('');
            $('input[name=contact-email]').val('');
            $('textarea[name=contact-message]').val('');
            alert("곧 회신 드리겠습니다. 감사합니다!");
          }, function(error) {
            console.log('FAILED...', error);
          });
        });
          
 
        // nav 메뉴 누를 경우, 해당 섹션으로 이동하면서, 효과
        var $menu = $(".nav-menu");
        var $menu_a = $("a", $menu);
        var hash = function(h) {
          if (history.pushState) { history.pushState(null, null, h); } 
          else { location.hash = h; }
        };
        $menu_a.click(function() {
          $("html").animate(
            { scrollTop: $($(this).attr("href")).offset().top - $(".nav").height() },
            { duration: 700, complete: hash($(this).attr("href")) }
          );
        });

        // 글자 타이핑 효과
        var typingBool = false; 
        var typingIdx=0; 
        var typingTxt = $(".typing-txt").text(); // 타이핑될 텍스트를 가져온다 
        typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
        if(typingBool==false){ // 타이핑이 진행되지 않았다면 
          typingBool=true; 
          
          var tyInt = setInterval(typing,100); // 반복동작 
        } 
        
        function typing(){ 
          if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
            $(".typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
            typingIdx++; 
          } else{ 
            clearInterval(tyInt); //끝나면 반복종료 
          } 
        }  
      })

      this.goPath('li1')
    },
    methods: {
      goPath(num){ 
        setTimeout(() => {
          
          this.formshow = true

          // 클래스 초기화
          $('.nav-menu li a').removeClass('on');
          $('.nav-menu li a').removeClass('un-on');

          // 선택된 요소의 id와 일치하는 요소에 on 클래스 추가
          $('#' + num).addClass('on');

          // .nav li 요소 중에 on을 클래스로 가지지 않은 것을 선택하여, un-on 클래스 추가
          $('.nav-menu li a').not('.nav-menu li a.on').addClass('un-on')
        }, 100);  
      }
    } 
  }

  
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&display=swap');


.section { width: 100%; }

.nav {
  background-color: black;
  position: fixed;
  width: 100%;
  height: 9%;
  top:0;
  z-index: 99;
}
.nav-menu li {
    display: inline-block;
    margin-top: 2.5%;
    //line-height: 100px;
    font-size: 20px;

}
.nav-menu-item {
    display: block;
    padding: 0 30px;
    text-decoration: none;  
    color: burlywood;       
}


.on { transition: all 1s; color: white;}
//.un-on { transition: all 1s; transition-property: opacity; opacity: 0.8; color: burlywood; }


.home-text { font-size: 3rem; font-family: 'Noto Sans KR', sans-serif; margin-top: 3%; margin-right: 50%;}

// 메인 메뉴 반응형
@media screen and (max-width:1050px) {
  .nav-menu-item { font-size: 0.7rem; padding: 0 2px;}
  .nav-menu { margin-left: -2%; }
  .nav { height: 5%; }
  #home { background-size: cover; }
}

// @media screen and (max-width:700px) {
//   .nav-menu-item { font-size: 0.8rem; padding: 0 2px;}
//   .nav-menu { margin-left: -5%; }
//   .nav { height: 5%; }
//   #home { background-size: cover; }
// }


// Home 페이지 반응형
@media screen and (min-width:750px) and (max-width:950px) {
  .home-text { font-size: 2rem; }
  .home-text h1 { font-size: 2rem;}
}
@media screen and (max-width:750px) {
  .home-text { font-size: 1.1rem; }
  .home-text h1 { font-size: 1rem;}

  #home {
    width: 750px !important;
    left:0; right:0;
    margin:auto;
  }
}

// About 페이지 반응형
@media screen and (min-width:1780px) and (max-width:2800px) {
  .profile-text { margin-left: 20%; }
}
@media screen and (min-width:1500px) and (max-width:1780px) {
  .profile-text-subject { font-size:1.6rem;}
  .profile-text { font-size: 1.1rem; margin-left: 10%; margin-top: 2%;}
}
@media screen and (min-width:680px) and (max-width:1500px) {
  .profile-text-subject { font-size:1.4rem;}
  .profile-text { font-size: 1rem; margin-left: 5%; margin-top: 5%;}
}
@media screen and (max-width:680px) {
  .profile-text-subject { font-size:0.9rem; }
  .profile-text { font-size: 0.6rem; }
}

// Skill 페이지 반응형
@media screen and (min-width:1700px) and (max-width:2800px) {
  .skill-subject { margin-bottom: 3%; font-size: 3rem;}
}
@media screen and (min-width:1000px) and (max-width:1700px) {
  .skill-subject { margin-bottom: 2%; font-size: 2.5rem;}
}
@media screen and (max-width:1000px) {
  .skill-subject { margin-bottom: 5%; font-size: 1.5rem; }
  .skill-title { font-size: 1rem;}
  .skill-text { margin-bottom: 0%; font-size: 0.7rem; }
}

// career 페이지 반응형
@media screen and (min-width:1750px) and (max-width: 2400px) {
  .career-year { font-size: 3rem; }
  .career-company-text { font-size: 1rem;}
  .career-license-name { font-size: 1.3rem;}
  .career-education-name { font-size: 1.3rem;}
  .career-company-name { font-size: 1.5rem;}
  .career-icon { font-size: 1.5rem;}
}
@media screen and (min-width:1600px) and (max-width: 1750px) {
  .career-year { font-size: 2.8rem; }
  .career-company-text { font-size: 0.9rem;}
}
@media screen and (min-width:1450px) and (max-width: 1600px) {
  .career-year { font-size: 2.6rem; }
  .career-license-name { font-size: 0.9rem;}
  .career-education-name { font-size: 0.9rem;}
  .career-company-name { font-size: 0.9rem;}
  .career-company-text { font-size: 0.8rem;}
  .career-license { width: 60%;}
}
@media screen and (max-width: 1450px) {
  .career-year { font-size: 2.4rem; }
  .career-company-text { font-size: 0.7rem;}
  .career-company-year, .career-license-year { font-size: 0.8rem;}
}
@media screen and (max-width: 1000px) {
  .career-year { font-size: 2.4rem; }
  .career-company-text { font-size: 0.7rem;}
  .career-license-name { font-size: 0.7rem;}
  .career-education-name { font-size: 0.7rem;}
  .career-company-name { font-size: 0.7rem;}
  .career-icon { font-size: 0.7rem;}
  .career-company-year, .career-license-year { font-size: 0.5rem;}
}


// project 페이지 반응형
@media screen and (max-width: 700px){
  .project-description-text { font-size: 0.7rem;}
}

// contact 페이지 반응형
@media screen and (max-width: 2800px){
  .contact-message { font-size: 3rem; }
}
@media screen and (max-width: 1300px){
  .contact-message { font-size: 2rem; }
}
@media screen and (max-width: 700px){
  .contact-message { font-size: 2rem; margin-top:10%;}
}

// 모바일 페이지 수평 스크롤 불가
@media screen and (max-width:680px) {
  #home, #about, #skill, #career, #project, #contact {
    max-width: 100%; overflow-x: hidden;
  }
}

.profile-text { text-align: left; color:rgb(91, 90, 90);  line-height: 150%;}

.skill-box { width: 45%; margin-left: 2%; }
.skill-etc { width: 92%;}
.skill-subject { font-family: 'Noto Sans KR', sans-serif; margin-right: 10%;}
.skill-text { color:rgb(91, 90, 90); }

.career-box { margin-left: 5%; margin-top: 2%;}
.career-year { font-family: 'Noto Sans KR', sans-serif; }
.career-company { border-bottom: 1px solid burlywood; width: 95%; }
.career-company-name { font-family: 'Nanum Myeongjo', serif; color:rgb(207, 149, 73);}
.career-company-year { color:rgb(128, 125, 125);}
.career-company-text { color:rgb(91, 90, 90);}
.career-license { border-bottom: 1px solid burlywood; width: 70%; }
.career-license-name { font-family: 'Nanum Myeongjo', serif; color:rgb(84, 133, 218); }
.career-license-year { color:rgb(128, 125, 125); float:right; }
.career-education { border-bottom: 1px solid burlywood; width: 80%; }
.career-education-name { font-family: 'Nanum Myeongjo', serif; color:rgb(187, 37, 60); }
.career-line { border-left: 3px dotted black; }
.career-icon { color:burlywood; margin-left: 2%;}


.project-mapper { margin-top: 2%;}
.project-subject-mapper { border-bottom: 1px solid black; text-align: left; width: 100%; margin-left: 1%;}
.project-subject-name { font-size: 2rem; font-family: 'Noto Sans KR', sans-serif;  }
.project-subject-year {  color: rgb(128, 125, 125); }
.project-image { width:100%; border: 2px solid black; height: 75%; }
.project-sub-image { width:85%;}
.project-description-name { font-size: 1.4rem; font-family: 'Noto Sans KR', sans-serif; }
.project-description-text { color:rgb(91, 90, 90); margin-top: 3%;}


.contact-mapper { border-left: 5px solid black;}
.contact-name { font-size: 3rem; font-family: 'Noto Sans KR', sans-serif; text-align: left;}
.contact-email, .contact-subject, .contact-text { width:70%; border: 2px solid rgb(9, 159, 186); }
.contact-member-message { height: 150px;}
.contact-info-email { font-size: 1.5rem; font-family: 'Noto Sans KR', sans-serif; color:rgb(9, 159, 186); }
.contact-simbol { font-size: 3rem; color:rgb(9, 159, 186); }
.contact-send { float:left; width: 70%;}
.contact-image { width: 75%; height: 75%; }
.contact-message { font-family: 'Noto Sans KR', sans-serif; margin-bottom: 10%;}

#home { background-image: url('/img/006.jpeg'); background-repeat: no-repeat; }

#home, #about, #skill, #career, #project, #contact { 
  height: 100%; color: black;  //background-color: #3db296;
}

// 마우스 오버 시 언더라인 효과
.to-right-underline{ position: relative; }
.to-right-underline:after{ 
  content: ""; position: absolute; left: 10%; bottom: -10px; width: 0px; height: 2px; margin: 5px 0 0; 
  transition: all 0.2s ease-in-out; transition-duration: 0.3s; opacity: 0; background-color: white;
}
.to-right-underline:hover:after{ width: 80%; opacity: 1; }


// 본문 텍스트 트랜지션 효과
.fade-enter-active { transition: opacity 2s, transform 2s; }
.fade-enter { opacity: 0; transform: translateY(-30px)}

// 텍스트 밑줄 
.under, .under1, .under2 { position: relative; color:black; font-family: 'Noto Sans KR', sans-serif; }
.under:after, .under1:after, .under2:after { 
  content: ""; position: absolute; left: 0; bottom: -10px; width: 100%; 
  height: 3px; margin: 5px 0 0; opacity: 1;  }
.under:after { background-color:#FF8C00; }
.under1:after{ background-color: #FFD700; }
.under2:after{ background-color: green; }


// 글자 타이핑 효과
p.typing-txt{ display: none; } 

</style>