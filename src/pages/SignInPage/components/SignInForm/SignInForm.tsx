import React from 'react';
import s from './SignInForm.module.scss';
import { InputPassword } from 'ui/inputs/InputPassword/InputPassword';
import { useForm } from 'react-hook-form';
import { LabelNames, SignInInputs } from 'types/formTypes';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from 'ui/inputs/Input/Input';
import { FormBtn } from 'ui/buttons/FormBtn/FormBtn';
import { useAppDispatch } from '../../../../core/redux/hooks/redux';
import { loginData } from '../../../../modules/authorization/login/loginThunk';

export const SignInForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<SignInInputs>({ mode: 'onChange' });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data: SignInInputs) => {
    const { meta } = await dispatch(loginData(data));
    if (meta.requestStatus === 'fulfilled') {
      navigate('/mainPage/Teams');
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
            <Input<SignInInputs, LabelNames> register={register} name={'Login'} label={'Login'} />
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
          <FormBtn isDirty={isDirty} isValid={isValid}>
            Sign In
          </FormBtn>

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
