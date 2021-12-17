import React from 'react';
import s from './button.module.scss';

interface IButtonProps {
  children: React.ReactNode;
}

export const Button = ({ children }: IButtonProps): JSX.Element => {
  return (
    <div className={s.button}>
      <button type="submit">{children}</button>
    </div>
  );
};
