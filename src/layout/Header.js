import React, {useEffect, useRef} from 'react';
import "../static/css/headerStyle.scss";
import GitHubIcon from '@mui/icons-material/GitHub';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import {Link, NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Header = () => {
    const page = useSelector( (state) => state.page.state)
    const projectType = useSelector( (state) => state.project)
    const navigate = useNavigate();
    const home = useRef()
    const intro = useRef()
    const skills = useRef()
    const project = useRef()
    const contact = useRef()
    const team = useRef()
    const personal = useRef()

    const style = {
        background : 'none',
        color : '#333333',
        padding : 0,
    }

    useEffect(() => {
        home.current.style = style;
        intro.current.style = style;
        skills.current.style = style;
        project.current.style = style;
        contact.current.style = style;
        if(page === 'project') {
            team.current.style.display = 'block';
            personal.current.style.display = 'block';
            team.current.style.color = '#333333';
            personal.current.style.color = '#333333';
        } else {
            team.current.style.display = 'none';
            personal.current.style.display = 'none';
        }
        if(document.getElementsByClassName(page)[0]) {
            document.getElementsByClassName(page)[0].style.background = '#ea8181';
            document.getElementsByClassName(page)[0].style.padding = '0 10px 0 30px';
            document.getElementsByClassName(page)[0].style.color = '#fdfdfd';
            document.getElementsByClassName(projectType)[0].style.color = '#ea8181';
        }
        activeScroll()

    }, [page, projectType])


    function delay(ms = 1000) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async function activeScroll() {
        await delay(500);
        document.getElementsByClassName('app')[0].addEventListener('mousewheel',scrollDownEvent)
    }

    const scrollDownEvent = (e) => {
        if(e.deltaY >= 0) {
            if(page === 'home'){
                navigate('/intro')
                document.getElementsByClassName('app')[0].removeEventListener('mousewheel' , scrollDownEvent)
            } else if(page === 'intro') {
                navigate('/skills')
                document.getElementsByClassName('app')[0].removeEventListener('mousewheel' , scrollDownEvent)
            } else if(page === 'skills') {
                navigate('/project/team')
                document.getElementsByClassName('app')[0].removeEventListener('mousewheel' , scrollDownEvent)
            } else if(page === 'project' && projectType === 'team') {
                navigate('/project/personal')
                document.getElementsByClassName('app')[0].removeEventListener('mousewheel' , scrollDownEvent)
            } else if(page === 'project' && projectType === 'personal') {
                navigate('/contact')
                document.getElementsByClassName('app')[0].removeEventListener('mousewheel' , scrollDownEvent)
            }
        } else if(e.deltaY < 0) {
            if(page === 'intro') {
                navigate('/')
                document.getElementsByClassName('app')[0].removeEventListener('mousewheel' , scrollDownEvent)
            } else if(page === 'skills') {
                navigate('/intro')
                document.getElementsByClassName('app')[0].removeEventListener('mousewheel' , scrollDownEvent)
            } else if(page === 'project' && projectType === 'team') {
                navigate('/skills')
                document.getElementsByClassName('app')[0].removeEventListener('mousewheel' , scrollDownEvent)
            } else if(page === 'project' && projectType === 'personal') {
                navigate('/project/team')
                document.getElementsByClassName('app')[0].removeEventListener('mousewheel' , scrollDownEvent)
            } else if(page === 'contact') {
                navigate('/project/personal')
                document.getElementsByClassName('app')[0].removeEventListener('mousewheel' , scrollDownEvent)
            }
        }
    }



    return (
        <header className="header">
            <div className="myLink">
                <div><a href="https://github.com/olo02" target="_blank" rel="noreferrer"><GitHubIcon /></a><span>Github</span></div>
                <div><a href="https://blog.olooe.city" target="_blank" rel="noreferrer"><FormatBoldIcon /></a><span>티스토리 블로그</span></div>
            </div>
            <div className="myInfo">
                <div>
                    <div className="last-update">
                        <span>last update</span> : 2023.07.11
                    </div>
                </div>
            </div>
            <div className="sidebar">
                <Link ref={home} className='page home' to="/">Home</Link>
                <Link ref={intro} className='page intro' to="/intro">Intro</Link>
                <Link ref={skills} className='page skills' to="/skills">Skills</Link>
                <Link ref={project} className='page project' to="/project/team">Project</Link>
                <div className="project-list">
                    <Link ref={team} className='page team' to="/project/team">Team</Link>
                    <Link ref={personal} className='page personal' to="/project/personal">Personal</Link>
                </div>
                <Link ref={contact} className='page contact' to="/contact">Contact</Link>
            </div>
        </header>
    );
};

export default Header;