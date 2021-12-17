import React from 'react';
import s from './teamsComponent.module.scss';
import { Teams } from './Teams/Teams';
import { Outlet } from 'react-router-dom';

export const TeamsComponent = (): JSX.Element => {
  return (
    <div className={s.contentWrap}>
      {/*<Teams />*/}
      {/*<TeamConstructor />*/}
      <Outlet />
    </div>
  );
};
