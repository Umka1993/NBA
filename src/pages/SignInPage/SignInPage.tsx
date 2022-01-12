import React from 'react';
import s from './SignInPage.module.scss';
import { SignInForm } from './components/SignInForm/SignInForm';
import { useAppSelector } from '../../core/redux/hooks/redux';
import { IsError } from '../../ui/IsError/IsError';
import { Loading } from '../../ui/Loading/Loading';

export const SignInPage = (): JSX.Element => {
  const { error, isLoading, message } = useAppSelector((state) => state.loginSliceReducer);

  let UserErrorMessage = message;
  if (message === ' with such data already exists.') {
    UserErrorMessage = `А user ${message}`;
  }

  return (
    <>
      {isLoading && <Loading />}

      {!isLoading && (
        <div className={s.wrap}>
          {error && <IsError message={UserErrorMessage} />}

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
