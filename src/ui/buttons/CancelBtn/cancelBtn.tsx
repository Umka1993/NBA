import React from 'react';
import s from './cancelBtn.module.scss';

interface ISignBtnProps {
  children: React.ReactNode;
  isDirty: boolean;
}

export const CancelBtn = ({ children, isDirty }: ISignBtnProps): JSX.Element => {
  return (
    <div className={s.formButton}>
      <button disabled={!isDirty} type="submit">
        {children}
      </button>
    </div>
  );
};
