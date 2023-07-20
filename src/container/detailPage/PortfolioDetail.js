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

const PortfolioDetail = () => {

    const dispatch = useDispatch();
    const location = useLocation();

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
                    <h2>Portfolio Site - React</h2>
                    <img
                        style={{width:"500px", marginBottom:10, borderRadius:20}}
                        alt={''}
                        src={require('../../static/img/my-main.png')} />
                    <h3><a target="_blank" rel="noreferrer" href="https://github.com/olo02/AWS_fullstack_personal_project_Portfolio"><GitHub />Github Link</a></h3>
                    <h3><a target="_blank" rel="noreferrer" href="https://my.olooe.city"><LaunchIcon /> Demo Site Link</a></h3>
                </div>
                <div className="project-info-wrapper">
                    <h3><InfoIcon />프로젝트 소개</h3>
                    <p className="project-info-summary">포트폴리오 사이트 제작 프로젝트<br />개발기간 : 2022.07.07 ~ ing</p>
                    <p>PPT를 사용해 나를 소개하는 듯한 포트폴리오 사이트를 React를 사용하여 만든 프로젝트입니다.
                        <br />
                        <br />
                        <span>- 구현 목표</span>
                        <br />본 프로젝트는 기존 템플릿을 사용한 포트폴리오 사이트와 다른 형태의 포트폴리오를 만들고자 하였고,
                        <br />React Router와 Redux의 기본적인 사용을 숙지하는 것을 목표로 구현하였습니다.
                        <br />더불어 스크롤링을 통한 부드러운 페이지의 이동과 UX 친화적인 화면을 제작하고자 하였습니다.
                    </p>
                </div>
                <div className="project-infra-wrapper">
                    <h3><BuildIcon />개발 도구 및 환경</h3>
                    <div className="project-infra-list">
                        <img alt='' src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
                        <img alt='' src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
                        <img alt='' src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
                        <br />
                        <img alt='' src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
                        <img alt='' src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white" />
                        <img alt='' src="https://img.shields.io/badge/react router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" />
                        <img alt='' src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white" />
                        <img alt='' src="https://img.shields.io/badge/mui-007FFF?style=for-the-badge&logo=mui&logoColor=white" />
                        <br />
                        <img alt='' src="https://img.shields.io/badge/Amazon EC2-FF9900?style=for-the-badge&logo=Amazon EC2&logoColor=white" />
                        <img alt='' src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=Nginx&logoColor=white" />
                    </div>
                </div>
            </div>
        </div>
    );

};

export default React.memo(PortfolioDetail);