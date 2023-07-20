import React, {lazy, Suspense, useEffect} from 'react';
import {Route, Routes, useLocation} from "react-router-dom";

const DetailPages = React.memo(() => {
    const { pathname } = useLocation();

    const DamsoDetail = lazy(() => import('../container/detailPage/DamsoDetail'))
    const JubgingDetail = lazy(() => import('../container/detailPage/JubgingDetail'))
    const JaladinDetail = lazy(() => import('../container/detailPage/JaladinDetail'))
    const PortfolioDetail = lazy(() => import('../container/detailPage/PortfolioDetail'))
    const TodoDetail = lazy(() => import('../container/detailPage/TodoDetail'))
    const WooneungDetail = lazy(() => import('../container/detailPage/WooneungDetail'))

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
            <div className="detail-index-container" >
                <Routes>
                    <Route path="/jubging" element={<JubgingDetail />} />
                    <Route path="/damso" element={<DamsoDetail />} />
                    <Route path="/jaladin" element={<JaladinDetail />} />
                    <Route path="/portfolio" element={<PortfolioDetail />} />
                    <Route path="/todo" element={<TodoDetail />} />
                    <Route path="/wooneung" element={<WooneungDetail />} />
                </Routes>
            </div>

        </Suspense>
    );
});

export default DetailPages;