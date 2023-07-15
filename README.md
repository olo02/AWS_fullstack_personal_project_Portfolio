# Portfolio Site - React

<div align="center">
<img width="500" alt="image" src="https://github.com/olo02/AWS_fullstack_personal_project_Portfolio/assets/121186383/cc68fe91-24fe-4bcb-abb5-e2077508119e">

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Folo02%2FAWS_fullstack_personal_project_Portfolio&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

[사이트 바로가기](https://my.olooe.city)

</div>

---

## 프로젝트 소개

> **Portfolio Site** <br> > **개발기간: 2022.07.07 ~ ing** <br>
> Demo Site : https://my.olooe.city

<br>

React를 사용하여 만든 포트폴리오 사이트입니다. 기존 템플릿을 사용한 포트폴리오 사이트와 다른 형태의 포트폴리오를 만들고자 하였고, React Router와 Redux의 기본적인 사용을 숙지하는 것을 목표로 구현하였습니다. 더불어 스크롤링을 통한 부드러운 페이지의 이동과 UX 친화적인 화면을 제작하고자 하였습니다.

<br>

---

## 시작 가이드

### Requirements

- node.js with npm
- react-router-dom
- redux
- mui

### Installation

```bash
$ git clone https://github.com/olo02/AWS_fullstack_personal_project_Portfolio.git
```

<br>

---

## 설계

### Stacks

- #### Environment

    <img src="https://img.shields.io/badge/intellijidea-000000?style=for-the-badge&logo=intellij Idea&logoColor=white">

- #### Language

  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">

- #### Framework & Library

    <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
    <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"> 
    <img src="https://img.shields.io/badge/react router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">

- #### Infrastructure

    <img src="https://img.shields.io/badge/Amazon EC2-FF9900?style=for-the-badge&logo=Amazon EC2&logoColor=white">
    <img src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=Nginx&logoColor=white">
    <img src="https://img.shields.io/badge/apache tomcat-F8DC75?style=for-the-badge&logo=apachetomcat&logoColor=white">

<br>

---

## 화면 구성

<div align="center">

|                                                                   index 페이지                                                                   |                                                                   소개 페이지                                                                    |
| :----------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: |
| <img width="500" src="https://github.com/olo02/AWS_fullstack_personal_project_Portfolio/assets/121186383/7cebb40b-0480-4803-a505-ae38b3fef671"/> | <img width="500" src="https://github.com/olo02/AWS_fullstack_personal_project_Portfolio/assets/121186383/f815e8ee-83af-4473-9a85-f9f73311f78e"/> |
|                                                                 기술 스택 페이지                                                                 |                                                                 프로젝트 페이지                                                                  |
| <img width="500" src="https://github.com/olo02/AWS_fullstack_personal_project_Portfolio/assets/121186383/cc5d3613-5822-4ae4-9eaf-93abecbf1886"/> | <img width="500" src="https://github.com/olo02/AWS_fullstack_personal_project_Portfolio/assets/121186383/5be7778c-ae31-449f-ae47-8c822dfef97e"/> |
|                                                               프로젝트 상세 페이지                                                               |                                                                  contact 페이지                                                                  |
|                                                                                                                                                  | <img width="500" src="https://github.com/olo02/AWS_fullstack_personal_project_Portfolio/assets/121186383/32c98d2f-a6f1-4d43-bc80-dfa5a44df8cc"/> |

</div>

---

## 아키텍쳐

### 디렉토리 구조

```bash
├── public
├── src
│   ├── components : 자주 사용하는 요소 컴포넌트 분리
│   ├── container/pages : 모든 페이지
│   ├── layout : header 설정
│   ├── redux : redux store
│   ├── routes : router 설정
│   ├── static : scss 및 img 파일
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .env : 서버 포트 번호 설정
├── .gitignore
├── README.md
├── package-lock.json
└── package.json
```

---

## References

- README Template : [parkjiye](https://velog.io/@luna7182/%EB%B0%B1%EC%97%94%EB%93%9C-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-README-%EC%93%B0%EB%8A%94-%EB%B2%95)
- Hit : [hit](https://hits.seeyoufarm.com/)
