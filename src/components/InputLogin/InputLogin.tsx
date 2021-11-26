import s from './styleInputLogin.module.scss'
import {IInputProps} from "../../../main";
import {Input_2} from "../Input-2/Input";
import {Label} from "../Label/Label";


export const InputLogin  = (
    {
        label,
        register,
        errors,
        name
    }:IInputProps): JSX.Element => {



debugger
        return (

            <div className={s.inputBlock}>
                {label && <Label name={name} label={label}/>}

                <div className={`${errors.login ? s.error : ''} ${s.inputWrap}`}>
                    <Input_2 register={register} name={name} label={label}/>
                </div>

                {errors.login && <span>{errors.login.message}</span>}


            </div>
        )
    }
;


