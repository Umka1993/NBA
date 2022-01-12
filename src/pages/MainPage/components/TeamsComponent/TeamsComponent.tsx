import React, { useEffect } from 'react';
import s from './teamsComponent.module.scss';
import { Outlet } from 'react-router';
import { useAppSelector } from '../../../../core/redux/hooks/redux';
import { Loading } from '../../../../ui/Loading/Loading';
import { IsError } from '../../../../ui/IsError/IsError';

export interface IParams {
  name: string | null;
  Page: number;
  PageSize: number;
}

export const TeamsComponent = (): JSX.Element => {
  // const userName = localStorage.getItem('Name');

  const { error, isLoading, message } = useAppSelector((state) => state.addCommandReducer);
  useEffect(() => {
    // dispatch(teams());
  }, [error, isLoading]);

  let commandErrorMessage = message;
  if (message === ' with such data already exists.') {
    commandErrorMessage = `А command ${message}`;
  }

  // const params: IParams = {
  //   name: '9996',
  //   Page: 1,
  //   PageSize: 6,
  // };
  // console.log(Outlet);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <div className={s.contentWrap}>
          {error && <IsError message={commandErrorMessage} />}
          <Outlet />
        </div>
      )}
    </>
  );
};
