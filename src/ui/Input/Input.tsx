import s from '../styleInput.module.scss';
import { IInputProps } from '../../types';
import React from 'react';

export const Input = <T, L>({ register, name, label, value }: IInputProps<T, L>): JSX.Element => {
  return (
    <div className={s.inputBlock}>
      <label htmlFor={name}>{label}</label>
      <div className={s.inputWrap}>
        <input
          {...register(name, { required: 'This is required.' })}
          type="text"
          id={name}
          value={value}
        />
      </div>
    </div>
  );
};
