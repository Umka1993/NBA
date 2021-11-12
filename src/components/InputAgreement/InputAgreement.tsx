import s from '../Input/styleInput.module.scss';
import {IInputProps} from "../../../main";


export const InputAgreement = (
        {
            label,
            isDisabled,
            type,
            register,
            error,
            name
        }: IInputProps): JSX.Element => {


        const isErrorKey = Object.keys(error);


        return (
            <div className={s.inputRadioBlock}>
                <div className={`${isErrorKey.includes(name) ? s.error : ''} ${s.inputRadioWrap}`}>
                    <input {...register(name, {required: true})}
                           className={`${isDisabled ? s.disabled : ''} `}
                           type={type}
                           id={label}
                           name={name}
                    />
                    {label && <label htmlFor={label}>{label}</label>}

                </div>

                {isErrorKey.includes(name) && (<span>You must be accept the agreement.</span>)}
            </div>
        )
    }
;


