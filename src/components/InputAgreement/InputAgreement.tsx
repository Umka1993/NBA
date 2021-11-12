import s from '../Input/styleInput.module.scss';
import {IInputProps} from "../../../main";
import {ErrorMessage} from "@hookform/error-message";


export const InputAgreement = (
        {
            label,
            isDisabled,
            type,
            register,
            errors,
            name
        }: IInputProps): JSX.Element => {


        const isErrorKey = Object.keys(errors);


        return (
            <div className={s.inputRadioBlock}>
                <div className={`${Object.keys(errors).length !== 0 && isErrorKey.includes(name)
                    ? s.error : ''} ${s.inputRadioWrap}`}>
                    <input {...register(name, {required: "This is required."})}
                           className={`${isDisabled ? s.disabled : ''} `}
                           type={type}
                           id={label}
                           name={name}
                    />
                    {label && <label htmlFor={label}>{label}</label>}

                </div>
                <ErrorMessage
                    errors={errors}
                    name={name}
                    render={({message}) => <span>{message}</span>}
                />

            </div>
        )
    }
;


