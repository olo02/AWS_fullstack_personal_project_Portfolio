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

const WooneungDetail = () => {

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
                    <h2>회원제 게시판, 운응시청 사이트 - Java Servlet / JSP</h2>
                    <img
                        style={{width:"500px", marginBottom:10, borderRadius:20}}
                        alt=''
                        src={require('../../static/img/wooneung-main.png')} />
                    <h3><a target="_blank" rel="noreferrer" href="https://github.com/olo02/AWS_fullstack_personal_project_CityHall"><GitHub />Github Link</a></h3>
                    <h3><a target="_blank" rel="noreferrer" href="https://wooneung.olooe.city"><LaunchIcon /> Demo Site Link</a></h3>
                </div>
                <div className="project-info-wrapper">
                    <h3><InfoIcon />프로젝트 소개</h3>
                    <p className="project-info-summary">AWS 풀스택 개발자 양성과정 개인 프로젝트<br />회원제 게시판 제작<br />개발기간 : 2022.02.20 ~ 2022.03.21</p>
                    <p>풀스택 개발자 과정의 HTML/CSS 수업 중 개인 프로젝트로 작업을 시작하였습니다.<br />
                        이후 Java Servlet과 JSP를 학습하고 해당 사이트에 회원제 게시판 기능을 추가하였습니다.<br />
                        어떠한 형태의 사이트를 제작할 지 고민 끝에 가상의 도시 '운응시' 시청 사이트를 만들게 되었습니다.
                        <br />
                        <br />
                        <span>- 운응시란?</span>
                        <br />도시명은 제작자의 별명인 '응공'을 뒤집어 '운응'시로 작명하게 되었습니다 :D
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
                        <img alt='' src="https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" />
                        <img alt='' src="https://img.shields.io/badge/Java Servlet-FF7800?style=for-the-badge&logoColor=white" />
                        <img alt='' src="https://img.shields.io/badge/JSP-black?style=for-the-badge&logoColor=white" />
                        <img alt='' src="https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white" />
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

export default React.memo(WooneungDetail);