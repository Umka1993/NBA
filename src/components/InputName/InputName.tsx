import {IInputProps} from "../../../main";
import s from "../styleInput.module.scss";

import React from "react";


export const InputName = <T,>(
        {
            register,
            name,
            isDisabled
        }: IInputProps<T>): JSX.Element => {

        return (
            <div className={s.inputBlock}>
                <label htmlFor={name}>Name</label>
                <div className={s.inputWrap} >
                    <input {...register(name, {required: "This is required."},)}
                           type='text'
                           id={name}
                           className={`${isDisabled ? s.disabled : ''} `}
                    />
                </div>
            </div>
        )
    }
;


