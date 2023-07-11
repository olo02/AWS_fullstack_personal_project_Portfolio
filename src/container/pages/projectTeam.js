import React, {useEffect} from 'react';
import Projectlist from "../../components/projectlist";
import jubging from "../../static/img/jubging-main.png";
import damso from "../../static/img/damso-main.png";
import bookstore from "../../static/img/bookstore-main.png";
import {useDispatch} from "react-redux";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AdsClickIcon from '@mui/icons-material/AdsClick';

const ProjectTeam = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type : 'project', nav : 'team'})
    }, [])

    return (
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
            <div className="nextPage">
                <ExpandMoreIcon />
            </div>
            <div className="clickMe">
                <AdsClickIcon />
            </div>
        </div>
    );
};

export default React.memo(ProjectTeam);