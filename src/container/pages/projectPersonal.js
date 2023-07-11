import React, {useEffect} from 'react';
import Projectlist from "../../components/projectlist";
import my from "../../static/img/my-main.png";
import todo from "../../static/img/todo-main.png";
import wooneung from "../../static/img/wooneung-main.png";
import {useDispatch} from "react-redux";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AdsClickIcon from "@mui/icons-material/AdsClick";

const ProjectPersonal = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type : 'project', nav : 'personal'})
    }, [])

    return (
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
                    tag="#react-router-dom #Mui #Redux #Scroll"
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
            <div className="nextPage">
                <ExpandMoreIcon />
            </div>
            <div className="clickMe">
                <AdsClickIcon />
            </div>
        </div>

    );
};

export default ProjectPersonal;