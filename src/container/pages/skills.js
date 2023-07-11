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
                        <div className="java">Java</div>
                        <div className="javascript">JavaScript</div>
                        <div className="html-css">HTML/CSS</div>
                    </div>
                    <div className="etc">
                        <h3>etc</h3>
                        <div className="git">GitHub</div>
                        <div className="svn">SVN</div>
                        <div className="aws">AWS EC2</div>
                        <div className="nginx">NGINX</div>
                        <div className="tomcat">Tomcat</div>
                    </div>
                    <div className="framework">
                        <h3>Framework & Library</h3>
                        <div className="spring">Spring</div>
                        <div className="springboot">Spring<br />Boot</div>
                        <div className="springsecurity">Spring Security</div>
                        <div className="springjpa">Spring<br />JPA</div>
                        <div className="mybatis">Mybatis</div>
                        <div className="jsp">JSP</div>
                        <div className="servlet">Servlet</div>
                        <div className="react">React</div>
                    </div>
                    <div className="database">
                        <h3>Database</h3>
                        <div className="maria">MariaDB</div>
                        <div className="mysql">MySQL</div>
                        <div className="oracle">Oracle</div>
                    </div>
                </div>
            </div>
            <div className="skills-box-1"></div>
            <div className="skills-box-2"></div>
            <div className="nextPage">
                scroll
                <ExpandMoreIcon />
            </div>
        </div>
    );
};

export default Skills;