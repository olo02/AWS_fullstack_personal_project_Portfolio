import React, {useCallback, useEffect, useRef, useState} from 'react';
import ScrollMagic from 'scrollmagic';
import "../../static/css/indexStyle.scss";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import LaunchIcon from "@mui/icons-material/Launch";
import {GitHub} from "@mui/icons-material";
import Projectlist from "../../components/projectlist";
import wooneung from '../../static/img/wooneung-main.png';
import todo from '../../static/img/todo-main.png';
import jubging from '../../static/img/jubging-main.png';
import bookstore from '../../static/img/bookstore-main.png';
import damso from '../../static/img/damso-main.png';
import my from '../../static/img/my-main.png';
const Index = () => {

    const pageHeight = window.innerHeight;
    const [current, setCurrent] = useState(document.scrollingElement.scrollTop)


    useEffect(() => {
        console.log(pageHeight)
        console.log(current)
        setCurrent(document.scrollingElement.scrollTop)
    }, [])


    const toPage = () => {
        if(document.scrollingElement.scrollTop < Math.floor(pageHeight/document.scrollingElement.scrollTop)) {

        } else {

        }

    }

    const scrollToPage = () => {

    }

    return (
        <div className="index-container">
            <div className="index-wrapper-title panel">
                <div className="title-container">
                    <div className="title-name-wrapper">
                        <div className="title-name">
                            <h1><span>개발자</span> 천은경</h1>
                            <h3>Developer Chun Eungyeong</h3>
                        </div>
                    </div>
                    <div className="title-content-wrapper">
                        <div className="title-content">
                            <h3>분석하고 몰입하는 것을 좋아합니다</h3>
                            <h3>우물 안에서 안주하는 제한된 사고를 지양합니다</h3>
                        </div>
                        <div className="title-contact">
                            <h3>eungyeong86@gmail.com</h3>
                            <h4>Github : <a href="https://github.com/olo02" target="_blank" rel="noreferrer">github.com/olo02</a></h4>
                            <h4>Blog : <a href="https://blog.olooe.city" target="_blank" rel="noreferrer">blog.olooe.city</a> </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="index-wrapper-introduce panel">
                <h1>Introduce,</h1>
                <div className="introduce-container">
                    <div className="introduce-picture">
                        <img src={require("../../static/img/info-image.jpg")} alt=""/>
                    </div>
                    <div className="introduce-text-wrapper">
                        <h2>우물 밖의 개발자, 천은경입니다.</h2>
                        <h4><ArrowRightIcon /> 풀스택 개발자를 희망하고 있습니다.</h4>
                        <h4><ArrowRightIcon /> 분석하고 몰입하는 것을 좋아합니다.</h4>
                        <h4><ArrowRightIcon /> 우물 안에서 안주하는 제한된 사고를 지양합니다.</h4>
                        <h4><ArrowRightIcon /> 성장의 중요성을 잘 알고있기에, 앞으로 나아가야 할 방향에 대해 항상 고민하며 실천하고 있습니다.</h4>
                        <div className="education">
                            <h3>Education</h3>
                            <li>2023.01 ~ 2023.07 <br /> <span>AWS 클라우드 기반 자바&스프링&리액트 풀스택 개발자 양성 과정, 더조은 컴퓨터 아카데미</span></li>
                            <li>2015.03 ~ 2022.02 <br /> <span>경북대학교 정치외교학 학사</span></li>
                        </div>
                    </div>
                </div>
            </div>
            <div className="index-wrapper-skills panel">
                <h1>Skills,</h1>
                <div className="skill-wrapper">
                    <h3>Language</h3>
                    Java JavaScript Html/CSS
                    <h3>Front-end</h3>
                    JQuery React
                    <h3>Back-end</h3>
                    Spring SpringBoot Spring-Security Mybatis Spring-JPA
                    <h3>Database</h3>
                    MariaDB MySQL Oracle
                    <h3>etc</h3>
                    GitHub
                    SVN
                    AWS EC2 - Windows/Linux
                    NGINX
                    Tomcat
                </div>
                <div className="skills-box-1"></div>
                <div className="skills-box-2"></div>
            </div>
            <div className="index-wrapper-project-team panel">
                <h1>Team Project,</h1>
                <div className="project-container">
                    <Projectlist
                        title="줍깅 (23.05.24 ~ 23.07.03)"
                        img={jubging}
                        page="https://jubging.olooe.city"
                        git="https://github.com/orgs/plogging-project/repositories"
                        skill="SpringBoot + React"
                        titleinfo="플로깅 웹 애플리케이션"
                        tag="#GeoLocation #Tmap #실시간 위치 #경유지 #보행자 경로 #시큐리티 #소셜로그인 #Spring Data JPA #JPQL"
                    />
                    <Projectlist
                        title="담소 (23.03.24 ~ 23.04.25)"
                        img={damso}
                        page="https://damso.olooe.city"
                        git="https://github.com/olo02/AWS_fullstack_semi_project_SNS"
                        skill="Spring + JSP"
                        titleinfo="인스타그램 클론 웹 애플리케이션"
                        tag="#MVC 패턴 #Rest API #WebSocket #MyBatis
                         #SNS #알림 #채팅 #EL #JSTL"
                    />
                    <Projectlist
                        title="잘라딘 (23.02.06 ~ 23.02.15)"
                        img={bookstore}
                        git="https://github.com/olo02/AWS_fullstack_mini_project_BookStore"
                        skill="Java"
                        titleinfo="콘솔형 애플리케이션 : 온라인 서점"
                        tag="#싱글톤 패턴 #Kakao-REST API #더미데이터"
                    />
                </div>
            </div>
            <div className="index-wrapper-project-me panel">
                <h1>Personal Project,</h1>
                <div className="project-container">
                    <Projectlist
                        title="Portfolio (23.07.07 ~ ing)"
                        img={my}
                        page="https://my.olooe.city"
                        git="https://github.com/olo02/SpringBoot_Practice_Todo"
                        skill="React"
                        titleinfo="포트폴리오 사이트"
                        tag="#react-router-dom #Mui #Redux"
                    />
                    <Projectlist
                        title="ToDo (23.05.10 ~ 23.05.24)"
                        img={todo}
                        page="https://todo.olooe.city"
                        git="https://github.com/olo02/AWS_fullstack_personal_project_Todo_Backend"
                        skill="SpringBoot + React"
                        titleinfo="나만의 투두리스트 앱"
                        tag="#소셜로그인 #Google #Naver #Kakao #Git #JWT #HS512"
                    />
                    <Projectlist
                        title="운응시청 (23.02.20 ~ 23.03.21)"
                        img={wooneung}
                        page="https://wooneung.olooe.city"
                        git="https://github.com/olo02/AWS_fullstack_personal_project_CityHall"
                        skill="Servlet + JSP"
                        titleinfo="가상 시청 웹 사이트"
                        tag="#회원제 게시판 #검색 #비밀글 #HS512"
                    />
                </div>
            </div>
            <div className="index-wrapper-contact panel">
                <h1>Thank you,</h1>
                <div>
                    <h3>Contact</h3>
                    <div>Email : eungyeong86@gmail.com</div>
                    <div>Github : <a href="https://github.com/olo02" target="_blank" rel="noreferrer">github.com/olo02</a></div>
                    <div>Blog : <a href="https://blog.olooe.city" target="_blank" rel="noreferrer">blog.olooe.city</a> </div>
                </div>
            </div>
        </div>
    );
};

export default Index;