import React from 'react';
import LaunchIcon from "@mui/icons-material/Launch";
import {GitHub} from "@mui/icons-material";

const Projectlist = (props) => {
    return (
        <div className="project-wrapper">
            <div className="project-link">
                <h2>{props.title}</h2>
                {props.page ? (
                  <a href={props.page} target="_blank" rel="noreferrer"><LaunchIcon /></a>
                ) : ''}
                <a href={props.git} target="_blank" rel="noreferrer"><GitHub /></a>
            </div>
            <div className="img-wrapper">
                <img src={props.img} alt="" />
            </div>
            <div className="project-info">
                <h3 className="project-skill">{props.skill}</h3>
                <div className="project-title">{props.titleinfo}</div>
                <div className="project-content">
                    {props.tag}
                </div>
            </div>
        </div>
    );
};

export default Projectlist;