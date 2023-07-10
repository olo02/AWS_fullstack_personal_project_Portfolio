import './App.css';
import React, {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom"
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Pages from "./routes/pages";

function App() {

    const [path, setPath] = useState(window.location.pathname);

    useEffect(() => {
        let unmounted = false;
        if (!unmounted) {
            setPath(window.location.pathname);
        }
        return () => (unmounted = true);
    }, [setPath]);


    return (
        <div className="app">
            <BrowserRouter>
                <Header />
                    <Routes>
                        <Route path="/*" element={<Pages />} />
                    </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
