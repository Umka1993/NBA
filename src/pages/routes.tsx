import {SignInPage} from "./SignInPage/SignInPage";
import {SIGNINPAGE_ROUTE, SIGNUPPAGE_ROUTE} from "./utils/constans";
import {SignUpPage} from "./SignUpPage/SignUpPage";

export const authRoutes = [

]

export const publicRoutes = [
    {
        path: SIGNINPAGE_ROUTE,
        Element: <SignInPage/>
    },
    {
        path: SIGNUPPAGE_ROUTE,
        Element: <SignUpPage/>
    },

]

