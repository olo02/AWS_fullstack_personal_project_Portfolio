import React, {useEffect} from 'react';
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import {useDispatch} from "react-redux";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Intro = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type : 'intro'})
    }, [])

    return (
        <div className="index-wrapper-introduce panel">
            <h1>Introduce,</h1>
            <div className="introduce-container">
                <div className="introduce-picture">
                    <img src={require("../../static/img/info-image.jpg")} alt=""/>
                </div>
                <div className="introduce-text-wrapper">
                    <h2>우물 밖의 개발자, 천은경입니다.</h2>
                    <h4><ArrowRightIcon /> 웹 개발자를 희망하고 있습니다.</h4>
                    <h4><ArrowRightIcon /> 분석하고 몰입하는 것을 좋아합니다.</h4>
                    <h4><ArrowRightIcon /> 우물 안에서 안주하는 제한된 사고를 지양합니다.</h4>
                    <h4><ArrowRightIcon /> 성장의 중요성을 잘 알고있기에,<br /> 앞으로 나아가야 할 방향에 대해 항상 고민하며 실천하고 있습니다.</h4>
                    <div className="education">
                        <h3>Education</h3>
                        <li>2023.01 ~ 2023.07 <br /> <span>AWS 클라우드 기반 자바&스프링&리액트 풀스택 개발자 양성 과정, 더조은 컴퓨터 아카데미</span></li>
                        <li>2015.03 ~ 2022.02 <br /> <span>경북대학교 정치외교학 학사</span></li>
                    </div>
                </div>
            </div>
            <div className="nextPage">
                scroll
                <ExpandMoreIcon />
            </div>
        </div>
    );
};

export default React.memo(Intro);