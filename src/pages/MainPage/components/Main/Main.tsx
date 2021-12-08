import React from 'react';
import s from './main.module.scss';
import { SideBar } from '../SideBar/SideBar';
import { Content } from '../Content/Content';

export const Main = (): JSX.Element => {
  return (
    <div className={s.main}>
      <div className={s.wrapMain}>
        <SideBar />
        <Content />
      </div>
    </div>
  );
};
