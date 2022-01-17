import React, { useState } from 'react';
import s from '../styleInput.module.scss';
import { IInputProps } from 'types/formTypes';

export const InputAgreement = <T, L>({ register, name, label }: IInputProps<T, L>): JSX.Element => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleIsChecked = () => {
    setIsChecked((isChecked) => !isChecked);
  };

  return (
    <div className={s.inputRadioBlock}>
      <div className={s.inputRadioWrap}>
        <input
          {...register(name, { required: 'This is required.' })}
          type="checkbox"
          id={name}
          name={name}
          onClick={toggleIsChecked}
          checked={isChecked}
        />
        <label htmlFor={name}>{label}</label>
      </div>
    </div>
  );
};
