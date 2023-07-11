import './App.css';
import React from "react";
import {BrowserRouter,  Route, Routes} from "react-router-dom"
import "./static/css/indexStyle.scss";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Pages from "./routes/pages";
import Index from './container/pages/index';

function App() {

    return (
        <div className="app">
            <BrowserRouter>
                <Header />
                <div className="index-container">
                    <Routes>
                        <Route path="/" element={<Index />} />
                        <Route path="/*" element={<Pages />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
