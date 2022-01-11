import React, { useEffect } from 'react';
import s from './teamsComponent.module.scss';
import { useDispatch } from 'react-redux';
import { teams } from '../../../../modules/Commands/getComands/commandsThunk';
import { Outlet } from 'react-router';

export interface IParams {
  name: string | null;
  Page: number;
  PageSize: number;
}

export const TeamsComponent = (): JSX.Element => {
  const userName = localStorage.getItem('Name');
  const dispatch = useDispatch();
  const params: IParams = {
    name: userName,
    Page: 1,
    PageSize: 6,
  };

  useEffect(() => {
    dispatch(teams(params));
  }, []);

  return (
    <div className={s.contentWrap}>
      <Outlet />
    </div>
  );
};
