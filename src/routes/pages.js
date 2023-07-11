import React, {lazy, Suspense, useEffect} from 'react';
import {Link, Route, Routes, useLocation} from "react-router-dom";


const Index = lazy(() => import('../container/pages/index'))
const Intro = lazy(() => import('../container/pages/Intro'))
const Skills = lazy(() => import('../container/pages/skills'))
const ProjectTeam = lazy(() => import('../container/pages/projectTeam'))
const ProjectPersonal = lazy(() => import('../container/pages/projectPersonal'))
const Contact = lazy(() => import('../container/pages/contact'))
const DetailProject = lazy(() => import('../container/pages/DetailProject'))

const PagesRoute = React.memo(() => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <Suspense
            fallback={
                <div> 로딩중...
                </div>
            }
        >
            <Routes>
                <Route index element={<Index />} />
                <Route path="/intro" element={<Intro />} />
                <Route path="/skills"  element={<Skills />} />
                <Route path="/project/team" element={<ProjectTeam />} />
                <Route path="/project/personal" element={<ProjectPersonal />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="detail" element={<DetailProject />} />
            </Routes>
        </Suspense>
    );
});

export default PagesRoute;