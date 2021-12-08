import React from 'react';
import s from './SignInPage.module.scss';
import { SignInForm } from './components/SignInForm/SignInForm';
import { useAppSelector } from '../../core/redux/hooks/redux';

export const SignInPage = (): JSX.Element => {
  const { error, isLoading, message } = useAppSelector((state) => state.loginSliceReducer);

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
                <SignInForm />
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
