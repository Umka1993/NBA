import React, { useEffect, useState } from 'react';
import s from './teamsComponent.module.scss';
import { Outlet } from 'react-router';
import { useAppSelector } from '../../../../core/redux/hooks/redux';
import { Loading } from '../../../../ui/Loading/Loading';
import { IsError } from '../../../../ui/IsError/IsError';
import { IErrorMessage } from '../../../../api/dto/IAutorization';

export interface IParams {
  name: string | null;
  Page: number;
  PageSize: number;
}

export const TeamsComponent = (): JSX.Element => {
  // const userName = localStorage.getItem('Name');

  const { error, isLoading, message } = useAppSelector((state) => state.addCommandReducer.errors);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // dispatch(teams());
    if (message === IErrorMessage.DuplicateData) {
      const commandErrorMessage = `A command${message}`;
      setErrorMessage(commandErrorMessage);
    } else {
      setErrorMessage(message);
    }
  }, [error, isLoading, message]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className={s.contentWrap}>
      {error && <IsError message={errorMessage} />}
      <Outlet />
    </div>
  );
};
