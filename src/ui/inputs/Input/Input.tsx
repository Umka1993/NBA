import s from '../styleInput.module.scss';
import { IInputProps } from 'types/formTypes';
import React from 'react';

export const Input = <T, L>({ register, name, label }: IInputProps<T, L>): JSX.Element => {
  return (
    <div className={s.inputBlock}>
      <label htmlFor={name}>{label}</label>
      <div className={s.inputWrap}>
        <input
          {...register(name, {
            required: 'This is required.',
          })}
          id={name}
          type="text"
        />
      </div>
    </div>
  );
};
