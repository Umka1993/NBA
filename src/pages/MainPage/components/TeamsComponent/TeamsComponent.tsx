import React from 'react';
import s from './teamsComponent.module.scss';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { teams } from '../../../../modules/Comands/commandsThunk';

export interface IParams {
  name: string | null;
  Page: number;
  PageSize: number;
}

export const TeamsComponent = (): JSX.Element => {
  // const { userName } = useAppSelector((state) => state.loginSliceReducer);
  const userName = localStorage.getItem('Name');
  const dispatch = useDispatch();

  const params: IParams = {
    name: userName,
    Page: 1,
    PageSize: 6,
  };

  // @ts-ignore
  const teamsCollection = dispatch(teams(params));

  // console.log('teamsCollection', teamsCollection);
  return (
    <div className={s.contentWrap}>
      {/*<Teams />*/}
      {/*<TeamConstructor />*/}
      <Outlet />
    </div>
  );
};
