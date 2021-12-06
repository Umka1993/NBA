import React from 'react';
import s from '../../pages/SignInPage/components/SignInForm.module.scss';
import { IButtonProps } from '../../types';

const SignBtn = ({ text, isValid, isDirty }: IButtonProps): JSX.Element => {
  return (
    <div className={s.formButton}>
      <button disabled={!isValid || !isDirty} type="submit">
        {text}
      </button>
    </div>
  );
};

export default SignBtn;
