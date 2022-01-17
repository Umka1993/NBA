import React, { useEffect, useState } from 'react';
import s from './SignInPage.module.scss';
import { SignInForm } from './components/SignInForm/SignInForm';
import { useAppSelector } from '../../core/redux/hooks/redux';
import { IsError } from '../../ui/IsError/IsError';
import { Loading } from '../../ui/Loading/Loading';
import { IErrorMessage } from '../../api/dto/IAutorization';

export const SignInPage = (): JSX.Element => {
  const { error, isLoading, message } = useAppSelector((state) => state.loginSliceReducer.errors);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (message === IErrorMessage.DuplicateData) {
      const userErrorMessage = `А user ${message}`;
      setErrorMessage(userErrorMessage);
    } else {
      setErrorMessage(message);
    }
  }, [message]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className={s.wrap}>
      {error && <IsError message={errorMessage} />}

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
  );
};
