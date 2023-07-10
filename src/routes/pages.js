import React, {lazy} from 'react';
import {Route, Routes} from "react-router-dom";


const Index = lazy(() => import('../container/pages/index'))
const DetailProject = lazy(() => import('../container/pages/DetailProject'))

const PagesRoute = () => {
    return (
        <Routes>
            <Route index element={<Index />} />
            <Route path="detail" element={<DetailProject />} />
        </Routes>
    );
};

export default PagesRoute;