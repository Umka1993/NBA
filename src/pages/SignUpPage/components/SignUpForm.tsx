import React, {useState} from 'react';
import s from "../../SignInPage/components/SignInForm.module.scss";
import {Input} from "../../../components/Input/Input";
import {InputPassword} from "../../../components/InputPassword/InputPassword";
import {SubmitHandler, useForm} from "react-hook-form";
import {Inputs} from "../../../../main";
import {InputName} from "../../../components/InputName/InputName";
import {InputAgreement} from "../../../components/InputAgreement/InputAgreement";


export const SignUpForm = (): JSX.Element => {
    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => onVerifyNewPassword(data)

    const [message, setMessage] = useState('');


    const onVerifyNewPassword = (data) => {
        if (data.newPassword !== data.confirmPassword) {
            setMessage('The passwords dont match')
        } else {
            setMessage('')
            console.log(data)
        }
    }


    let error
    if ((Object.keys(errors).length === 0)) {
        error = errors
    } else {
        error = errors;
    }

    return (
        <div className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <form action="#">
                <div className={s.formWrap}>
                    <div className={s.title}>
                        <h2>Sign Up</h2>
                    </div>
                    <InputName error={error}
                               label='Name'
                               register={register}
                               disabled={false}
                               name='Name'

                    />
                    <Input disabled={false}
                           label='Login'
                           register={register}
                           error={error}
                           name='Login'

                    />
                    <InputPassword disabled={false}
                                   label='Password'
                                   register={register}
                                   error={error}
                                   name='newPassword'
                                   message={message}
                    />
                    {/*<InputPasswordAgain*/}
                    {/*    disabled={false}*/}
                    {/*    label='Enter your password again'*/}
                    {/*    register={register}*/}
                    {/*    error={error}*/}
                    {/*    name='confirmPassword'*/}
                    {/*    message={message}*/}

                    {/*/>*/}
                    <InputPassword
                        disabled={false}
                        label='Enter your password again'
                        register={register}
                        error={error}
                        name='confirmPassword'
                        message={message}

                    />

                    <InputAgreement error={error}
                                    type='radio'
                                    register={register}
                                    label='I accept the agreement'
                                    name='acceptAgreement'
                    />


                    <div className={s.formButton}>
                        <button type="submit">Sign Up</button>
                    </div>
                </div>
                <div className={s.signUpRow}>
                    <p>Not a member yet? <a href="#"> Sign Ip</a></p>
                </div>

            </form>
        </div>

    );
};




