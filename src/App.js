import './App.css';
import React from "react";
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom"
import "./static/css/indexStyle.scss";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Pages from "./routes/pages";
import DetailPages from "./routes/detailPages";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/*" element={<Pages />} />
                    <Route path="/project/detail/*" element={<DetailPages />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
