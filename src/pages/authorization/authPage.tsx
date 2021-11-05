import React from 'react';
import s from './authPage.module.scss'

console.log()

const AuthPage = ():JSX.Element => {
    return (

            <div className={s.wrap}>
                <div className={s.colLeft}>
                    <div className={s.colWrap}>
                        <h2>Sign In</h2>
                        <form action="#" className={s.form}>
                            <label htmlFor="login" className={s.login}>
                                Login
                                <input type="text" id='login'/>
                            </label>
                            <label htmlFor="password" className={s.password}>
                                Password
                                <input type="text" id='password'/>
                            </label>
                            <button className={s.buttonSignIn}>
                                Sign In
                            </button>
                        </form>
                    </div>
                </div>
                <div className={s.colRight}>
                    <div className={s.colWrap}></div>
                </div>
            </div>

    );
};

export default AuthPage;
