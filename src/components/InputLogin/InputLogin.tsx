import s from "../styleInput.module.scss";
import {IInputProps} from "../../../main";
import React from "react";


export const InputLogin  = <T,>(
    {
        register,
        name
    }:IInputProps<T>): JSX.Element => {


        return (
            <div className={s.inputBlock}>
            <label htmlFor={name}>Login</label>
                <div className={s.inputWrap} >
                    <input {...register(name, {required: "This is required."},)}
                           type='text'
                           id={name}
                    />
                </div>
            </div>
        )
    }
;


