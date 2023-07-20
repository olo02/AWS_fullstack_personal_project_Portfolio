import React, {useEffect, useRef} from 'react';
import "../static/css/headerStyle.scss";
import GitHubIcon from '@mui/icons-material/GitHub';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import {Link, NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import SelectedProject from "../components/selectedProject";
import HomeIcon from '@mui/icons-material/Home';
import UndoIcon from '@mui/icons-material/Undo';

const Header = () => {

    // Redux
    const page = useSelector( (state) => state.page.state)
    const projectType = useSelector( (state) => state.project)
    const projectDetail = useSelector( (state) => state.detail)

    // Navigate
    const navigate = useNavigate();

    // Ref
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
            document.getElementsByClassName(page)[0].style.background = 'rgb(137 158 192)';
            document.getElementsByClassName(page)[0].style.padding = '0 10px 0 30px';
            document.getElementsByClassName(page)[0].style.color = '#fdfdfd';
            document.getElementsByClassName(projectType)[0].style.color = 'rgb(137 158 192)';
        }
        if(projectDetail.length === 0) {
            activeScroll()
        }

    }, [page, projectType, projectDetail])

    function delay(ms = 1000) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async function activeScroll() {
        await delay(500);
        if(projectDetail.length === 0) {
            document.getElementsByClassName('index-container')[0]?.addEventListener('mousewheel',scrollDownEvent)
        }
    }

    const scrollDownEvent = (e) => {
        if(e.deltaY >= 0) {
            if(page === 'home'){
                navigate('/intro')
                document.getElementsByClassName('index-container')[0].removeEventListener('mousewheel' , scrollDownEvent)
            } else if(page === 'intro') {
                navigate('/skills')
                document.getElementsByClassName('index-container')[0].removeEventListener('mousewheel' , scrollDownEvent)
            } else if(page === 'skills') {
                navigate('/project/team')
                document.getElementsByClassName('index-container')[0].removeEventListener('mousewheel' , scrollDownEvent)
            } else if(page === 'project' && projectType === 'team' && projectDetail.length === 0) {
                navigate('/project/personal')
                document.getElementsByClassName('index-container')[0].removeEventListener('mousewheel' , scrollDownEvent)
            } else if(page === 'project' && projectType === 'personal' && projectDetail.length === 0) {
                navigate('/contact')
                document.getElementsByClassName('index-container')[0].removeEventListener('mousewheel' , scrollDownEvent)
            } else if(page === 'contact') {
                navigate('/contact')
            } else {
                document.getElementsByClassName('index-container')[0].removeEventListener('mousewheel' , scrollDownEvent)
            }
        } else if(e.deltaY < 0) {
            if(page === 'home') {
                navigate('/')
            } else if(page === 'intro') {
                navigate('/')
                document.getElementsByClassName('index-container')[0].removeEventListener('mousewheel' , scrollDownEvent)
            } else if(page === 'skills') {
                navigate('/intro')
                document.getElementsByClassName('index-container')[0].removeEventListener('mousewheel' , scrollDownEvent)
            } else if(page === 'project' && projectType === 'team' && projectDetail.length === 0) {
                navigate('/skills')
                document.getElementsByClassName('index-container')[0].removeEventListener('mousewheel' , scrollDownEvent)
            } else if(page === 'project' && projectType === 'personal' && projectDetail.length === 0) {
                navigate('/project/team')
                document.getElementsByClassName('index-container')[0].removeEventListener('mousewheel' , scrollDownEvent)
            } else if(page === 'contact') {
                navigate('/project/personal')
                document.getElementsByClassName('index-container')[0].removeEventListener('mousewheel' , scrollDownEvent)
            } else {
                document.getElementsByClassName('index-container')[0].removeEventListener('mousewheel' , scrollDownEvent)
            }
        }
    }



    return (
        <header className="header">
            <div className="myLink">
                <div><a href="/"><HomeIcon /></a><span>Home</span></div>
                <div><a href="https://github.com/olo02" target="_blank" rel="noreferrer"><GitHubIcon /></a><span>Github</span></div>
                <div><a href="https://blog.olooe.city" target="_blank" rel="noreferrer"><FormatBoldIcon /></a><span>티스토리 블로그</span></div>
            </div>
            <div className="myInfo">
                <div>
                    <div className="last-update">
                        <span>last update</span> : 2023.07.20
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
            {projectDetail.length !== 0 ? (
                <div className="header-selected-project-wrapper">
                    {projectType === 'team' ? (
                        <h1 className="project-type" onClick={() => navigate('/project/team')}>Team Project</h1>
                        ) : (
                        <h1 className="project-type" onClick={() => navigate('/project/personal')}>Personal Project</h1>
                        )}
                    <SelectedProject select={projectDetail} />
                </div>
            ) : ''}
        </header>
    );
};

export default Header;