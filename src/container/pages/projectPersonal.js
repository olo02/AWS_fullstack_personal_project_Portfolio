import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import SelectedProject from "../../components/selectedProject";

const ProjectPersonal = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type : 'project', nav : 'personal', select : ''})
    }, [])

    return (
        <div className="index-wrapper-project-me panel">
            <h1>Personal Project,</h1>
            <div className="project-container">
                <SelectedProject select='portfolio' />
                <SelectedProject select='todo' />
                <SelectedProject select='wooneung' />
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

export default React.memo(ProjectPersonal);