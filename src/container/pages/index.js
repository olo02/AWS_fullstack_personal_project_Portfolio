import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Index = () => {

    const pageHeight = window.innerHeight;
    const [current, setCurrent] = useState(document.scrollingElement.scrollTop)
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(document.scrollingElement.scrollTop)
        dispatch({type : 'home'})
    }, [current])




    return (
            <div className="index-wrapper-title panel">
                <div className="title-container">
                    <div className="title-name-wrapper">
                        <div className="title-name">
                            <h1><span>개발자</span> 천은경</h1>
                            <h3>Developer Chun Eungyeong</h3>
                        </div>
                    </div>
                    <div className="title-content-wrapper">
                        <div className="title-content">
                            <h3>분석하고 몰입하는 것을 좋아합니다</h3>
                            <h3>우물 안에서 안주하는 제한된 사고를 지양합니다</h3>
                        </div>
                        <div className="title-contact">
                            <h3><span>eungyeong86</span>@gmail.com</h3>
                            <h4>Github : <a href="https://github.com/olo02" target="_blank" rel="noreferrer">github.com/olo02</a></h4>
                            <h4>Blog : <a href="https://blog.olooe.city" target="_blank" rel="noreferrer">blog.olooe.city</a> </h4>
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

export default React.memo(Index);