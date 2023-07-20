import React from 'react';
import Projectlist from "./projectlist";
import jubging from "../static/img/jubging-main.png";
import damso from "../static/img/damso-main.png";
import bookstore from "../static/img/bookstore-main.png";
import my from "../static/img/my-main.png";
import todo from "../static/img/todo-main.png";
import wooneung from "../static/img/wooneung-main.png";

const SelectedProject = (props) => {

    const projectDetail = props.select;

    return (
        <>
            {projectDetail && projectDetail === 'jubging' ? (
                <Projectlist
                    name="jubging"
                    title="줍깅 (23.05.24 ~ 23.07.03)"
                    img={jubging}
                    page="https://jubging.olooe.city"
                    git="https://github.com/orgs/plogging-project/repositories"
                    skill="SpringBoot + React"
                    titleinfo="플로깅 웹 애플리케이션"
                    tag="#GeoLocation #Tmap #실시간 위치 #경유지 #시큐리티 #소셜로그인 #Spring Data JPA #Parallax #무한스크롤"
                />
            ) : projectDetail === 'damso' ? (
                <Projectlist
                    name="damso"
                    title="담소 (23.03.24 ~ 23.04.25)"
                    img={damso}
                    page="http://damso.olooe.city"
                    git="https://github.com/olo02/AWS_fullstack_semi_project_SNS"
                    skill="Spring + JSP"
                    titleinfo="인스타그램 클론 웹 애플리케이션"
                    tag="#MVC 패턴 #Rest API #WebSocket #MyBatis
                         #SNS #알림 #채팅 #EL #JSTL #무한스크롤"
                />
            ) : projectDetail === 'jaladin' ? (
                <Projectlist
                    name="jaladin"
                    title="잘라딘 (23.02.06 ~ 23.02.15)"
                    img={bookstore}
                    git="https://github.com/olo02/AWS_fullstack_mini_project_BookStore"
                    skill="Java"
                    titleinfo="콘솔형 애플리케이션 : 온라인 서점"
                    tag="#싱글톤 패턴 #Kakao-REST API #더미데이터"
                />
            ) : projectDetail === 'portfolio' ? (
                <Projectlist
                    name='portfolio'
                    title="포트폴리오 (23.07.07 ~ ing)"
                    img={my}
                    page="https://my.olooe.city"
                    git="https://github.com/olo02/SpringBoot_Practice_Todo"
                    skill="React"
                    titleinfo="포트폴리오 사이트"
                    tag="#react-router-dom #Mui #Redux #Scroll"
                />
            ) : projectDetail === 'todo' ? (
                <Projectlist
                    name='todo'
                    title="ToDo (23.05.10 ~ 23.05.24)"
                    img={todo}
                    page="https://todo.olooe.city"
                    git="https://github.com/olo02/AWS_fullstack_personal_project_Todo_Backend"
                    skill="SpringBoot + React"
                    titleinfo="나만의 투두리스트 앱"
                    tag="#소셜로그인 #Google #Naver #Kakao #Git #JWT #HS512"
                />
            ) : projectDetail === 'wooneung' ? (
                <Projectlist
                    name='wooneung'
                    title="운응시청 (23.02.20 ~ 23.03.21)"
                    img={wooneung}
                    page="https://wooneung.olooe.city"
                    git="https://github.com/olo02/AWS_fullstack_personal_project_CityHall"
                    skill="Servlet + JSP"
                    titleinfo="가상 시청 웹 사이트"
                    tag="#회원제 게시판 #검색 #비밀글 #HS512"
                />
            ) : ''}
        </>
    )};

export default React.memo(SelectedProject);