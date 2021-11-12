import React from 'react';
import {SignInPage} from "./pages/SignInPage/SignInPage";
import './assets/style/main.module.scss'
import '../src/assets/style/variables.scss'
import {SignUpPage} from "./pages/SignUpPage/SignUpPage";

const App = () => {
    return (
        <div>
            {/*<SignInPage/>*/}
            <SignUpPage/>
        </div>
    );
};

export default App;


