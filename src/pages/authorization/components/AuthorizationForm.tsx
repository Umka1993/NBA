import React from 'react';
import s from "../authPage.module.scss";
import {Input} from "../../../components/Input/Input";
import {InputPassword} from "../../../components/InputPassword/InputPassword";
import {useForm, SubmitHandler} from "react-hook-form";

type Inputs = {
    name: string,
    exampleRequired: string,
};


export const AuthForm = (): JSX.Element => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = data => console.log(data);

    // debugger


    return (
        <div className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <form action="#">
                <div className={s.formWrap}>
                    <Input disabled={false}
                           error={false}
                           label='login'
                           register={register}

                    />
                    <InputPassword disabled={false}
                                   error={false}
                                   label='password'
                                   register={register}
                    />


                </div>
                <input type="submit" />


            </form>
        </div>
    );
};




