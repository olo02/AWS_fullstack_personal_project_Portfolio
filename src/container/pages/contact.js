import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Contact = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type : 'contact'})
    }, [])

    return (
        <div className="index-wrapper-contact panel">
            <h1>Thank you,</h1>
            <div>
                <h3>Contact</h3>
                <div>Email : eungyeong86@gmail.com</div>
                <div>Github : <a href="https://github.com/olo02" target="_blank" rel="noreferrer">github.com/olo02</a></div>
                <div>Blog : <a href="https://blog.olooe.city" target="_blank" rel="noreferrer">blog.olooe.city</a> </div>
            </div>
        </div>
    );
};

export default React.memo(Contact);