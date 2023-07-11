import React from 'react';
import "../../static/css/detailPageStyle.scss";
import LaunchIcon from "@mui/icons-material/Launch";
import {GitHub} from "@mui/icons-material";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import CustomAccordion from "../../components/customAccordion";

const DetailProject = () => {

    const playVideo = (event) => {
        event.target.play();
    }
    const pauseVideo = (e) => {
        e.target.pause();
    }

    return (
        <div className="project-wrapper">
            <div className="jubging-wrapper">
                <div className="jubging">
                    <h2>Team Project - 줍깅 <span>2023.05.24 ~ 2023.07.03</span></h2>
                    <h4>실시간 나의 위치와 추천 보행자 산책 경로가 제공되는 플로깅 웹 애플리케이션</h4>
                    <div className="project-content-wrapper">
                        <div className="mainpage">
                            <video
                                onMouseEnter={(e) => playVideo(e)}
                                onMouseLeave={(e) => pauseVideo(e)}
                                muted={true}
                                loop={true}
                                src={process.env.PUBLIC_URL + "/video/jubging.mp4"} />
                            <img src="" alt="" />
                        </div>
                        <div className="project-content">
                            <div className="app-link">
                                <a href="https://jubging.olooe.city" target="_blank" rel="noreferrer"><LaunchIcon /></a>
                                <a href="https://github.com/orgs/plogging-project/repositories" target="_blank" rel="noreferrer"><GitHub /></a>
                                <h4><CheckOutlinedIcon />Spring Boot + React</h4>
                                <h4><CheckOutlinedIcon />Final Team Project</h4>
                            </div>
                            <div className="project-skills">
                                <h4>사용 API</h4>
                                <div className="skill-content">
                                    <CustomAccordion title="Geo Location" content="" />
                                    <CustomAccordion title="Tmap" content="" />
                                    <CustomAccordion title="생태문화길 코스 정보 - 공공데이터포털" content="" />
                                    <CustomAccordion title="Gmail" content="" />
                                    <CustomAccordion title="OAuth 2.0" content="" />
                                </div>
                                <h4>사용 기술</h4>
                                <div className="skill-content">
                                    <CustomAccordion title="Spring Boot" content="" />
                                    <CustomAccordion title="Spring Security" content="" />
                                    <CustomAccordion title="Spring Data JPA" content="" />
                                    <CustomAccordion title="React" content="" />
                                    <CustomAccordion title="AWS EC2 - Linux / NGINX / Apache Tomcat" content="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default React.memo(DetailProject);