import React from 'react';
import s from './main.module.scss';
import { SideBar } from '../SideBar/SideBar';
import { Teams } from '../Teams/Teams';
import { Players } from '../Players/Players';

export const Main = (): JSX.Element => {
  return (
    <div className={s.main}>
      <div className={s.wrapMain}>
        <SideBar />
        {/*<Teams />*/}
        <Players />
      </div>
    </div>
  );
};
