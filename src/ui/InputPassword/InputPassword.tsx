import React from 'react';
import { useCallback, useState } from 'react';
import eyeClose from '../../assets/icon/eyeClose.svg';
import eyeOpen from '../../assets/icon/eyeOpen.svg';
import { IInputProps } from '../../types';
import s from '../styleInput.module.scss';

export const InputPassword = <T, L>({ register, name, label }: IInputProps<T, L>): JSX.Element => {
  const [passwordShown, setPasswordShown] = useState(true);

  const togglePasswordShown = useCallback(() => {
    setPasswordShown(!passwordShown);
  }, [passwordShown]);

  return (
    <div className={s.inputBlock}>
      <label htmlFor={name}>{label}</label>
      <div className={s.inputWrap}>
        <input
          {...register(name, { required: 'This is required.' })}
          type={passwordShown ? 'password' : 'text'}
          id={name}
        />

        {eyeClose && eyeOpen ? (
          <div className={s.icon} onClick={togglePasswordShown}>
            <img src={!passwordShown ? eyeOpen : eyeClose} alt="eye img" />
          </div>
        ) : null}
      </div>
    </div>
  );
};
