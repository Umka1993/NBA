import React from 'react';
import s from '../../pages/SignInPage/SignInPage.module.scss';
import { useAppSelector } from '../../core/redux/hooks/redux';

export const IsError = ({ message }: { message: string }) => {
  // const { message } = useAppSelector((state) => state.loginSliceReducer);
  return (
    <>
      <div className={s.error}>
        <span>{message}</span>
      </div>
    </>
  );
};
