import React, {lazy, Suspense, useEffect} from 'react';
import {Link, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";


const Index = lazy(() => import('../container/pages/index'))
const Intro = lazy(() => import('../container/pages/Intro'))
const Skills = lazy(() => import('../container/pages/skills'))
const ProjectTeam = lazy(() => import('../container/pages/projectTeam'))
const ProjectPersonal = lazy(() => import('../container/pages/projectPersonal'))
const Contact = lazy(() => import('../container/pages/contact'))

const PagesRoute = React.memo(() => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <Suspense
            fallback={
                <div style={{
                    fontSize: 30,
                    display: "flex",
                    flexDirection: "column",
                    flexWrap:"wrap",
                    width:"100%",
                    height:"100vh",
                    justifyContent: "center",
                    alignItems: "center",
                }}> <img src={require('../static/img/loading.gif')} alt='' /> </div>
            }
        >
            <div className="index-container" >
                <Routes>
                    <Route index element={<Index />} />
                    <Route path="/intro" element={<Intro />} />
                    <Route path="/skills"  element={<Skills />} />
                    <Route path="/project/team" element={<ProjectTeam />} />
                    <Route path="/project/personal" element={<ProjectPersonal />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>

        </Suspense>
    );
});

export default PagesRoute;