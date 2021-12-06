import React from 'react';
import s from '../SignInPage/SignInPage.module.scss';
import { SignUpForm } from './components/SignUpForm';
import { useAppSelector } from '../../core/redux/hooks/redux';

export const SignUpPage = (): JSX.Element => {
  const { error, isLoading, message } = useAppSelector((state) => state.setAuthDataReducer);

  return (
    <>
      {isLoading && (
        <div className={s.loading}>
          <h2>Loading... </h2>
        </div>
      )}

      {!isLoading && (
        <div className={s.wrap}>
          {error && (
            <div className={s.error}>
              <span>{message}</span>
            </div>
          )}

          <div className={s.colLeft}>
            <div className={s.colLeftWrap}>
              <div className={s.colWrap}>
                <SignUpForm />
              </div>
            </div>
          </div>
          <div className={s.colRight}>
            <div className={s.colWrap}></div>
          </div>
        </div>
      )}
    </>
  );
};
