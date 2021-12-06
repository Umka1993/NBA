import React from 'react';
import { SignInPage } from './SignInPage/SignInPage';
import { MAINPAGE_ROUTE, SIGNINPAGE_ROUTE, SIGNUPPAGE_ROUTE } from './utils/constans';
import { SignUpPage } from './SignUpPage/SignUpPage';
import { MainPage } from './MainPage/MainPage';

export const privateRoutes = [
  {
    path: MAINPAGE_ROUTE,
    Element: <MainPage />,
  },
];

export const publicRoutes = [
  {
    path: SIGNINPAGE_ROUTE,
    Element: <SignInPage />,
  },
  {
    path: SIGNUPPAGE_ROUTE,
    Element: <SignUpPage />,
  },
];
