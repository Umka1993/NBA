import React from 'react';
import s from "./SignInForm.module.scss";
import {Input} from "../../../components/Input/Input";
import {InputPassword} from "../../../components/InputPassword/InputPassword";
import {SubmitHandler, useForm} from "react-hook-form";
import {Inputs} from "../../../../main";


export const SignInForm = (): JSX.Element => {
    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);


    return (
        <div className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <form action="#">
                <div className={s.formWrap}>
                    <div className={s.title}>
                        <h2>Sign In</h2>
                    </div>
                    <Input disabled={false}
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
                        <p>Not a member yet? <a href="#"> Sign up</a></p>
                    </div>
                </div>
            </form>
        </div>

    )
};




