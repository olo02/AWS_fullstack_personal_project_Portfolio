import React from 'react';
import LaunchIcon from "@mui/icons-material/Launch";
import {GitHub} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

const Projectlist = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const toDetailPage = () => {
        console.log('페이지 이동')
        navigate(`/project/detail/${props.name}`, {
            state : {
                project : `${props.name}`
            }
        })
        dispatch({ type: 'project', select : `${props.name}` })
    }


    return (
        <div className="project-wrapper">
            <div className="project-link">
                <h2>{props.title}</h2>
                {props.page ? (
                  <a href={props.page} target="_blank" rel="noreferrer"><LaunchIcon /></a>
                ) : ''}
                <a href={props.git} target="_blank" rel="noreferrer"><GitHub /></a>
            </div>
            <div className="img-wrapper" onClick={toDetailPage} >
                <img src={props.img} alt="" />
            </div>
            {props.skill ? (
                <div className="project-info" onClick={toDetailPage} >
                    <h3 className="project-skill">{props.skill}</h3>
                    <div className="project-title">{props.titleinfo}</div>
                    <div className="project-content">
                        {props.tag}
                    </div>
                </div>
            ) : ''}
        </div>
    );
};

export default React.memo(Projectlist);