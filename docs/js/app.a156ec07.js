(function(t){function s(s){for(var e,r,n=s[0],o=s[1],l=s[2],v=0,m=[];v<n.length;v++)r=n[v],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&m.push(c[r][0]),c[r]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e]);p&&p(s);while(m.length)m.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,s=0;s<i.length;s++){for(var a=i[s],e=!0,n=1;n<a.length;n++){var o=a[n];0!==c[o]&&(e=!1)}e&&(i.splice(s--,1),t=r(r.s=a[0]))}return t}var e={},c={app:0},i=[];function r(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=e,r.d=function(t,s,a){r.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,s){if(1&s&&(t=r(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)r.d(a,e,function(s){return t[s]}.bind(null,e));return a},r.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(s,"a",s),s},r.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],o=n.push.bind(n);n.push=s,n=n.slice();for(var l=0;l<n.length;l++)s(n[l]);var p=o;i.push([0,"chunk-vendors"]),a()})({0:function(t,s,a){t.exports=a("56d7")},1749:function(t,s,a){"use strict";a("9083")},"3dc0":function(t,s,a){"use strict";a("53c7")},"40f8":function(t,s,a){"use strict";a("9177")},"53c7":function(t,s,a){},"56d7":function(t,s,a){"use strict";a.r(s);a("e260"),a("e6cf"),a("cca6"),a("a79d");var e=a("2b0e"),c=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],r=(a("5c0b"),a("2877")),n={},o=Object(r["a"])(n,c,i,!1,null,null,null),l=o.exports,p=a("8c4f"),v=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row justify-content-center"},[a("div",[a("nav",{staticClass:"nav fixed-top"},[a("ul",{staticClass:"nav-menu"},[a("li",{on:{click:function(s){return t.goPath("li1")}}},[a("a",{staticClass:"nav-menu-item to-right-underline",attrs:{id:"li1",href:"#home"}},[a("font-awesome-icon",{attrs:{icon:["fas","home"]}}),t._v(" HOME")],1)]),a("li",{on:{click:function(s){return t.goPath("li2")}}},[a("a",{staticClass:"nav-menu-item to-right-underline",attrs:{id:"li2",href:"#about"}},[a("font-awesome-icon",{attrs:{icon:["fas","user"]}}),t._v(" ABOUT")],1)]),a("li",{on:{click:function(s){return t.goPath("li3")}}},[a("a",{staticClass:"nav-menu-item to-right-underline",attrs:{id:"li3",href:"#skill"}},[a("font-awesome-icon",{attrs:{icon:["fab","connectdevelop"]}}),t._v(" SKILL")],1)]),a("li",{on:{click:function(s){return t.goPath("li4")}}},[a("a",{staticClass:"nav-menu-item to-right-underline",attrs:{id:"li4",href:"#career"}},[a("font-awesome-icon",{attrs:{icon:["far","keyboard"]}}),t._v(" CAREER")],1)]),a("li",{on:{click:function(s){return t.goPath("li5")}}},[a("a",{staticClass:"nav-menu-item to-right-underline",attrs:{id:"li5",href:"#project"}},[a("font-awesome-icon",{attrs:{icon:["fas","project-diagram"]}}),t._v(" PROJECT")],1)]),a("li",{on:{click:function(s){return t.goPath("li6")}}},[a("a",{staticClass:"nav-menu-item to-right-underline",attrs:{id:"li6",href:"#contact"}},[a("font-awesome-icon",{attrs:{icon:["far","address-card"]}}),t._v(" CONTACT")],1)])])])]),a("div",{staticClass:"section"},[a("section",{staticClass:"container-fluid",attrs:{id:"home"}},[a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"home-text"},[a("transition",{attrs:{name:"fade"}},[t.formshow?a("h1",[t._v("안녕하세요, 반갑습니다 "),a("font-awesome-icon",{attrs:{icon:["far","smile"]}})],1):t._e()]),a("p",{staticClass:"typing-txt"},[t._v(" 개발자 황인우입니다! ")]),a("p",{staticClass:"typing"})],1)]),a("section",{staticClass:"container-fluid",attrs:{id:"about"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("br"),a("br"),a("transition",{attrs:{name:"fade"}},[t.formshow?a("p",{staticClass:"h5 profile-text"},[a("b",{staticClass:"h3 under profile-text-subject"},[t._v("습관을 잘 만들고, 그 습관을 오래 지속할 수 있는 사람")]),a("br"),a("br"),t._v(" 군대에서 신병교육대 조교로 활동할 때, "),a("br"),t._v(" 목표를 세우고, 세부 목표를 하나 하나 매일 체크하던 버릇이 생겨서인지, "),a("br"),t._v(" 저는 습관을 잘 만들고 꾸준하게 실천하는 사람이 되었습니다."),a("br"),t._v(" 비록 늘 좋은 방향으로만 흘러가지는 않지만, "),a("br"),t._v(" 항상 좋은 방향으로 가기위해, 그리고 꾸준하게 노력하고 있습니다."),a("br"),a("br"),a("br"),a("b",{staticClass:"h3 under1 profile-text-subject"},[t._v("새로운 기술을 배워, 그것을 적용해보며 희열을 느끼는 사람")]),a("br"),a("br"),t._v(" 2020년에만 약 20권이 넘는 개발 관련 서적을 샀으며, 그것을 읽고 실습해보았습니다."),a("br"),t._v(" 100% 다 소화하지는 못했지만, 많은 기술들을 새로 접하고, 익히고 경험해볼 수 있었던"),a("br"),t._v(" 즐겁고 행복한 시간이었습니다. 새로운 강좌 컨텐츠를 만들어, "),a("br"),t._v(" 구독하시는 분들의 만족스런 피드백을 받는 것도 즐거운 경험입니다."),a("br"),a("br"),a("br"),a("b",{staticClass:"h3 under2 profile-text-subject"},[t._v("나이에 상관 없이, 할 수 있는 데까지 개발을 하고 싶은 사람")]),a("br"),a("br"),t._v(" 돈보다도 '내 기술'을 가지고 싶고, 전문가, 기술자로 불리고 싶은 사람입니다. "),a("br"),t._v(" 정말 하고 싶은 일이 있는데, 나이가 너무 많아서 고민하고 있는 사람이 있다면,"),a("br"),t._v(" 저는 제가 그랬듯이, 지금 시작해도 늦지 않았다고, 인생은 매우 길다고 말해주고 싶습니다."),a("br"),t._v(" 그리고 저 역시도 사회에, 주변의 시선에, 그 외의 어떤 여러가지에 얽매이지 않고,"),a("br"),t._v(" 어떤 형태로든 개발자의 삶을, 내가 할 수 있는 데까지 이어가고 싶습니다. ")]):t._e()])],1),t._m(0)])]),a("section",{staticClass:"container",attrs:{id:"skill"}},[t._m(1),a("div",{staticClass:"row"},[a("div",{staticClass:"alert alert-primary skill-box"},[a("p",{staticClass:"h3 text-left skill-title"},[t._v("JAVA")]),a("br"),a("p",{staticClass:"text-left skill-text"},[a("font-awesome-icon",{attrs:{icon:["fas","check"]}}),t._v(" Spring Framework, Spring Boot를 통한 백엔드 개발 ")],1),a("p",{staticClass:"text-left skill-text"},[a("font-awesome-icon",{attrs:{icon:["fas","check"]}}),t._v(" Spring Security (요청 단위 인증, 사용자 인증 처리) ")],1),a("p",{staticClass:"text-left skill-text"},[a("font-awesome-icon",{attrs:{icon:["fas","check"]}}),t._v(" REST API 설계 / 레이어드 아키텍처 & 헥사고날 아키텍처 구현")],1),a("p",{staticClass:"text-left skill-text"},[a("font-awesome-icon",{attrs:{icon:["fas","check"]}}),t._v(" Microservice Achitecture 경험 (+ 유레카 서비스 레지스트리) ")],1),a("p",{staticClass:"text-left skill-text"},[a("font-awesome-icon",{attrs:{icon:["fas","check"]}}),t._v(" Maven, Gradle 등 빌드 관리 도구 경험 ")],1)]),a("div",{staticClass:"alert alert-success skill-box"},[a("p",{staticClass:"h3 text-left skill-title"},[t._v("Javascript / HTML / CSS")]),a("br"),a("p",{staticClass:"text-left skill-text"},[a("font-awesome-icon",{attrs:{icon:["fas","check"]}}),t._v(" Vue.js Framework (vuex, vue-router, component, 이벤트 처리) ")],1),a("p",{staticClass:"text-left skill-text"},[a("font-awesome-icon",{attrs:{icon:["fas","check"]}}),t._v(" Sequelize (ORM), bcrypt, JWT, vue-cookies 경험 ")],1),a("p",{staticClass:"text-left skill-text"},[a("font-awesome-icon",{attrs:{icon:["fas","check"]}}),t._v(" Bootstrap을 통한 UI, 반응형 UI 구현 ")],1),a("p",{staticClass:"text-left skill-text"},[a("font-awesome-icon",{attrs:{icon:["fas","check"]}}),t._v(" Jquery를 통한 이벤트 연결 / 요소 엑세스 등")],1),a("p",{staticClass:"text-left skill-text"},[a("font-awesome-icon",{attrs:{icon:["fas","check"]}}),t._v(" 기본적인 HTML, CSS 사용")],1)])]),a("div",{staticClass:"row"},[a("div",{staticClass:"alert alert-danger skill-box"},[a("p",{staticClass:"h3 text-left skill-title"},[t._v("Python / C#")]),a("br"),a("p",{staticClass:"text-left skill-text"},[a("font-awesome-icon",{attrs:{icon:["fas","check"]}}),t._v(" 파이썬 크롤러 및 C# 크롤러 등 필요한 프로그램 구현 ")],1),a("p",{staticClass:"text-left skill-text"},[a("font-awesome-icon",{attrs:{icon:["fas","check"]}}),t._v(" C#을 통한 데스크톱 프로그램 구현 (온라인 클래스 운영)")],1),a("p",{staticClass:"text-left skill-text"},[a("font-awesome-icon",{attrs:{icon:["fas","check"]}}),t._v(" Python, tensorflow나 Scikit-learn을 통한 머신러닝 경험 ")],1)]),a("div",{staticClass:"alert alert-warning skill-box"},[a("p",{staticClass:"h3 text-left skill-title"},[t._v("OS / DB")]),a("br"),a("p",{staticClass:"text-left skill-text"},[a("font-awesome-icon",{attrs:{icon:["fas","check"]}}),t._v(" 리눅스 (MAC) 환경 개발 경험 ")],1),a("p",{staticClass:"text-left skill-text"},[a("font-awesome-icon",{attrs:{icon:["fas","check"]}}),t._v(" JPA,Hibernate 등 ORM을 통한 데이터 퍼시스턴스 구현 ")],1),a("p",{staticClass:"text-left skill-text"},[a("font-awesome-icon",{attrs:{icon:["fas","check"]}}),t._v(" MySQL 데이터모델링, 엔터티 설계 ")],1)])]),a("div",{staticClass:"row"},[a("div",{staticClass:"alert alert-info skill-box skill-etc"},[a("p",{staticClass:"h3 text-left skill-title"},[t._v("ETC")]),a("br"),a("p",{staticClass:"text-left skill-text"},[a("font-awesome-icon",{attrs:{icon:["fas","check"]}}),t._v(" Docker를 통한 MySQL, Gogs, 메시지 브로커 (Kafka, RabbitMQ) 컨테이너 실행 등 ")],1),a("p",{staticClass:"text-left skill-text"},[a("font-awesome-icon",{attrs:{icon:["fas","check"]}}),t._v(" Docker, 젠킨스를 통한 배포 자동화 (CI/CD) ")],1),a("p",{staticClass:"text-left skill-text"},[a("font-awesome-icon",{attrs:{icon:["fas","check"]}}),t._v(" 도커 컴포즈, 쿠버네티스 운영 경험 ")],1),a("p",{staticClass:"text-left skill-text"},[a("font-awesome-icon",{attrs:{icon:["fas","check"]}}),t._v(" Github, Gogs 등 버전 관리 시스템을 통해, 구성 서버 구축 (PUSH마다 자동 구성 속성 리프레시 구현) ")],1),a("p",{staticClass:"text-left skill-text"},[a("font-awesome-icon",{attrs:{icon:["fas","check"]}}),t._v(" AWS 등 클라우드 배포 경험 ")],1),a("p",{staticClass:"text-left skill-text"},[a("font-awesome-icon",{attrs:{icon:["fas","check"]}}),t._v(" Github, Bitbucket, Gogs를 통한 코드 관리 경험 ")],1)])])]),a("section",{attrs:{id:"career"}},[a("div",{staticClass:"row"},[t._m(2),a("div",{staticClass:"col career-line"},[t._m(3),a("div",{staticClass:"career-box text-left"},[a("h1",{staticClass:"career-year"},[t._v("Activity")]),a("p",{staticClass:"career-company"},[a("span",{staticClass:"career-company-name"},[t._v("BLOG 운영 ")]),a("span",{staticClass:"career-company-year"},[t._v("2017.01 -")]),a("span",[a("a",{staticClass:"career-icon",attrs:{href:"https://inwoox.tistory.com/"}},[a("font-awesome-icon",{attrs:{icon:["fas","blog"]}})],1)])]),t._m(4)]),a("div",{staticClass:"career-box text-left"},[a("p",{staticClass:"career-company"},[a("span",{staticClass:"career-company-name"},[t._v("Youtube 운영 ")]),a("span",{staticClass:"career-company-year"},[t._v("2019.03 -")]),a("span",[a("a",{staticClass:"career-icon",attrs:{href:"https://www.youtube.com/%EC%84%B8%EC%83%81%EC%9D%98%EB%AA%A8%EB%93%A0%EC%BD%94%EB%94%A9"}},[a("font-awesome-icon",{attrs:{icon:["fab","youtube"]}})],1)])]),t._m(5)]),a("div",{staticClass:"career-box text-left"},[a("p",{staticClass:"career-company"},[a("span",{staticClass:"career-company-name"},[t._v("Class101 온라인 클래스 운영 ")]),a("span",{staticClass:"career-company-year"},[t._v("2020.11 -")]),a("span",[a("a",{staticClass:"career-icon",attrs:{href:"https://class101.net/products/5fad37cef17f1f000dbeb172"}},[a("font-awesome-icon",{attrs:{icon:["fas","chalkboard-teacher"]}})],1)])]),t._m(6)])]),t._m(7)])]),a("section",{staticClass:"container",attrs:{id:"project"}},[a("carousel",{staticClass:"slide-mapper",attrs:{"per-page":1}},[a("slide",{staticClass:"slide-page"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 project-mapper"},[a("p",{staticClass:"project-subject-mapper"},[a("span",{staticClass:"project-subject-name"},[t._v("포트폴리오 깃허브 ")]),a("span",{staticClass:"project-subject-year"},[t._v("2021.01")]),a("span",{staticClass:"project-description-text text-left"},[a("a",{staticStyle:{"font-size":"2rem",color:"black","margin-left":"5%"},attrs:{href:"https://github.com/inwoox/inwoox.github.io"}},[a("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1)])]),a("div",{staticClass:"col"},[a("div",{staticClass:"project-description-mapper"},[a("p",{staticClass:"project-description-text text-left"},[a("strong",[t._v("제작 기간")]),t._v(" 2021.01.15 ~ ")]),a("p",{staticClass:"project-description-text text-left"},[a("strong",[t._v("요약")]),t._v(" 깃허브 페이지에 포트폴리오를 만들어보았습니다."),a("br"),t._v(" Vuejs 라이프 사이클 훅, Jquery를 통한 스크롤스파이 형태의 SPA 구현하였으며,"),a("br"),t._v(" 글자 타이핑, 페이드 효과, 마우스 오버 효과 등 여러 트랜지션 효과를 주어"),a("br"),t._v(" 페이지를 좀 더 세련되게 만들었고, 부트스트랩을 통해 반응형 UI 구성하였습니다."),a("br"),t._v(" Contact 페이지에는 EmailJS를 통한 이메일 발송 기능을 넣어 "),a("br"),t._v(" 궁금하신 사항이 있으실 경우 메일을 발송할 수 있도록 하였습니다. ")]),a("p",{staticClass:"project-description-text text-left"},[a("strong",[t._v("경험 / 기술")]),a("br"),t._v(" Vuejs 프레임워크를 통한 구현"),a("br"),t._v(" bootstrap을 통한 UI, 반응형 UI"),a("br"),t._v(" jquery를 통한 스크롤스파이"),a("br"),t._v(" EmailJS를 통한 메일 발송"),a("br"),t._v(" vue-carousel을 통한 슬라이드"),a("br"),t._v(" 페이드, 타이핑, transform 효과, 웹폰트 적용"),a("br")])])])]),a("div",{staticClass:"col-md-6 project-mapper"},[a("img",{staticClass:"project-image",attrs:{src:"img/careerimage.png"}})]),a("div",{staticClass:"row"},[a("div",{staticClass:"col project-mapper"},[a("img",{staticClass:"project-sub-image",attrs:{src:"img/homeimage.png"}}),a("p",{staticClass:"project-description-text"},[t._v("트랜지션 효과를 적용한"),a("br"),t._v("Home 페이지입니다")])]),a("div",{staticClass:"col project-mapper"},[a("img",{staticClass:"project-sub-image",attrs:{src:"img/aboutimage.png"}}),a("p",{staticClass:"project-description-text"},[t._v("저에 대한 소개 페이지입니다")])]),a("div",{staticClass:"col project-mapper"},[a("img",{staticClass:"project-sub-image",attrs:{src:"img/skillimage.png"}}),a("p",{staticClass:"project-description-text"},[t._v("스킬에 대한 소개 페이지입니다")])]),a("div",{staticClass:"col project-mapper"},[a("img",{staticClass:"project-sub-image",attrs:{src:"img/contactimage.png"}}),a("p",{staticClass:"project-description-text"},[t._v("메일 발송 기능을 가지고 있는"),a("br"),t._v("Contact 페이지입니다")])])])])]),a("slide",{staticClass:"slide-page"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 project-mapper"},[a("p",{staticClass:"project-subject-mapper"},[a("span",{staticClass:"project-subject-name"},[t._v("타코 주문 서비스 ")]),a("span",{staticClass:"project-subject-year"},[t._v("2020.10")]),a("span",{staticClass:"project-description-text text-left"},[a("a",{staticStyle:{"font-size":"2rem",color:"black","margin-left":"5%"},attrs:{href:"https://github.com/inwoox/inwoox.github.io"}},[a("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1)])]),a("div",{staticClass:"col"},[a("div",{staticClass:"project-description-mapper"},[a("p",{staticClass:"project-description-text text-left"},[a("strong",[t._v("제작 기간")]),t._v(" 2020.10.28 ~ 2021.11.22 ")]),a("p",{staticClass:"project-description-text text-left"},[a("strong",[t._v("요약")]),t._v(" 타코를 만들 식자재를 골라 타코를 만들고 주문하는 서비스"),a("br"),t._v(" 스프링 부트를 통해 구현하였으며, 템플릿 엔진은 thymeleaf를 사용하였습니다."),a("br"),t._v(" Mysql, H2 DB를 사용하였고, 데이터 퍼시스턴스는 JDBC, JPA를 사용하였고,"),a("br"),t._v(" 스프링 시큐리티를 통한 웹 요청 보안 처리, 구성 서버를 운영하여 구성 속성 관리"),a("br"),t._v(" 유레카 서비스 레지스트리나 서비스 액추에이터를 단일 서비스로 구성하면서, "),a("br"),t._v(" MSA에 대해 조금 접해보는 기회가 되었습니다. ")]),a("p",{staticClass:"project-description-text text-left"},[a("strong",[t._v("경험 / 기술")]),a("br"),t._v(" 스프링부트를 통해 구축 / 유효성 검사"),a("br"),t._v(" 프론트는 Thymeleaf 템플릿 엔진으로 구현"),a("br"),t._v(" 스프링 시큐리티를 통한 웹 요청 보안 처리"),a("br"),t._v(" REST 컨트롤러 설계"),a("br"),t._v(" JPA를 통한 데이터 퍼시스턴스"),a("br"),t._v(" MYSQL 데이터모델링 "),a("br"),t._v(" 도커를 통해 카프카나 Mysql, gogs 컨테이너 실행"),a("br"),t._v(" 깃, 구성 서버를 통한 구성 속성 관리 (gogs를 통해 실시간 구성 속성 리프레시)"),a("br"),t._v(" 유레카 서비스 레지스트리, 액추에이터 엔드포인트 구성 시 MSA로 구현"),a("br")])])])]),a("div",{staticClass:"col-md-6 project-mapper"},[a("img",{staticClass:"project-image",attrs:{src:"img/taco.png"}})]),a("div",{staticClass:"row"},[a("div",{staticClass:"col project-mapper"},[a("img",{staticClass:"project-sub-image",attrs:{src:"img/taco1.png"}}),a("p",{staticClass:"project-description-text"},[t._v("타코를 주문하는 페이지입니다")])]),a("div",{staticClass:"col project-mapper"},[a("img",{staticClass:"project-sub-image",attrs:{src:"img/taco2.png"}}),a("p",{staticClass:"project-description-text"},[t._v("결제를 위한 페이지입니다")])]),a("div",{staticClass:"col project-mapper"},[a("img",{staticClass:"project-sub-image",attrs:{src:"img/taco3.png"}}),a("p",{staticClass:"project-description-text"},[t._v("설명 페이지입니다")])]),a("div",{staticClass:"col project-mapper"},[a("img",{staticClass:"project-sub-image",attrs:{src:"img/taco4.png"}}),a("p",{staticClass:"project-description-text"},[t._v("주문한 이력을 보여주는 페이지입니다")])])])])]),a("slide",{staticClass:"slide-page"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 project-mapper"},[a("p",{staticClass:"project-subject-mapper"},[a("span",{staticClass:"project-subject-name"},[t._v("트렐로와 유사한 작업 관리 ")]),a("span",{staticClass:"project-subject-year"},[t._v("2020.11")]),a("span",{staticClass:"project-description-text text-left"},[a("a",{staticStyle:{"font-size":"2rem",color:"black","margin-left":"5%"},attrs:{href:"https://github.com/inwoox/inwoox.github.io"}},[a("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1)])]),a("div",{staticClass:"col"},[a("div",{staticClass:"project-description-mapper"},[a("p",{staticClass:"project-description-text text-left"},[a("strong",[t._v("제작 기간")]),t._v(" 2020.11.23 ~ 2020.12.25 ")]),a("p",{staticClass:"project-description-text text-left"},[a("strong",[t._v("요약")]),t._v(" 트렐로와 비슷한 작업 관리 서비스를 만들어보았습니다."),a("br"),t._v(" Spring-boot와 Vuejs를 통해 만들었으며, 데이터 퍼시스턴스로 Hinernate 사용"),a("br"),t._v(" Maven의 플러그인을 이용하여 프론트와 백엔드를 한번에 빌드하도록 구성,"),a("br"),t._v(" Spring AOP를 통해 횡단 관심사 처리, 선언적 트랜잭션 관리 "),a("br"),t._v(" 백엔드는 헥사고날 아키텍처, 같은 도메인에 속하는 클래스를 같은 패키지에 위치"),a("br"),t._v(" JWT를 통해 클라이언트 인증을 구현하였습니다. ")]),a("p",{staticClass:"project-description-text text-left"},[a("strong",[t._v("경험 / 기술")]),a("br"),t._v("Spring JDBC / Spring MVC"),a("br"),t._v(" 프론트, 백엔드 데이터 검증 "),a("br"),t._v(" 선언적 트랜잭션 관리"),a("br"),t._v(" API (Controller) 설계 (입력 값, 유효성 검증 규칙, 출력, 상태 코드, 명명 규칙)"),a("br"),t._v(" 헥사고날 아키텍처를 채택한 백엔드 아키텍처 구현"),a("br"),t._v(" Spring Security의 필터를 커스터마이징하여 API 앞에서 요청 단위 인증"),a("br"),t._v(" Spring Security, JWT를 통한 사용자 인증 처리"),a("br"),t._v(" Spring AOP를 통해, 메서드 단위의 권한 부여 (횡단 관심사 처리)"),a("br"),t._v(" Java EE Mail API를 이용한 메일 발송 구현"),a("br")])])])]),a("div",{staticClass:"col-md-6 project-mapper"},[a("img",{staticClass:"project-image",attrs:{src:"img/task.png"}})]),a("div",{staticClass:"row"},[a("div",{staticClass:"col project-mapper"},[a("img",{staticClass:"project-sub-image",attrs:{src:"img/task1.png"}}),a("p",{staticClass:"project-description-text"},[t._v("이것은 거시기입니다")])]),a("div",{staticClass:"col project-mapper"},[a("img",{staticClass:"project-sub-image",attrs:{src:"img/task2.png"}}),a("p",{staticClass:"project-description-text"},[t._v("이것은 거시기입니다")])]),a("div",{staticClass:"col project-mapper"},[a("img",{staticClass:"project-sub-image",attrs:{src:"img/task3.png"}}),a("p",{staticClass:"project-description-text"},[t._v("이것은 거시기입니다")])]),a("div",{staticClass:"col project-mapper"},[a("img",{staticClass:"project-sub-image",attrs:{src:"img/task4.png"}}),a("p",{staticClass:"project-description-text"},[t._v("이것은 거시기입니다")])])])])])],1)],1),a("section",{staticClass:"container",attrs:{id:"contact"}},[a("div",[a("br"),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"col"},[a("div",{staticClass:"contact-mapper"},[a("div",{staticClass:"text-left ml-4"},[a("h1",{staticClass:"contact-name"},[t._v("INFO")]),a("br"),a("label",{staticClass:"contact-info-email"},[t._v("inwoox@naver.com")]),a("br"),a("span",[a("a",{staticClass:"contact-simbol",attrs:{href:"https://www.youtube.com/%EC%84%B8%EC%83%81%EC%9D%98%EB%AA%A8%EB%93%A0%EC%BD%94%EB%94%A9"}},[a("font-awesome-icon",{attrs:{icon:["fab","youtube"]}})],1)]),a("span",[a("a",{staticClass:"ml-3 contact-simbol",attrs:{href:"https://inwoox.tistory.com/"}},[a("font-awesome-icon",{attrs:{icon:["fas","blog"]}})],1)]),a("span",[a("a",{staticClass:"ml-3 contact-simbol",attrs:{href:"https://github.com/inwoox"}},[a("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1)])])])]),a("br"),a("br"),a("br"),t._m(8)]),t._m(9)])])])])])])},m=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col"},[a("br"),a("br"),a("img",{staticClass:"profile-image",attrs:{src:"/img/profile1.jpg"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("br"),a("h2",{staticClass:"skill-subject"},[t._v("알고 있는 것과 경험, 그리고 기술 ")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col"},[a("div",{staticClass:"career-box text-left"},[a("h1",{staticClass:"career-year"},[t._v("2012")]),a("p",{staticClass:"career-company"},[a("span",{staticClass:"career-company-name"},[t._v("KITRI ")]),a("span",{staticClass:"career-company-year"},[t._v("2012.02 - 2012.07")])]),a("p",{staticClass:"career-company-text"},[t._v(" 한국정보기술연구원에서 침해대응전문가 2기로, 정보보안 교육을 받았습니다."),a("br"),t._v(" 환경을 구축하고, 다양한 침해대응, 모의해킹 기법에 대하여 배웠으며, "),a("br"),t._v(" 여러 운영체제와 툴을 접해보는 시간이었습니다."),a("br"),t._v(" 조별 PT를 위해 세시간동안 집에 걸어가면서, 발표를 연습하던 기억이 납니다."),a("br"),t._v(" 처음 접하는 내용이 대부분이었기 때문에, 따라가기 위해서 최선을 다하면서 "),a("br"),t._v(" 찾아서 공부를 하기위해, 많은 관련 자격증에 도전하였습니다. ")])]),a("div",{staticClass:"career-box text-left"},[a("h1",{staticClass:"career-year"},[t._v("2013")]),a("p",{staticClass:"career-company"},[a("span",{staticClass:"career-company-name"},[t._v("TSGM ")]),a("span",{staticClass:"career-company-year"},[t._v("2013.02 - 2014.04")])]),a("p",{staticClass:"career-company-text"},[t._v(" TSGM이라는 회사에, 처음으로 보안 업계에 솔루션 엔지니어로 입사하였습니다."),a("br"),t._v(" 주로 시만텍의 데이터 유출 방지 솔루션 (DLP), 안티바이러스 등의"),a("br"),t._v(" 솔루션 및 네트워크 장비 기술지원 업무를 맡았습니다. "),a("br"),t._v(" 여러 아르바이트 경험이 있었으나, 여러 고객사를 돌아다니고, "),a("br"),t._v(" 출장을 다니면서 또 다른 사회를 배우는 계기가 되었습니다."),a("br"),t._v(" 이 회사를 통해 기본적인 IT 소양을 갖출 수 있었습니다. ")])]),a("div",{staticClass:"career-box text-left"},[a("h1",{staticClass:"career-year"},[t._v("2014")]),a("p",{staticClass:"career-company"},[a("span",{staticClass:"career-company-name"},[t._v("싸이버원 ")]),a("span",{staticClass:"career-company-year"},[t._v("2014.07 - 2019.01")])]),a("p",{staticClass:"career-company-text"},[t._v(" 보안관제 전문업체에서 침해사고 대응 및 보안 관제 업무를 맡았습니다."),a("br"),t._v(" 보안 정책을 수립하고, 정책에 기반하여 보안과 가용성 사이에서 적절한 전략으로"),a("br"),t._v(" 보안 장비를 운영하여 침해에 대응하거나 탐지하며, 서비스 가용성 유지를 위한"),a("br"),t._v(" 가용성 체크 및 로깅 관련 업무를 하였습니다. 그래서 자연스럽게 그에 필요한 "),a("br"),t._v(" 네트워크나 운영체제, 다양한 보안 장비 등에 대해서 이해하게 되었습니다. "),a("br")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"career-box text-left"},[a("h1",{staticClass:"career-year"},[t._v("2019")]),a("p",{staticClass:"career-company"},[a("span",{staticClass:"career-company-name"},[t._v("캐터스이노베이션 ")]),a("span",{staticClass:"career-company-year"},[t._v("2019.02 - 2020.09")])]),a("p",{staticClass:"career-company-text"},[t._v(" 전 회사에서 업무를 수행하면서, 간단하고 반복적인 프로세스들에 대하여 "),a("br"),t._v(" 코딩을 통해 자동화하는 방법에 대해 많이 고민해오면서, Python이나 "),a("br"),t._v(" C#과 같은 언어를 공부하게 되었으며, 그러던 중에 더 큰 흥미가 생기고, "),a("br"),t._v(" 개발자로 이직을 하게 되었습니다. C#으로 관리용 데스크톱 프로그램을 제작 "),a("br"),t._v(" 그리고 Vuejs를 통한 프론트 웹페이지 구축 및 유지보수 업무를 하던 중에"),a("br"),t._v(" 코로나로 인해 회사에서 사업을 접게 되어 그만두게 되었습니다. ")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",{staticClass:"career-company-text"},[t._v(" 여러가지 개발 주제를 다루는 기술 블로그를 운영하고 있습니다."),a("br"),t._v(" 제가 공부하고 경험해본 것들을 정리하여 기술하고 있습니다."),a("br")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",{staticClass:"career-company-text"},[t._v(" C#이나, Vuejs, Python, Git 등 다양한 주제에 대하여 영상을 업로드하고 있습니다."),a("br"),t._v(" 이후로는 자바와 자바스크립트 등 웹개발 관련 컨텐츠에 주력할 계획입니다."),a("br"),t._v(" 컨텐츠를 만들면서 저도 많이 배우고, 구독자 분들과의 소통을 통해"),a("br"),t._v(" 매우 즐겁게 활동하고 있습니다. 지금은 약 1000명이 조금 넘는 정도로 미약하지만"),a("br"),t._v(" 언젠가는 코딩? 하면 먼저 생각나는 채널이 될 수 있도록 열심히 노력하고 있습니다. ")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",{staticClass:"career-company-text"},[t._v(" Class101이라는 온라인 클래스에 C# 크롤링 강좌를 개설하여, 운영 중에 있습니다."),a("br"),t._v(" 2개월의 시간에 걸쳐 35강 정도의 강좌를 제작하고, 2021년 1월에 런칭하였습니다."),a("br"),t._v(" Youtube를 보고 Class101의 MD분에게 제의가 들어와, 강좌를 제작하게 되었는데"),a("br"),t._v(" 지금까지 했던 노력들이 어느정도는 결실을 얻은거 같아 뿌듯했습니다. ")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col career-line"},[a("div",{staticClass:"career-box text-left"},[a("h1",{staticClass:"career-year"},[t._v("License")]),a("p",{staticClass:"career-license"},[a("span",{staticClass:"career-license-name"},[t._v("윤리적 해커 (CEH) ")]),a("span",{staticClass:"career-license-year"},[t._v("2012.07")])]),a("p",{staticClass:"career-license"},[a("span",{staticClass:"career-license-name"},[t._v("리눅스마스터 2급 ")]),a("span",{staticClass:"career-license-year"},[t._v("2012.09")])]),a("p",{staticClass:"career-license"},[a("span",{staticClass:"career-license-name"},[t._v("사무자동화산업기사 ")]),a("span",{staticClass:"career-license-year"},[t._v("2012.12")])]),a("p",{staticClass:"career-license"},[a("span",{staticClass:"career-license-name"},[t._v("네트워크관리사 2급 ")]),a("span",{staticClass:"career-license-year"},[t._v("2012.12")])]),a("p",{staticClass:"career-license"},[a("span",{staticClass:"career-license-name"},[t._v("정보보안산업기사 ")]),a("span",{staticClass:"career-license-year"},[t._v("2014.05")])]),a("p",{staticClass:"career-license"},[a("span",{staticClass:"career-license-name"},[t._v("정보처리기사 ")]),a("span",{staticClass:"career-license-year"},[t._v("2014.08")])]),a("p",{staticClass:"career-license"},[a("span",{staticClass:"career-license-name"},[t._v("전자계산기조직응용기사 ")]),a("span",{staticClass:"career-license-year"},[t._v("2014.11")])]),a("p",{staticClass:"career-license"},[a("span",{staticClass:"career-license-name"},[t._v("ISO27001 인증심사원 ")]),a("span",{staticClass:"career-license-year"},[t._v("2015.02")])])]),a("br"),a("div",{staticClass:"career-box text-left"},[a("h1",{staticClass:"career-year"},[t._v("Education")]),a("p",{staticClass:"career-education"},[a("span",{staticClass:"career-education-name"},[t._v("Naver edwith 웹 프로그래밍(풀스택)")]),a("span",{staticClass:"career-license-year"},[t._v(" 2020.03")])]),a("p",{staticClass:"career-company-text"},[t._v(" 기본적인 웹페이지를 구성하기 위한 html부터 css를 다루는 방법, "),a("br"),t._v(" 자바스크립트에 대해서 공부하고, DB를 구축하고 운영해보았습니다."),a("br"),t._v(" JDBC와 API 설계에 대하여 공부하였습니다. ")]),a("p",{staticClass:"career-education"},[a("span",{staticClass:"career-education-name"},[t._v("Naver edwith 웹 백엔드")]),a("span",{staticClass:"career-license-year"},[t._v(" 2020.04")])]),a("p",{staticClass:"career-company-text"},[t._v(" 스프링 프레임워크를 다루어보면서, Spring JDBC, Spring MVC "),a("br"),t._v(" 그리고 Form Controller, Rest Controller를 "),a("br"),t._v(" 구현하는 방법에 대하여 공부하였습니다. ")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col"},[a("form",{staticClass:"contact-mapper"},[a("h1",{staticClass:"contact-name ml-4"},[t._v("CONTACT")]),a("br"),a("br"),a("input",{staticClass:"form-control contact-subject ml-4",attrs:{type:"text",name:"contact-name",placeholder:"성함"}}),a("br"),a("input",{staticClass:"form-control contact-email ml-4",attrs:{type:"email",name:"contact-email",placeholder:"회신 받으실 메일 주소"}}),a("br"),a("textarea",{staticClass:"form-control contact-text ml-4",attrs:{name:"contact-message",rows:"3",placeholder:"내용"}}),t._v(" "),a("br"),a("input",{staticClass:"btn btn-outline-success contact-send ml-4",attrs:{type:"button",name:"submit",value:"메일 발송"}}),a("br"),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-md-6"},[a("h1",{staticClass:"contact-message"},[t._v("방문해주셔서 감사합니다!"),a("br"),t._v("행복한 하루 되세요 ^^")]),a("img",{staticClass:"contact-image",attrs:{src:"/img/15.jpeg"}})])}],f=(a("ac1f"),a("1276"),a("0a63")),u=a.n(f),C=a("0f91"),b=a.n(C),_=a("1157"),d=a.n(_),h={data:function(){return{formshow:!1}},components:{Carousel:f["Carousel"],Slide:f["Slide"]},created:function(){d()(document).ready((function(){b.a.init("user_Y4qSpAzV7mOWsYRDXqUSA"),d()("input[name=submit]").click((function(){var t={name:d()("input[name=contact-name]").val(),email:d()("input[name=contact-email]").val(),message:d()("textarea[name=contact-message]").val()};b.a.send("inwoo","template_inwoo",t).then((function(t){console.log("SUCCESS!",t.status,t.text),d()("input[name=contact-name]").val(""),d()("input[name=contact-email]").val(""),d()("textarea[name=contact-message]").val(""),alert("곧 회신 드리겠습니다. 감사합니다!")}),(function(t){console.log("FAILED...",t)}))}));var t=d()(".nav-menu"),s=d()("a",t),a=function(t){history.pushState?history.pushState(null,null,t):location.hash=t};s.click((function(){d()("html").animate({scrollTop:d()(d()(this).attr("href")).offset().top-d()(".nav").height()},{duration:700,complete:a(d()(this).attr("href"))})}));var e=!1,c=0,i=d()(".typing-txt").text();if(i=i.split(""),0==e){e=!0;var r=setInterval(n,100)}function n(){c<i.length?(d()(".typing").append(i[c]),c++):clearInterval(r)}})),this.goPath("li1")},methods:{goPath:function(t){var s=this;setTimeout((function(){s.formshow=!0,d()(".nav-menu li a").removeClass("on"),d()(".nav-menu li a").removeClass("un-on"),d()("#"+t).addClass("on"),d()(".nav-menu li a").not(".nav-menu li a.on").addClass("un-on")}),100)}}},g=h,x=(a("1749"),Object(r["a"])(g,v,m,!1,null,"5a9c6117",null)),y=x.exports,j=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("Header"),a("body",{staticClass:"body"},[a("div",[a("transition",{attrs:{name:"fade"}},[t.formshow?a("p",{staticClass:"h4"},[a("strong",{staticClass:"h1 under"},[t._v(" 누구")]),a("br"),a("br"),t._v(" 늘 도전하는 개발자 "),a("strong",[t._v("황인우")]),t._v("입니다. "),a("font-awesome-icon",{attrs:{icon:["far","smile"]}}),a("br"),t._v(" 하루를 살더라도, 어제보다 더 나은 더 개발자가 되기를 소망하며,"),a("br"),t._v(" 공부한 내용들을 요약하여 정리하고, 그것을 적용해보는 것을 즐기고 있습니다."),a("br"),a("br"),a("br"),a("strong",{staticClass:"h1 under1"},[t._v("좋아하는 것")]),a("br"),a("br"),t._v(" Java와 C#, Javascript를 좋아하며, Vuejs와 SPRING을 자주 사용합니다."),a("br"),t._v(" 컨테이너 기술과 클라우드에 관심이 많아, 도커나 AWS를 잘 다루기 위해"),a("br"),t._v(" 애쓰고 있습니다."),a("br"),t._v(" 또한 마이크로 아키텍처와 지속적 배포에 관심이 많습니다."),a("br"),a("br"),a("br"),a("strong",{staticClass:"h1 under2"},[t._v("앞으로")]),a("br"),a("br"),t._v(" 프론트엔드부터 백엔드 그리고 데브옵스에 이르기까지, 개발, 배포, 운영까지 가능한"),a("br"),t._v(" 풀스택 개발자를 지향합니다. ")],1):t._e()])],1)]),a("Footer")],1)])},w=[],k=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("ul",{staticClass:"nav"},[a("li",{staticClass:"nav-item to-right-underline nav-item-1",attrs:{id:"home"},on:{click:function(s){return t.goPath(s)}}},[a("font-awesome-icon",{attrs:{icon:["fas","home"]}}),t._v(" Home")],1),a("li",{staticClass:"nav-item to-right-underline nav-item-1",attrs:{id:"profile"},on:{click:function(s){return t.goPath(s)}}},[a("font-awesome-icon",{attrs:{icon:["far","address-card"]}}),t._v(" Profile")],1),a("li",{staticClass:"nav-item to-right-underline",attrs:{id:"skill"},on:{click:function(s){return t.goPath(s)}}},[a("font-awesome-icon",{attrs:{icon:["fab","connectdevelop"]}}),t._v(" Skill")],1),a("li",{staticClass:"nav-item to-right-underline",attrs:{id:"project"},on:{click:function(s){return t.goPath(s)}}},[a("font-awesome-icon",{attrs:{icon:["fas","project-diagram"]}}),t._v(" Project")],1),a("li",{staticClass:"nav-item to-right-underline"},[a("font-awesome-icon",{attrs:{icon:["fab","github"]}}),t._v(" Github")],1)])])])},S=[],E={data:function(){return{idx:0}},methods:{goPath:function(t){var s=t.currentTarget.id;"home"==s&&this.$router.push({name:"Home"}),"profile"==s&&this.$router.push({name:"Profile"}),"skill"==s&&this.$router.push({name:"Skill"}),"project"==s&&this.$router.push({name:"Project"}),setTimeout((function(){d()("#"+s).addClass("on"),d()(".nav li").not(".nav li.on").addClass("un-on")}),100)}}},P=E,A=(a("40f8"),Object(r["a"])(P,k,S,!1,null,"70c0c951",null)),O=A.exports,T=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container"},[a("div",[a("footer",{staticClass:"footer"},[a("span",{staticClass:"copyright"},[t._v("©2021 INWOO")]),a("ul",{staticClass:"footer-links list-inline float-right"},[a("li",{staticClass:"list-inline-item spread-underline"},[a("font-awesome-icon",{attrs:{icon:["fab","youtube"]}}),a("a",{attrs:{href:"#"}},[t._v(" Youtube")])],1),a("li",{staticClass:"list-inline-item spread-underline"},[a("font-awesome-icon",{attrs:{icon:["fab","pied-piper"]}}),a("a",{attrs:{href:"#"}},[t._v(" Blog")])],1),a("li",{staticClass:"list-inline-item spread-underline"},[a("font-awesome-icon",{attrs:{icon:["fab","github"]}}),a("a",{attrs:{href:"#"}},[t._v(" Github")])],1)])])])])},M=[],B={},$=B,I=(a("7c04"),Object(r["a"])($,T,M,!1,null,"60169a64",null)),J=I.exports,D={data:function(){return{formshow:!1}},components:{Header:O,Footer:J},created:function(){var t=this;setTimeout((function(){t.formshow=!0}),200)}},H=D,G=(a("3dc0"),Object(r["a"])(H,j,w,!1,null,"4484dbcc",null)),R=G.exports,F=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("Header"),t._m(0),a("Footer")],1)])},L=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("body",[a("div",{staticClass:"card bg-dark text-white card1"},[a("img",{staticClass:"card-img",attrs:{src:"img/taco.png",alt:"..."}}),a("div",{staticClass:"card-img-overlay"})])])}],V={components:{Header:O,Footer:J}},U=V,q=(a("8042"),Object(r["a"])(U,F,L,!1,null,"6490c339",null)),N=q.exports,W=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("Header"),a("Footer")],1)])},Y=[],z={components:{Header:O,Footer:J}},Q=z,K=Object(r["a"])(Q,W,Y,!1,null,"56437e4f",null),X=K.exports;e["default"].use(p["a"]);var Z=[{path:"/",name:"Home",component:y},{path:"/",name:"Profile",component:R},{path:"/",name:"Project",component:N},{path:"/",name:"Skill",component:X}],tt=new p["a"]({mode:"history",base:"/",routes:Z}),st=tt,at=a("2f62");e["default"].use(at["a"]);var et=new at["a"].Store({state:{},mutations:{},actions:{},modules:{}}),ct=a("5f5b"),it=(a("ab8b"),a("2dd8"),a("ecee")),rt=a("ad3d"),nt=a("c074"),ot=a("b702"),lt=a("f2d1");it["c"].add(nt["e"],nt["g"],nt["i"],ot["d"],lt["d"],ot["a"],lt["c"],lt["b"],lt["a"],nt["f"],nt["d"],ot["c"],ot["b"],nt["c"],nt["h"],nt["j"],nt["a"],nt["b"]),e["default"].component("font-awesome-icon",rt["a"]),e["default"].use(u.a),e["default"].use(ct["a"]),e["default"].config.productionTip=!1,new e["default"]({router:st,store:et,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,s,a){"use strict";a("9c0c")},"7c04":function(t,s,a){"use strict";a("92fc")},8042:function(t,s,a){"use strict";a("c106")},9083:function(t,s,a){},9177:function(t,s,a){},"92fc":function(t,s,a){},"9c0c":function(t,s,a){},c106:function(t,s,a){}});
//# sourceMappingURL=app.a156ec07.js.map