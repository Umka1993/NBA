import React, {useEffect} from 'react';
import './assets/style/main.module.scss'
import '../src/assets/style/variables.scss'
import {BrowserRouter, Navigate, useNavigate} from "react-router-dom";
import {useAppSelector} from "./core/redux/hooks/redux";
import {AppRouter} from "./components/AppRouter";
import {SIGNINPAGE_ROUTE} from "./pages/utils/constans";


const App = (): JSX.Element => {




    return (
        <>
            <BrowserRouter>

                <AppRouter/>
            </BrowserRouter>

        </>


    );
};

export default App;


