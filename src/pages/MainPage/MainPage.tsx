import React from 'react';
import { Header } from './components/Header/Header';
import { SideBar } from './components/SideBar/SideBar';
import s from './mainPage.module.scss';
import { Outlet } from 'react-router-dom';

export const MainPage = ({}): JSX.Element => {
  return (
    <>
      <Header />
      <div className={s.main}>
        <div className={s.wrapMain}>
          <SideBar />
          <div className={s.content}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
