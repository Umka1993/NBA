import React from 'react';
import s from './authPage.module.scss'
import {AuthForm}from "./components/AuthorizationForm"

console.log()

const AuthPage = ():JSX.Element => {
    return (

            <div className={s.wrap}>
                <div className={s.colLeft}>
                    <div className={s.colWrap}>
                        {/*<h2>Sign In</h2>*/}
                        {/* Show here on the center of the screen the input component */}
                        {/* create ins src dir `components/Input` folder */}
                        {/* in Input folder place index file and css file  */}
                        {/* make sure the input accepts the prop disabled and error: boolean and it changes the input visual state */}
                        {/* call @aymkin after that*/}
                        {/* next todo create button component https://www.figma.com/file/l62jBLPxKBn2RI6fZYIpL4/Test-big3?node-id=104%3A1279*/}
                        <AuthForm/>

                        {/*<form action="#" className={s.form}>*/}
                        {/*    <label htmlFor="login" className={s.login}>*/}
                        {/*        Login*/}
                        {/*        <input type="text" id='login'/>*/}
                        {/*    </label>*/}
                        {/*    <label htmlFor="password" className={s.password}>*/}
                        {/*        Password*/}
                        {/*        <input type="text" id='password'/>*/}
                        {/*    </label>*/}
                        {/*    <button className={s.buttonSignIn}>*/}
                        {/*        Sign In*/}
                        {/*    </button>*/}
                        {/*</form>*/}
                    </div>
                </div>
                <div className={s.colRight}>
                    <div className={s.colWrap}></div>
                </div>
            </div>

    );
};

export default AuthPage;
