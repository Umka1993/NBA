import React from 'react';
import {SignInPage} from "./pages/SignInPage/SignInPage";
import './assets/style/main.module.scss'
import '../src/assets/style/variables.scss'
import {SignUpPage} from "./pages/SignUpPage/SignUpPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useAppSelector} from "./core/redux/hooks/redux";


const App = (): JSX.Element => {

    const {isAuth} = useAppSelector(state => state.setAuthDataReducer)


    return (
        <>
            <BrowserRouter>
                <Routes>

                    <Route path='/' element={<SignInPage/>}/>
                    <Route path='/signUpPage' element={<SignUpPage/>}/>

                </Routes>

            </BrowserRouter>

        </>


    );
};

export default App;


