import React from 'react';
import s from '../../../pages/SignInPage/components/SignInForm/SignInForm.module.scss';

interface IButtonProps {
  children: React.ReactNode;
  isValid: boolean;
  isDirty: boolean;
}

export const SignBtn = ({ children, isValid, isDirty }: IButtonProps): JSX.Element => {
  return (
    <div className={s.formButton}>
      <button disabled={!isValid || !isDirty} type="submit">
        {children}
      </button>
    </div>
  );
};
