import React, {useState} from 'react';
import s from "../../SignInPage/components/SignInForm.module.scss";
import {Input} from "../../../components/Input/Input";
import {InputPassword} from "../../../components/InputPassword/InputPassword";
import {SubmitHandler, useForm} from "react-hook-form";
import {FormNames} from "../../../../main";
import {InputName} from "../../../components/InputName/InputName";
import {InputAgreement} from "../../../components/InputAgreement/InputAgreement";
import {Link, useNavigate} from "react-router-dom";
import {signAuthData} from '../../../modules/authorization/authorizationThunk'
import {useAppDispatch} from "../../../core/redux/hooks/redux";
import {InputPasswordAgain} from "../../../components/InputPasswordAgain/InputPasswordAgain";
import {UnpackNestedValue} from "react-hook-form/dist/types/form";


export const SignUpForm = (): JSX.Element => {
    const USER_NAME = 'userName'
    const LOGIN = 'Login'
    const PASSWORD = 'Password'
    const PASSWORDAGAIN = 'passwordAgain'
    const ACCEPTAGREEMENT = 'acceptAgreement'
    const {register, handleSubmit, formState: {errors}} = useForm<FormNames>();

    const onSubmit = (data:UnpackNestedValue<FormNames>) => {
        if (data.Password !== data.passwordAgain) {
            setMessage('The passwords dont match')
        } else {
            setMessage('')
            dispatch(signAuthData(data))
            navigate('/')
        }
    }
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const dispatch = useAppDispatch()

    return (
        <div className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <form action="#">
                <div className={s.formWrap}>
                    <div className={s.title}>
                        <h2>Sign Up</h2>
                    </div>
                    <InputName errors={errors}
                               label='Name'
                               register={register}
                               disabled={false}
                               name={USER_NAME}

                    />
                    <Input disabled={false}
                           label='Login'
                           register={register}
                           errors={errors}
                           name={LOGIN}

                    />
                    <InputPassword disabled={false}
                                   label='Password'
                                   register={register}
                                   errors={errors}
                                   name={PASSWORD}
                                   message={message}
                    />

                    <InputPasswordAgain
                        disabled={false}
                        label='Enter your password again'
                        register={register}
                        errors={errors}
                        name={PASSWORDAGAIN}
                        message={message}

                    />

                    <InputAgreement errors={errors}
                                    type='radio'
                                    register={register}
                                    label='I accept the agreement'
                                    name={ACCEPTAGREEMENT}
                    />


                    <div className={s.formButton}>
                        <button type="submit">Sign Up</button>
                    </div>
                </div>
                <div className={s.signUpRow}>
                    <p>Not a member yet?
                        <Link to='/'> Sign Ip</Link>
                    </p>
                </div>

            </form>

        </div>



    );
};




