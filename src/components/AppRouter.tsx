import React, {useEffect} from 'react';
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import {useAppSelector} from "../core/redux/hooks/redux";
import {publicRoutes} from "../pages/routes";

export const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map(({path, Element}) =>
                <Route key={path} path={path} element={Element}/>
            )}


        </Routes>
    );
};


