import React from 'react';
import s from "./SignInForm.module.scss";
import {InputPassword} from "../../../components/InputPassword/InputPassword";
import {useForm} from "react-hook-form";
import {SignInInputs} from "../../../../main";
import {Link} from "react-router-dom";
import {InputLogin} from "../../../components/InputLogin/InputLogin";
import {UnpackNestedValue} from "react-hook-form/dist/types/form";


export const SignInForm = (): JSX.Element => {
    const {register, handleSubmit, formState: {errors}} = useForm<SignInInputs>();


    const onSubmit = (data: UnpackNestedValue<SignInInputs>) => console.log(data);

    return (
        <div className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <form action="#">
                <div className={s.formWrap}>
                    <div className={s.title}>
                        <h2>Sign In</h2>
                    </div>
                    <div className={`${errors.Login ? s.error : ''} ${s.componentWrap}`} >
                        <InputLogin<SignInInputs>
                            disabled={false}
                            label='Login'
                            register={register}
                            name={"Login"}
                            isDisabled={false}
                        />
                        {errors.Login && (<span>{errors.Password.message}</span>)}
                    </div>


                    <div className={`${errors.Login ? s.error : ''} ${s.componentWrap}`}>
                        <InputPassword<SignInInputs>
                            disabled={false}
                            label='Password'
                            register={register}
                            name={"Password"}
                            isDisabled={false}
                        />
                        {errors.Password && (<span>{errors.Password.message}</span>)}
                    </div>

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




