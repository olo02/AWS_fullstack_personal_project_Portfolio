import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CustomAccordion from "../../components/customAccordion";
const Skills = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type : 'skills'})
    }, [])

    return (
        <div className="index-wrapper-skills panel">
            <h1>Skills,</h1>
            <div className="skill-wrapper">
                <div className="skill-container">
                    <div className="langauge">
                        <h3>Language</h3>
                        <div className="java"><img src={require('../../static/img/java.png')} /></div>
                        <div className="javascript"><img src={require('../../static/img/javascript.png')} /></div>
                        <div className="html-css"><img src={require('../../static/img/html.png')} /></div>
                        <div className="html-css"><img src={require('../../static/img/css.png')} /></div>
                    </div>
                    <div className="database">
                        <h3>Database</h3>
                        <div className="maria"><img src={require('../../static/img/maria.png')} /></div>
                        <div className="mysql"><img src={require('../../static/img/mysql.png')} /></div>
                        <div className="oracle"><img src={require('../../static/img/oracle.png')} /></div>
                    </div>
                    <div className="etc">
                        <h3>etc</h3>
                        <div className="git"><img src={require('../../static/img/github.png')} /></div>
                        <div className="svn"><img src={require('../../static/img/svn.png')} /></div>
                        <div className="aws"><img src={require('../../static/img/ec2.png')} /></div>
                        <div className="nginx"><img src={require('../../static/img/nginx.png')} /></div>
                        <div className="tomcat"><img src={require('../../static/img/tomcat.png')} /></div>
                    </div>
                    <div className="framework">
                        <h3>Framework & Library</h3>
                        <div className="spring"><img src={require('../../static/img/spring.png')} /></div>
                        <div className="springboot"><img src={require('../../static/img/springboot.png')} /></div>
                        <div className="springsecurity"><img src={require('../../static/img/springsecurity.png')} /></div>
                        <div className="springjpa"><img src={require('../../static/img/springjpa.png')} /></div>
                        <div className="mybatis"><img src={require('../../static/img/mybatis.png')} /></div>
                        <div className="jsp"><img src={require('../../static/img/jsp.png')} /></div>
                        <div className="servlet"><img src={require('../../static/img/servlet.png')} /></div>
                        <div className="react"><img src={require('../../static/img/react.png')} /></div>
                    </div>
                </div>
            </div>
            <div className="skills-box-1"></div>
            <div className="skills-box-2"></div>
            <div className="nextPage">
                <ExpandMoreIcon />
            </div>
        </div>
    );
};

export default React.memo(Skills);