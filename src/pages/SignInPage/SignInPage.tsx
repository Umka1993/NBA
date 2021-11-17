import React from 'react';
import s from './SignInPage.module.scss'
import {SignInForm} from "./components/SignInForm";


export const SignInPage = (): JSX.Element => {
    return (
        <div className={s.wrap}>
            <div className={s.colLeft}>
                <div className={s.colLeftWrap}>
                    <div className={s.colWrap}>
                        <SignInForm/>
                    </div>
                </div>
            </div>
            <div className={s.colRight}>
                <div className={s.colWrap}></div>
            </div>
        </div>


    );
};

