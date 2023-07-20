import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AdsClickIcon from '@mui/icons-material/AdsClick';
import SelectedProject from "../../components/selectedProject";

const ProjectTeam = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type : 'project', nav : 'team', select : ''})
    }, [])

    return (
        <div className="index-wrapper-project-team panel">
            <h1>Team Project,</h1>
            <div className="project-container">
                <SelectedProject select='jubging' />
                <SelectedProject select='damso' />
                <SelectedProject select='jaladin' />
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

export default React.memo(ProjectTeam);