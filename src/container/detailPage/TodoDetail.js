import React, {useEffect, useRef} from 'react';
import "../../static/css/detailPageStyle.scss";
import {useDispatch} from "react-redux";
import {useLocation} from "react-router-dom";
import {GitHub} from "@mui/icons-material";
import LaunchIcon from "@mui/icons-material/Launch";
import InfoIcon from "@mui/icons-material/Info";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import BuildIcon from "@mui/icons-material/Build";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import EmailIcon from "@mui/icons-material/Email";
import {Swiper, SwiperSlide} from "swiper/react";

const TodoDetail = () => {

    const dispatch = useDispatch();
    const location = useLocation();

    const snsService = useRef(null);
    const friendService = useRef(null);
    const communityService = useRef(null);
    const adminService = useRef(null);
    const detailContainer = useRef(null);

    const selectedProject = location ? location.state.project : '';

    useEffect(() => {
        dispatch({type : 'project', nav : 'personal', select : selectedProject})
    }, [])

    const playVideo = (event) => {
        event.target.play();
    }
    const pauseVideo = (e) => {
        e.target.pause();
    }

    return (
        <div className="project-detail-wrapper"
             id={'project-detail-wrapper'}
             ref={detailContainer}
             style={{background:"#ebf4f5"}}
        >
            <div className="project-detail-container">
                <div className="project-title-img-wrapper">
                    <h2>Todo List Application - SpringBoot / React</h2>
                    <img
                        style={{width:"500px", marginBottom:10, borderRadius:20}}
                        alt={''}
                        src={require('../../static/img/todo-main.png')} />
                    <h3><a target="_blank" rel="noreferrer" href="https://github.com/olo02/AWS_fullstack_personal_project_Todo_Backend"><GitHub />Backend Github Link</a></h3>
                    <h3><a target="_blank" rel="noreferrer" href="https://github.com/olo02/AWS_fullstack_personal_project_Todo_Frontend"><GitHub />Frontend Github Link</a></h3>
                    <h3><a target="_blank" rel="noreferrer" href="https://todo.olooe.city"><LaunchIcon /> Demo Site Link</a></h3>
                </div>
                <div className="project-info-wrapper">
                    <h3><InfoIcon />프로젝트 소개</h3>
                    <p className="project-info-summary">To Do List Application<br />개발기간 : 2022.05.10 ~ 2022.05.24</p>
                    <p>교재 (React.js, 스프링 부트, AWS로 배우는 웹 개발 101 - 김다정)를 참고하여 어플리케이션을 제작하였습니다.<br />
                        다양한 소셜로그인을 제공하고 Secutiry 및 JWT를 적용하였습니다.<br />
                        나만의 Todo List를 만들고 관리할 수 있습니다.
                        <br />
                        <br />
                        <span>- 구현 목표</span>
                        <br />본 프로젝트는 SpringBoot의 사용 방식과 React와 같은 싱글 페이지 어플리케이션의 동작 방식을 익히고
                        <br />Oauth 2.0을 통한 소셜 로그인을 구현하는 것을 목표로 하여 프로젝트를 진행하였습니다.
                        <br />(Github / Google / Naver / Kakao)
                        <br />더불어 JWT를 사용한 로그인 유지 기능과 Spring Security를 통한 인증을 구현하는 것을 중점으로 구현하였습니다.
                    </p>
                </div>
                <div className="project-infra-wrapper">
                    <h3><BuildIcon />개발 도구 및 환경</h3>
                    <div className="project-infra-list">
                        <img alt='' src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white" />
                        <img alt='' src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
                        <img alt='' src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
                        <img alt='' src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
                        <br />
                        <img alt='' src="https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-badge&logo=Spring Boot&logoColor=white" />
                        <img alt='' src="https://img.shields.io/badge/Spring MVC-6DB33F?style=for-the-badge&logo=spring&logoColor=white" />
                        <img alt='' src="https://img.shields.io/badge/Spring Security-6DB33F?style=for-the-badge&logo=Spring Security&logoColor=white" />
                        <img alt='' src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
                        <img alt='' src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white" />
                        <img alt='' src="https://img.shields.io/badge/react router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" />
                        <br />
                        <img alt='' src="https://img.shields.io/badge/mariaDB-003545?style=for-the-badge&logo=mariaDB&logoColor=white" />
                        <img alt='' src="https://img.shields.io/badge/Amazon EC2-FF9900?style=for-the-badge&logo=Amazon EC2&logoColor=white" />
                        <img alt='' src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=Nginx&logoColor=white" />
                        <img alt='' src="https://img.shields.io/badge/apache tomcat-F8DC75?style=for-the-badge&logo=apachetomcat&logoColor=white" />
                    </div>
                </div>
            </div>
        </div>
    );

};

export default React.memo(TodoDetail);