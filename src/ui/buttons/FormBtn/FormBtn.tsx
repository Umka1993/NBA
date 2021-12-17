import React from 'react';
import s from './formBtn.module.scss';

interface ISignBtnProps {
  children: React.ReactNode;
  isValid: boolean;
  isDirty: boolean;
}

export const FormBtn = ({ children, isValid, isDirty }: ISignBtnProps): JSX.Element => {
  return (
    <div className={s.formButton}>
      <button disabled={!isValid || !isDirty} type="submit">
        {children}
      </button>
    </div>
  );
};
