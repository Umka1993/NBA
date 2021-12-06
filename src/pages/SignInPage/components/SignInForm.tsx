import React from 'react';
import s from './SignInForm.module.scss';
import { InputPassword } from 'ui/InputPassword/InputPassword';
import { useForm } from 'react-hook-form';
import { LabelNames, SignInInputs } from 'types';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from 'ui/Input/Input';
import SignBtn from 'ui/SignBtn/SignBtn';
import { useAppDispatch } from '../../../core/redux/hooks/redux';
import { loginData } from '../../../modules/authorization/loginThunk';

export const SignInForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<SignInInputs>({ mode: 'onChange' });
  // const { login } = useAppSelector((state) => state.setAuthDataReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data: SignInInputs) => {
    const { meta } = await dispatch(loginData(data));
    if (meta.requestStatus === 'fulfilled') {
      navigate('/mainPage');
    }
  };

  return (
    <div className={s.form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.formWrap}>
          <div className={s.title}>
            <h2>Sign In</h2>
          </div>
          <div className={`${errors.Login ? s.error : ''} ${s.componentWrap}`}>
            <Input<SignInInputs, LabelNames>
              register={register}
              name={'Login'}
              label={'Login'}
              // value={login}
            />
            {errors.Login && <span>{errors.Login.message}</span>}
          </div>

          <div className={`${errors.Login ? s.error : ''} ${s.componentWrap}`}>
            <InputPassword<SignInInputs, LabelNames>
              register={register}
              name={'Password'}
              label={'Password'}
            />
            {errors.Password && <span>{errors.Password.message}</span>}
          </div>

          <SignBtn isDirty={isDirty} isValid={isValid} text="Sign In" />

          <div className={s.signUpRow}>
            <p>
              Not a member yet?
              <Link to="/signUpPage"> Sign up</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};
