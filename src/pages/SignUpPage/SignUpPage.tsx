import React from 'react';
import s from '../SignInPage/SignInPage.module.scss'
import {SignUpForm} from "./components/SignUpForm"



export const SignUpPage = (): JSX.Element => {
    return (
        <div className={s.wrap}>
            <div className={s.colLeft}>
                <div className={s.colLeftWrap}>
                    <div className={s.colWrap}>
                        <SignUpForm/>
                    </div>
                </div>

            </div>
            <div className={s.colRight}>
                <div className={s.colWrap}></div>
            </div>
        </div>


    );
};

