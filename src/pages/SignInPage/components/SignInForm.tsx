import React from 'react';
import s from "./SignInForm.module.scss";
import {InputPassword} from "../../../components/InputPassword/InputPassword";
import {SubmitHandler, useForm} from "react-hook-form";
import {FormNames} from "../../../../main";
import {Link} from "react-router-dom";
import {InputLogin} from "../../../components/InputLogin/InputLogin";


export const SignInForm = (): JSX.Element => {

    const {register, handleSubmit, formState: {errors}} = useForm<FormNames>();
    const onSubmit: SubmitHandler<FormNames> = data => console.log(data);

debugger
    return (
        <div className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <form action="#">
                <div className={s.formWrap}>
                    <div className={s.title}>
                        <h2>Sign In</h2>
                    </div>
                    <InputLogin
                        disabled={false}
                        label='Login'
                        register={register}
                        errors={errors}
                        name='Login'

                    />
                    <InputPassword disabled={false}
                                   label='Password'
                                   register={register}
                                   errors={errors}
                                   name='Password'
                    />
                    <div className={s.formButton}>
                        <button type="submit">Sign In</button>
                    </div>
                    <div className={s.signUpRow}>
                        <p>Not a member yet?
                            <Link to='/signUpPage'> Sign up</Link>
                        </p>
                    </div>
                </div>
            </form>
        </div>

    )
};




