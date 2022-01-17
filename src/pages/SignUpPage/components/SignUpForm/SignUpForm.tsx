import React, { useState } from 'react';
import s from '../../../SignInPage/components/SignInForm/SignInForm.module.scss';
import { InputPassword } from '../../../../ui/inputs/InputPassword/InputPassword';
import { useForm } from 'react-hook-form';
import { FormNames, LabelNames } from 'types/formTypes';
import { InputAgreement } from '../../../../ui/inputs/InputAgreement/InputAgreement';
import { Link, useNavigate } from 'react-router-dom';
import { registrationData } from '../../../../modules/authorization/registration/registrationThunk';
import { useAppDispatch } from '../../../../core/redux/hooks/redux';
import { Input } from '../../../../ui/inputs/Input/Input';
import { FormBtn } from '../../../../ui/buttons/FormBtn/FormBtn';

export const SignUpForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<FormNames>({ mode: 'onChange' });
  const [isMatchingPassword, setIsMatchingPassword] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data: FormNames) => {
    if (data.Password !== data.passwordAgain) {
      setIsMatchingPassword(true);
    } else {
      const { meta } = await dispatch(registrationData(data));
      if (meta.requestStatus === 'fulfilled') {
        navigate('/');
      }
    }
  };

  return (
    <div className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <form action="#">
        <div className={s.formWrap}>
          <div className={s.title}>
            <h2>Sign Up</h2>
          </div>
          <div className={`${errors.userName ? s.error : ''} ${s.componentWrap}`}>
            <Input<FormNames, LabelNames> register={register} name={'userName'} label={'Name'} />
            {errors.userName && <span>{errors.userName.message}</span>}
          </div>

          <div className={`${errors.Login ? s.error : ''} ${s.componentWrap}`}>
            <Input<FormNames, LabelNames> register={register} name={'Login'} label={'Login'} />
            {errors.Login && <span>{errors.Login.message}</span>}
          </div>
          <div className={`${errors.Password ? s.error : ''} ${s.componentWrap}`}>
            <InputPassword<FormNames, LabelNames>
              register={register}
              name={'Password'}
              label={'Password'}
            />
            {errors.Password && <span>{errors.Password.message}</span>}
            {isMatchingPassword && <span>The passwords dont match</span>}
          </div>

          <div className={`${errors.passwordAgain ? s.error : ''} ${s.componentWrap}`}>
            <InputPassword<FormNames, LabelNames>
              register={register}
              name={'passwordAgain'}
              label={'Enter your password again'}
            />
            {errors.passwordAgain && <span>{errors.passwordAgain.message}</span>}
            {isMatchingPassword && <span>The passwords dont match</span>}
          </div>

          <div className={`${errors.acceptAgreement ? s.error : ''} ${s.componentWrap}`}>
            <InputAgreement<FormNames, LabelNames>
              register={register}
              name={'acceptAgreement'}
              label={'I accept the agreement'}
            />
            {errors.acceptAgreement && <span>{errors.acceptAgreement.message}</span>}
          </div>

          <FormBtn isDirty={isDirty} isValid={isValid}>
            Sign Up
          </FormBtn>
        </div>
        <div className={s.signUpRow}>
          <p>
            Not a member yet?
            <Link to="/"> Sign in</Link>
          </p>
        </div>
      </form>
    </div>
  );
};
