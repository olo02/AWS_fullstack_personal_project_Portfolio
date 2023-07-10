import React from 'react';
import "../static/css/headerStyle.scss";
import GitHubIcon from '@mui/icons-material/GitHub';
import FormatBoldIcon from '@mui/icons-material/FormatBold';

const Header = () => {
    return (
        <header>
            <div className="myLink">
                <div><a href="https://github.com/olo02" target="_blank" rel="noreferrer"><GitHubIcon /></a><span>Github</span></div>
                <div><a href="https://blog.olooe.city" target="_blank" rel="noreferrer"><FormatBoldIcon /></a><span>티스토리 블로그</span></div>
            </div>
            <div className="myInfo">
                <div>
                    <div className="last-update">
                        <span>last update</span> : 2023.07.10
                    </div>
                </div>
                {/*<div className="contact-me">*/}
                {/*    <div className="container">contact me !</div>*/}
                {/*    <div className="tri"></div>*/}
                {/*</div>*/}
            </div>
        </header>
    );
};

export default Header;