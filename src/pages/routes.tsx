import React from 'react';
import { SignInPage } from './SignInPage/SignInPage';
import {
  MAINPAGE_ROUTE,
  PLAYERS_ROUTE,
  SIGNINPAGE_ROUTE,
  SIGNUPPAGE_ROUTE,
  TEAMS_ROUTE,
} from './utils/constans';
import { SignUpPage } from './SignUpPage/SignUpPage';
import { MainPage } from './MainPage/MainPage';
import { Players } from './MainPage/components/Players/Players';
import { Teams } from './MainPage/components/Teams/Teams';

export const privateRoutes = [
  {
    path: MAINPAGE_ROUTE,
    Element: <MainPage />,
  },
  // {
  //   path: PLAYERS_ROUTE,
  //   Element: <Players />,
  // },
  // {
  //   path: TEAMS_ROUTE,
  //   Element: <Teams />,
  // },
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
