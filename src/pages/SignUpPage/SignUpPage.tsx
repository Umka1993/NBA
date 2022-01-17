import React, { useEffect, useState } from 'react';
import s from '../SignInPage/SignInPage.module.scss';
import { SignUpForm } from './components/SignUpForm/SignUpForm';
import { useAppSelector } from '../../core/redux/hooks/redux';
import { IErrorMessage } from '../../api/dto/IAutorization';
import { Loading } from '../../ui/Loading/Loading';

export const SignUpPage = (): JSX.Element => {
  const { error, isLoading, message } = useAppSelector((state) => state.setAuthDataReducer.errors);
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
      {error && (
        <div className={s.error}>
          <span>{errorMessage}</span>
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
  );
};
