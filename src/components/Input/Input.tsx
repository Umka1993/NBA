import s from './styleInput.module.scss'
import {IInputProps} from "../../../main";
import {ErrorMessage} from '@hookform/error-message';


export const Input = (
        {
            label,
            togglePasswordShown,
            isDisabled,
            passwordShown,
            eyeClose,
            eyeOpen,
            type,
            register,
            errors,
            name,
            message
        }: IInputProps): JSX.Element => {

        const isErrorKey = Object.keys(errors);

    return (
            <div className={s.inputBlock}>
                {label && <label htmlFor={name}>{label}</label>}
                <div className={`${Object.keys(errors).length !== 0 && isErrorKey.includes(name)
                    ? s.error : ''} ${s.inputWrap}`}>
                    <input {...register(name, {required: "This is required."},)}
                           className={`${isDisabled ? s.disabled : ''} `}
                           type={!isDisabled ? (passwordShown ? type : 'text') : type}
                           id={name}
                    />
                    {eyeClose && eyeOpen ?
                        <div className={s.icon} onClick={togglePasswordShown}>
                            <img
                                src={!isDisabled ? (!passwordShown ? eyeOpen : eyeClose) : eyeClose}
                                alt="eye img"

                            />
                        </div>
                        : null}
                </div>

                <ErrorMessage
                    errors={errors}
                    name={name}
                    render={({message}) => <span>{message}</span>}
                />

                {message && (<span>{message}</span>)}
            </div>
        )
    }
;


